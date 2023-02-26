import React from "react";
import styles from "./Filters.module.css";

export const Bad = () => {
  return <div className={styles.bad}>Плохо</div>;
};

export const Good = () => {
  return <div className={styles.good}>Хорошо</div>;
};

export const Awsome = () => {
  return <div className={styles.awsome}>Отлично</div>;
};

export const RedCircle = () => {
  return (
    <div className={styles.circle_container}>
      <div className={`${styles.circle} ${styles.red}`}></div>
    </div>
  );
};

export const GrayCircle = () => {
  return (
    <div className={styles.circle_container}>
      <div className={`${styles.circle} ${styles.gray}`}></div>
      <div className={`${styles.circle} ${styles.gray}`}></div>
    </div>
  );
};

export const GreenCircle = () => {
  return (
    <div className={styles.circle_container}>
      <div className={`${styles.circle} ${styles.green}`}></div>
      <div className={`${styles.circle} ${styles.green}`}></div>
      <div className={`${styles.circle} ${styles.green}`}></div>
    </div>
  );
};
