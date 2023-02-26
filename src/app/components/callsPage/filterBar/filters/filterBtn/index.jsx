import React from "react";
import SvgBtnWrapper from "../../../../ui/svgBtnWrapper";
import styles from "./FilterBtn.module.css";

import { ReactComponent as ArrowDown } from "../../../../header/icons/arrows/arrowDown.svg";

const FilterBtn = ({ activeFilter, onOpenFilter, data, openFilter }) => {
  const filterIsNotDefault = data !== 1;

  return (
    <SvgBtnWrapper>
      <button onClick={onOpenFilter} className={styles.btn_container}>
        <span
          className={`${styles.text} ${styles.btm_line_text} ${
            filterIsNotDefault ? styles.activeFilter : ""
          } ${openFilter ? styles.openFilter : ""}`}
        >
          {activeFilter}
        </span>

        <ArrowDown className={styles.arrow} />
      </button>
    </SvgBtnWrapper>
  );
};

export default FilterBtn;
