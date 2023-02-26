import React, { useState } from "react";
import menuItems from "./menuItems";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  const [activeItem, setActiveItem] = useState("Звонки");

  return (
    <ul className={styles.menu_list}>
      {menuItems.map((item) =>
        activeItem === item.name ? (
          <Link to={item.pathName} key={item.name}>
            <li
              className={`${styles.menu_item} ${styles.menu_item_active_bgnd}`}
              key={item.name}
              onClick={() => {
                setActiveItem(item.name);
              }}
            >
              <span className={styles.menu_item_active_rect}></span>

              <span className={styles.icon_container}>
                <img
                  src={require(`../icons/menuIcons/${item.logo}`)}
                  alt={`${item.name} logo`}
                  className={styles.icon}
                />
              </span>
              <span
                className={`${styles.menu_item_text} ${styles.menu_item_active_text}`}
              >
                {item.name}
              </span>

              <span className={styles.menu_item_active_mark}></span>
            </li>
          </Link>
        ) : (
          <Link to={item.pathName} key={item.name}>
            <li
              className={`${styles.menu_item}`}
              key={item.name}
              onClick={() => {
                setActiveItem(item.name);
              }}
            >
              <span className={styles.icon_container}>
                <img
                  src={require(`../icons/menuIcons/${item.logo}`)}
                  alt={`${item.name} logo`}
                  className={styles.icon}
                />
              </span>
              <span className={`${styles.menu_item_text}`}>{item.name}</span>
            </li>
          </Link>
        )
      )}
    </ul>
  );
};

export default Menu;
