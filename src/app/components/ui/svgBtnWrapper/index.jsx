import React from "react";
import styles from "./SvgBtnWrapper.module.css";

const SvgBtnWrapper = ({ children }) => {
  return <div className={styles.svg_btn_wrapper}>{children}</div>;
};

export default SvgBtnWrapper;
