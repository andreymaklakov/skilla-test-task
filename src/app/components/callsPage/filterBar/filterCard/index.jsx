import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  closeFilter,
  getFilterData,
} from "../../../store/filtration";
import styles from "./FilterCard.module.css";

const FilterCard = ({ children, filtersArray, filterName }) => {
  const data = useSelector(getFilterData());

  const dispatch = useDispatch();

  const onChangeFilterData = (id, name) => dispatch(changeFilter(id, name));

  const onCloseFilter = () => dispatch(closeFilter());

  if (children) {
    children = Array.isArray(children) ? children : [{ ...children }];
  }

  return (
    <>
      <div>
        <div className={styles.filter_card}>
          <ul className={styles.filters_list}>
            {filtersArray.map((item) => (
              <li
                key={item.id}
                className={`${styles.list_item} ${
                  data[filterName] === item.id ? styles.active_item : ""
                }`}
                onClick={() => {
                  onChangeFilterData(item.id, filterName);
                  onCloseFilter();
                }}
              >
                <div className={styles.hovered}></div>
                {item.avatar && (
                  <img
                    src={require("../../../header/icons/avatar/small-avatar.png")}
                    alt="avatar"
                    className={styles.avatar}
                  />
                )}
                {item.name}
              </li>
            ))}

            {children &&
              children.map((child, i) => (
                <li
                  key={i}
                  className={`${styles.list_item} ${
                    filterName === "date" ? styles.children : ""
                  }`}
                  onClick={() => {
                    filterName === "marks" &&
                      onChangeFilterData(i + 4, filterName);
                    onCloseFilter();
                  }}
                >
                  <div
                    className={`${styles.hovered} ${
                      filterName === "date"
                        ? styles.hovered_date_choose_btn
                        : ""
                    }`}
                  ></div>
                  {child}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FilterCard;
