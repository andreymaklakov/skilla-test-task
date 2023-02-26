import React from "react";
import styles from "./Filters.module.css";

import FilterCard from "../filterCard";
import FilterBtn from "./filterBtn";
import { sourcesFilters } from "../filterData";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilterData,
  getOpenFilter,
  openFilter,
} from "../../../store/filtration";

const SourcesFilter = () => {
  const data = useSelector(getFilterData());
  const filterIsOpen = useSelector(getOpenFilter());

  const dispatch = useDispatch();

  const type = "sources";
  const activeFilter = sourcesFilters.find(
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
            filtersArray={sourcesFilters}
            filterName={type}
          ></FilterCard>
        </div>
      )}
    </div>
  );
};

export default SourcesFilter;
