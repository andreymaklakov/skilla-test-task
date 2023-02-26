import React from "react";
import styles from "./Profile.module.css";
import SvgBtnWrapper from "../../ui/svgBtnWrapper";

import { ReactComponent as Logout } from "../icons/profile/logout.svg";
import { ReactComponent as Calls } from "../icons/profile/calls.svg";
import { ReactComponent as Mail } from "../icons/profile/mail.svg";
import { ReactComponent as Login } from "../icons/profile/login.svg";
const Profile = ({ profileIsOpen }) => {
  const mockPersons = [
    { name: "Мирон Батонов", avatar: "small-avatar.png" },
    { name: "Алексей Ильин", avatar: "small-avatar.png" },
    { name: "Милана Константинопольская", avatar: "small-avatar.png" },
  ];

  if (profileIsOpen) {
    return (
      <div className={styles.profile_container}>
        <div className={styles.profile_wrapper}>
          <p className={styles.profile_name}>Упоров Кирилл</p>

          <SvgBtnWrapper>
            <button className={styles.logout_container}>
              <Logout />
            </button>
          </SvgBtnWrapper>

          <p className={styles.info_text_container}>
            <span className={`${styles.profile_text}`}>Директор</span>
            <span className={styles.elipse}></span>
            <span className={`${styles.profile_text}`}>Санкт-Петербург</span>
          </p>

          <p className={styles.cals_container}>
            <Calls className={styles.calls_icon} />
            <span className={`${styles.profile_text}`}>8 (800) 333-17-21</span>
          </p>

          <p className={styles.mail_container}>
            <Mail className={styles.mail_icon} />
            <span className={`${styles.profile_text}`}>hi@skilla.ru</span>
          </p>

          <div className={styles.line}></div>

          <div className={`${styles.ul}`}>
            <p className={`${styles.profile_text}`}>Операторы</p>

            <ul className={styles.list}>
              {mockPersons.map((oper, i) => (
                <li key={i}>
                  <div className={styles.hovered}></div>

                  <img
                    src={require(`../icons/avatar/${oper.avatar}`)}
                    alt="avatar"
                    className={styles.small_avatar}
                  />
                  <span className={`${styles.li_text}`}>{oper.name}</span>

                  <Login className={styles.login} />
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.ul}`}>
            <p className={`${styles.profile_text}`}>Логисты</p>

            <ul className={styles.list}>
              {mockPersons.map((log, i) => (
                <li key={i}>
                  <div className={styles.hovered}></div>
                  <img
                    src={require(`../icons/avatar/${log.avatar}`)}
                    alt="avatar"
                    className={styles.small_avatar}
                  />
                  <span className={`${styles.li_text}`}>{log.name}</span>

                  <Login className={styles.login} />
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.ul}`}>
            <p className={`${styles.profile_text}`}>Бухгалтеры</p>

            <ul className={styles.list}>
              {mockPersons.map((buh, i) => (
                <li key={i}>
                  <div className={styles.hovered}></div>
                  <img
                    src={require(`../icons/avatar/${buh.avatar}`)}
                    alt="avatar"
                    className={styles.small_avatar}
                  />
                  <span className={`${styles.li_text}`}>{buh.name}</span>

                  <Login className={styles.login} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  return "";
};

export default Profile;
