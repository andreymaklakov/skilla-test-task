import React from "react";
import styles from "./Analytics.module.css";

const Analytics = () => {
  return (
    <div className={styles.analytics_container}>
      <div className={`${styles.analytics_item}  ${styles.analytics_item_1}`}>
        <span className={`${styles.analytics_text} ${styles.analytics_text_1}`}>
          Новые звонки&nbsp;
          <span className={styles.analytics_text_green}> 20 из 30 шт</span>
        </span>

        <div className={`${styles.green_bar} ${styles.bar}`}></div>
        <div className={`${styles.green_bar_empty} ${styles.bar_empty}`}></div>
      </div>

      <div className={`${styles.analytics_item}  ${styles.analytics_item_2}`}>
        <span className={`${styles.analytics_text} ${styles.analytics_text_2}`}>
          Качество разговоров&nbsp;
          <span className={styles.analytics_text_yellow}> 40%</span>
        </span>

        <div className={`${styles.yellow_bar} ${styles.bar}`}></div>
        <div className={`${styles.yellow_bar_empty} ${styles.bar_empty}`}></div>
      </div>

      <div className={`${styles.analytics_item}  ${styles.analytics_item_3}`}>
        <span className={`${styles.analytics_text} ${styles.analytics_text_3}`}>
          Конверсия в заказ&nbsp;
          <span className={styles.analytics_text_red}> 67%</span>
        </span>

        <div className={`${styles.red_bar} ${styles.bar}`}></div>
        <div className={`${styles.red_bar_empty} ${styles.bar_empty}`}></div>
      </div>
    </div>
  );
};

export default Analytics;
