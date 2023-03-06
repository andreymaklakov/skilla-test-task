import { createSlice } from "@reduxjs/toolkit";
import { dateFilters } from "../callsPage/filterBar/filterData";

const filtrationSlice = createSlice({
  name: "filtration",
  initialState: {
    openFilter: "",
    filterData: null,
    profileIsOpen: false,
  },
  reducers: {
    filtersRecieved(state, action) {
      state.filterData = action.payload;
    },
    filterChanged(state, action) {
      state.filterData = {
        ...state.filterData,
        ...action.payload,
      };
    },
    filterDateDecreased(state, action) {
      state.filterData = {
        ...state.filterData,
        date: action.payload,
      };
    },
    filterDateIncreased(state, action) {
      state.filterData = {
        ...state.filterData,
        date: action.payload,
      };
    },
    filtersCleared(state) {
      Object.keys(state.filterData).map(
        (key) => (state.filterData = { ...state.filterData, [key]: 1 })
      );
    },
    filterClosed(state) {
      state.openFilter = "";
    },
    filterOpened(state, action) {
      state.openFilter = action.payload;
    },
  },
});

const { reducer: filtrationReducer, actions } = filtrationSlice;
const {
  filtersRecieved,
  filterChanged,
  filterDateDecreased,
  filterDateIncreased,
  filtersCleared,
  filterClosed,
  filterOpened,
} = actions;

export const getFilterData = () => (state) => state.filtration.filterData;

export const recieveFilters = (data) => (dispatch) => {
  dispatch(filtersRecieved(data));
};

export const changeFilter = (id, target) => (dispatch) => {
  dispatch(filterChanged({ [target]: id }));
};

export const decreaseDateFilter = () => (dispatch, getState) => {
  let newDate;
  if (getFilterData()(getState()).date === 1) {
    newDate = dateFilters.length;
  } else {
    newDate = getFilterData()(getState()).date - 1;
  }

  dispatch(filterDateDecreased(newDate));
};

export const increaseDateFilter = () => (dispatch, getState) => {
  let newDate;
  if (getFilterData()(getState()).date === dateFilters.length) {
    newDate = 1;
  } else {
    newDate = getFilterData()(getState()).date + 1;
  }

  dispatch(filterDateIncreased(newDate));
};

export const clearFilters = () => (dispatch) => {
  dispatch(filtersCleared());
};

export const closeFilter = () => (dispatch) => {
  dispatch(filterClosed());
};

export const openFilter = (data) => (dispatch) => {
  dispatch(filterOpened(data));
};

export const getOpenFilter = () => (state) => state.filtration.openFilter;

export default filtrationReducer;
