import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTypes } from "../callsPage/filterBar/filterData";
import { getCalls, loadCalls, loadRecords } from "../store/calls";
import { getFilterData, recieveFilters } from "../store/filtration";

const AppLoader = ({ children }) => {
  const data = useSelector(getFilterData());
  const calls = useSelector(getCalls());

  const dispatch = useDispatch();

  useEffect(() => {
    let filters = { date: 1 };
    for (const obj of filterTypes) {
      filters = { ...filters, [obj.type]: 1 };
    }

    dispatch(recieveFilters(filters));
    dispatch(loadCalls());
  }, []);

  useEffect(() => {
    if (calls) {
      dispatch(loadRecords());
    }
  }, [calls]);

  if (data && calls) {
    return children;
  }
};

export default AppLoader;
