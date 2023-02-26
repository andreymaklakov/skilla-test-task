import React from "react";
import styles from "./SideBar.module.css";
import logo from "./icons/logo/logo.svg";
import Menu from "./menu";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Skilla logo" />
        </Link>
      </div>

      <nav>
        <Menu />
      </nav>

      <button className={`${styles.add_order_btn} ${styles.blue_btn}`}>
        <span className={`${styles.add_btn_text} ${styles.btn_text}`}>
          Добавить заказ
        </span>
        <img
          src={require(`./icons/btnIcons/add.png`)}
          alt="add icon"
          className={styles.add_btn_icon}
        />
      </button>
      <button className={`${styles.payment_btn} ${styles.blue_btn}`}>
        <span className={`${styles.pay_btn_text} ${styles.btn_text}`}>
          Оплата
        </span>
        <span className={styles.pay_btn_icon_wrapper}>
          <img
            src={require(`./icons/btnIcons/pay.png`)}
            alt="payment icon"
            className={styles.pay_btn_icon}
          />
        </span>
      </button>
    </aside>
  );
};

export default SideBar;
