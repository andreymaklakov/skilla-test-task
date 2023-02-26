import { createSlice, createAction } from "@reduxjs/toolkit";

const callsSlice = createSlice({
  name: "calls",
  initialState: {
    isLoading: true,
    calls: null,
    records: null,
  },
  reducers: {
    callsRequested() {},
    callsRecieved(state, action) {
      state.calls = action.payload;
    },
    callsRequestFailed() {},
    recordsRequested(state) {
      state.isLoading = true;
    },
    recordsRecieved(state, action) {
      state.records = action.payload;
      state.isLoading = false;
    },
    recordsRequestFailed(state) {
      state.isLoading = false;
    },
  },
});

const { reducer: callsReducer, actions } = callsSlice;
const {
  callsRequested,
  callsRecieved,
  callsRequestFailed,
  recordsRequested,
  recordsRecieved,
  recordsRequestFailed,
} = actions;

export const getCalls = () => (state) => state.calls.calls;

export const loadCalls = () => async (dispatch) => {
  dispatch(callsRequested());

  try {
    const response = await fetch("https://api.skilla.ru/mango/getList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer testtoken",
      },
    });
    const { results } = await response.json();

    dispatch(callsRecieved(results));
  } catch (error) {
    dispatch(callsRequestFailed());
    throw error;
  }
};

export const loadRecords = () => async (dispatch, getState) => {
  dispatch(recordsRequested());

  const headers = new Headers();
  headers.append(
    "Content-type",
    "audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3"
  );
  headers.append("Authorization", "Bearer testtoken");

  let recordId;
  let partnerId;
  let records = [];

  if (getCalls()(getState())) {
    const callsWithRecords = getCalls()(getState()).filter(
      (call) => call.record
    );

    try {
      for (const call of callsWithRecords) {
        recordId = call.record;
        partnerId = call.partnership_id;

        const response = await fetch(
          `https://api.skilla.ru/mango/getRecord?record=${recordId}&partnership_id=${partnerId}`,
          {
            method: "POST",
            headers: headers,
          }
        );
        const blob = await response.blob();

        const audioURL = URL.createObjectURL(blob);

        records.push({ callId: call.id, audioURL });
      }

      dispatch(recordsRecieved(records));
    } catch (error) {
      dispatch(recordsRequestFailed());
      throw error;
    }
  }
};

export const getRecords = () => (state) => state.calls.records;
export const getRecordsAreLoading = () => (state) => state.calls.isLoading;

export default callsReducer;
