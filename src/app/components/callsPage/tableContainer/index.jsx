import React from "react";
import { useSelector } from "react-redux";

import { getCalls, getRecords, getRecordsAreLoading } from "../../store/calls";
import { getFilterData } from "../../store/filtration";

import styles from "./TableContainer.module.css";

import getCallTime from "../../../utils/callTime";
import getCallDuration from "../../../utils/callDuration";
import sortedCallsByDate from "../../../utils/sortedCallsByDate";
import { date, isToday } from "../../../utils/callsDate";

import { ReactComponent as Incoming } from "./icons/vectors/incoming-blue.svg";
import { ReactComponent as Outcoming } from "./icons/vectors/outcoming-green.svg";

const TableContainer = () => {
  const calls = useSelector(getCalls());
  const filterData = useSelector(getFilterData());
  const records = useSelector(getRecords());
  const recordsAreLoading = useSelector(getRecordsAreLoading());

  const filteredCallsByType = calls.filter((call) => {
    if (filterData.types === 2) {
      return call.in_out === 1;
    } else if (filterData.types === 3) {
      return call.in_out === 0;
    }
    return call;
  });

  return (
    <div className={styles.container}>
      <table>
        <thead className={styles.table_header}>
          <tr>
            <th className={styles.type}>Тип</th>
            <th className={styles.time}>Время</th>
            <th className={styles.worker}>Сотрудник</th>
            <th className={styles.call}>Звонок</th>
            <th className={styles.source}>Источник</th>
            <th className={styles.mark}>Оценка</th>
            <th className={styles.duration}>Длительность</th>
          </tr>
        </thead>

        {sortedCallsByDate(filteredCallsByType).map((calls, i) => (
          <tbody key={i}>
            {!isToday(calls) && (
              <tr>
                <td className={styles.yesterday}>
                  {date(calls)}{" "}
                  <span className={styles.number}>{calls.length}</span>
                </td>
              </tr>
            )}

            {calls.map((call, i) => (
              <tr className={styles.table_data} key={i}>
                <td
                  className={`${styles.type} ${
                    call.status === "Не дозвонился" ? styles.red_fill : ""
                  }`}
                >
                  {call.in_out === 1 ? <Incoming /> : <Outcoming />}
                </td>
                <td className={`${styles.time} ${styles.time_data}`}>
                  {getCallTime(call)}
                </td>
                <td className={styles.worker}>
                  {call.person_avatar && (
                    <img
                      src={call.person_avatar}
                      alt="avatar"
                      className={styles.avatar}
                    />
                  )}
                </td>
                <td className={styles.call}>
                  {call.contact_name ||
                    call.contact_company ||
                    `+${call.in_out === 1 ? call.from_number : call.to_number}`}
                </td>
                <td className={`${styles.source} ${styles.source_data}`}>
                  {call.source}
                </td>
                {/* information about marks was not found */}
                <td
                  className={`${styles.mark} ${
                    call.errors ? styles.error : ""
                  }`}
                >
                  {call.errors}
                </td>
                <td className={`${styles.duration} ${styles.duration_data}`}>
                  {
                    <span className={styles.duration_time}>
                      {getCallDuration(call)}
                    </span>
                  }

                  {call.record ? (
                    recordsAreLoading ? (
                      <div className={styles.loader}>
                        <div className={styles.loading_circle}></div>
                        <span className={styles.loading}>Загружаем</span>
                      </div>
                    ) : (
                      <audio
                        controls
                        src={
                          records.find((record) => record.callId === call.id)
                            .audioURL
                        }
                      ></audio>
                    )
                  ) : (
                    getCallDuration(call)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default TableContainer;
