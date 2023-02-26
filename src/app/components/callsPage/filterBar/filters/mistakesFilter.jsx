import React from "react";
import styles from "./Filters.module.css";

import FilterCard from "../filterCard";
import FilterBtn from "./filterBtn";
import { mistakesFilters } from "../filterData";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilterData,
  getOpenFilter,
  openFilter,
} from "../../../store/filtration";

const MistakesFilter = () => {
  const data = useSelector(getFilterData());
  const filterIsOpen = useSelector(getOpenFilter());

  const dispatch = useDispatch();

  const type = "mistakes";
  const activeFilter = mistakesFilters.find(
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
            filtersArray={mistakesFilters}
            filterName={type}
          ></FilterCard>
        </div>
      )}
    </div>
  );
};

export default MistakesFilter;
