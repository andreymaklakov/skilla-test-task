import React from "react";
import styles from "./Filters.module.css";

import FilterCard from "../filterCard";
import FilterBtn from "./filterBtn";
import { marksFilters } from "../filterData";
import {
  Awsome,
  Bad,
  Good,
  GrayCircle,
  GreenCircle,
  RedCircle,
} from "./filterChildren";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilterData,
  getOpenFilter,
  openFilter,
} from "../../../store/filtration";

const MarksFilter = () => {
  const data = useSelector(getFilterData());
  const filterIsOpen = useSelector(getOpenFilter());

  const dispatch = useDispatch();

  const childrenArray = [
    <Bad />,
    <Good />,
    <Awsome />,
    <RedCircle />,
    <GrayCircle />,
    <GreenCircle />,
  ];

  const type = "marks";
  const activeFilter =
    data[type] < 4
      ? marksFilters.find((filter) => filter.id === data[type])?.name
      : childrenArray[data[type] - 4];

  const onOpenFilter = (type) => dispatch(openFilter(type));

  return (
    <div className={styles.filter_container}>
      <FilterBtn
        openFilter={filterIsOpen === type}
        activeFilter={activeFilter}
        onOpenFilter={() => onOpenFilter(type)}
        data={data[type]}
      />

      {filterIsOpen === type && (
        <div className={styles.filter_card_container}>
          <FilterCard filtersArray={marksFilters} filterName={type}>
            <Bad />
            <Good />
            <Awsome />
            <RedCircle />
            <GrayCircle />
            <GreenCircle />
          </FilterCard>
        </div>
      )}
    </div>
  );
};

export default MarksFilter;
