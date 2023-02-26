import React from "react";
import styles from "./Search.module.css";

import { ReactComponent as SearchIcon } from "../icons/search/search.svg";
import SvgBtnWrapper from "../../ui/svgBtnWrapper";
import Input from "../../ui/input";

const Search = ({ inputIsOpen, onOpen, onClose }) => {
  return (
    <>
      <div className={styles.search_btn}>
        <SvgBtnWrapper>
          <button onClick={onOpen}>
            <SearchIcon className={`${styles.search_icon}`} />
          </button>
        </SvgBtnWrapper>

        {inputIsOpen && (
          <div>
            <Input onClose={onClose} />
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
