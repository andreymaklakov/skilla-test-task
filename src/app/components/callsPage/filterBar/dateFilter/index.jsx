import React, { useEffect, useState } from "react";
import styles from "./DateFilter.module.css";

import SvgBtnWrapper from "../../../ui/svgBtnWrapper";
import { ReactComponent as LeftArrow } from "../icons/leftArrow.svg";
import { ReactComponent as Calendar } from "../icons/calendar.svg";
import { ReactComponent as RightArrow } from "../icons/rightArrow.svg";
import { ReactComponent as Date } from "../icons/date.svg";

import FilterCard from "../filterCard";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  closeFilter,
  decreaseDateFilter,
  getFilterData,
  getOpenFilter,
  increaseDateFilter,
  openFilter,
} from "../../../store/filtration";
import { dateFilters } from "../filterData";

const DateFilter = () => {
  const data = useSelector(getFilterData());
  const filterIsOpen = useSelector(getOpenFilter());

  const dispatch = useDispatch();

  const selectedDate = dateFilters.find((date) => date.id === data.date)?.name;

  const filterName = "date";

  const onChangeRight = () => dispatch(increaseDateFilter());
  const onChangeLeft = () => dispatch(decreaseDateFilter());
  const onChangeFilterData = () => dispatch(changeFilter());
  const onCloseFilter = () => dispatch(closeFilter());
  const onOpenFilter = (name) => dispatch(openFilter(name));

  return (
    <div className={styles.date_filter}>
      <div className={styles.date_container}>
        <SvgBtnWrapper>
          <button className={styles.left_arrow} onClick={onChangeLeft}>
            <LeftArrow />
          </button>
        </SvgBtnWrapper>

        <SvgBtnWrapper>
          <button
            className={styles.date_frame}
            onClick={() => onOpenFilter(filterName)}
          >
            <Calendar className={styles.date_icon} />
            <span className={styles.date_text}>{selectedDate}</span>
          </button>
        </SvgBtnWrapper>

        <SvgBtnWrapper>
          <button className={styles.right_arrow} onClick={onChangeRight}>
            <RightArrow />
          </button>
        </SvgBtnWrapper>
      </div>

      {filterIsOpen === filterName && (
        <div className={styles.filter_container}>
          <FilterCard
            filtersArray={dateFilters}
            onChangeFilterData={onChangeFilterData}
            onCloseFilter={onCloseFilter}
            data={data}
            filterName={filterName}
          >
            <div>
              <p className={`${styles.choose_date}`}>Указать даты</p>
              <Date /> <Calendar className={styles.calendar} />
            </div>
          </FilterCard>
        </div>
      )}
    </div>
  );
};

export default DateFilter;
