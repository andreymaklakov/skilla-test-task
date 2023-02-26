import React, { useState } from "react";
import todayDate from "../../utils/todayDate";
import Analytics from "./analitics";
import styles from "./Header.module.css";

import { ReactComponent as ArrowUp } from "./icons/arrows/arrowUpBlue.svg";
import { ReactComponent as ArrowDown } from "./icons/arrows/arrowDown.svg";

import Search from "./search";
import Profile from "./profile";
import SvgBtnWrapper from "../ui/svgBtnWrapper";

const Header = () => {
  const [inputIsOpen, setInputIsOpen] = useState(false);
  const [profileIsOpen, setProfileIsOpen] = useState(false);

  const handleOpenInput = () => {
    setInputIsOpen(true);
    setProfileIsOpen(false);
  };

  const handleCloseInput = () => {
    setInputIsOpen(false);
  };

  return (
    <header>
      <span className={styles.date}>{todayDate()}</span>

      <Analytics />

      <Search
        inputIsOpen={inputIsOpen}
        onOpen={handleOpenInput}
        onClose={handleCloseInput}
      />

      <div className={styles.name_container}>
        <span className={styles.name}>ИП Сидорова Александра Михайловна</span>

        <SvgBtnWrapper>
          <button className={styles.name_arrow_btn}>
            <ArrowDown className={styles.arrow} />
          </button>
        </SvgBtnWrapper>
      </div>

      <SvgBtnWrapper>
        <button
          className={styles.avatar_btn}
          onClick={() => {
            setInputIsOpen(false);
            setProfileIsOpen((prevState) => !prevState);
          }}
        >
          <img
            src={require("./icons/avatar/avatar.png")}
            alt="avatar"
            className={styles.avatar}
          />

          <div className={styles.avatar_arrow_wrapper}>
            {!profileIsOpen ? (
              <ArrowDown className={styles.arrow} />
            ) : (
              <ArrowUp className={styles.arrow} />
            )}
          </div>
        </button>
      </SvgBtnWrapper>

      <Profile profileIsOpen={profileIsOpen} />
    </header>
  );
};

export default Header;
