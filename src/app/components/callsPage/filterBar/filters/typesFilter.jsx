import React from "react";
import styles from "./Filters.module.css";

import FilterCard from "../filterCard";
import FilterBtn from "./filterBtn";
import { typesFilters } from "../filterData";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilterData,
  getOpenFilter,
  openFilter,
} from "../../../store/filtration";

const TypesFilter = () => {
  const data = useSelector(getFilterData());
  const filterIsOpen = useSelector(getOpenFilter());

  const dispatch = useDispatch();

  const type = "types";
  const activeFilter = typesFilters.find(
    (filter) => filter.id === data[type]
  )?.name;

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
          <FilterCard
            filtersArray={typesFilters}
            filterName={type}
          ></FilterCard>
        </div>
      )}
    </div>
  );
};

export default TypesFilter;
