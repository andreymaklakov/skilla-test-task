import React from "react";
import styles from "./Input.module.css";

import { ReactComponent as Close } from "../../header/icons/close/close.svg";
import { ReactComponent as SearchIcon } from "../../header/icons/search/search.svg";
import SvgBtnWrapper from "../svgBtnWrapper";

const Input = ({ onClose }) => {
  return (
    <div className={styles.search_input_container}>
      <div className={styles.search_input_wrapper}>
        <form action="">
          <SearchIcon className={`${styles.search_icon_input}`} />

          <input
            type="tel"
            className={styles.search_input}
            id={"tel"}
            name={"tel"}
            // value={"tel"}
            autoFocus
          />
        </form>

        <SvgBtnWrapper>
          <button className={styles.close_btn} onClick={onClose}>
            <Close className={styles.close_icon} />
          </button>
        </SvgBtnWrapper>
      </div>
    </div>
  );
};

export default Input;
