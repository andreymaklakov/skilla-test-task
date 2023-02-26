import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeFilter, getOpenFilter } from "../store/filtration";

const WindowWrapper = ({ children }) => {
  const filterIsOpen = useSelector(getOpenFilter());

  const dispatch = useDispatch();

  const handleCloseFilter = () => {
    if (filterIsOpen) {
      dispatch(closeFilter());
    }
  };

  return <div onClick={handleCloseFilter}>{children}</div>;
};

export default WindowWrapper;
