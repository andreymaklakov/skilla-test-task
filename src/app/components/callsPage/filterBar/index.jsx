import React, { useState } from "react";
import styles from "./FilterBar.module.css";

import { ReactComponent as Plus } from "./icons/plus.svg";
import { ReactComponent as Search } from "../../header/icons/search/search.svg";
import { ReactComponent as Close } from "../../header/icons/close/close.svg";

import DateFilter from "./dateFilter";
import SvgBtnWrapper from "../../ui/svgBtnWrapper";
import Input from "../../ui/input";
import Filters from "./filters";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters, getFilterData } from "../../store/filtration";

const FilterBar = () => {
  const data = useSelector(getFilterData());

  const dispatch = useDispatch();

  const [inputIsOpen, setInputIsOpen] = useState(false);

  const handleOpenInput = () => {
    setInputIsOpen(true);
  };

  const handleCloseInput = () => {
    setInputIsOpen(false);
  };

  const allFiltersAreDefault = () => {
    const notDefaultFilterValuesArray = Object.values(data).filter(
      (value) => value !== 1
    );
    return notDefaultFilterValuesArray.length ? true : false;
  };

  const handleClearFilters = () => dispatch(clearFilters());

  return (
    <div>
      <div className={styles.topline_container}>
        <button className={styles.balance_container}>
          <span className={styles.text}>Баланс:&nbsp;</span>
          <span className={styles.amount}>272 ₽</span>
          <Plus className={styles.plus} />
        </button>

        <DateFilter />
      </div>

      <div className={styles.btmline_container}>
        <div>
          <SvgBtnWrapper>
            <button className={styles.filter_btn} onClick={handleOpenInput}>
              <Search className={`${styles.search_icon}`} />
              <span
                className={`${styles.text} ${styles.search_text} ${styles.btm_line_text}`}
              >
                Поиск по звонкам
              </span>
            </button>
          </SvgBtnWrapper>

          {inputIsOpen && <Input onClose={handleCloseInput} />}
        </div>

        <div className={styles.filters_container}>
          {allFiltersAreDefault() && (
            <div className={styles.clear_filters_container}>
              <SvgBtnWrapper>
                <button
                  onClick={handleClearFilters}
                  className={styles.btn_container}
                >
                  <span className={`${styles.text} ${styles.btm_line_text}`}>
                    Сбросить фильтры
                  </span>

                  <Close className={styles.close} />
                </button>
              </SvgBtnWrapper>
            </div>
          )}

          <Filters />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
