import React, { useState } from "react";
import arrowUp from "../../img/icons/arrowUp.png";
import arrowDown from "../../img/icons/arrowDown.png";
import DashboardItem from "../dashboardItem/DashboardItem";
import styles from "../dashboard/dashboard.module.css";

const Dashboard = ({ sites, loading, filteredData }) => {
  const [sortedData, setSortedData] = useState(filteredData);
  const [changeArrow, setChangeArrow] = useState(false);

  const sort = () => {
    setChangeArrow(!changeArrow);

    const copyData = [...filteredData];
    const sortData = copyData.sort((a, b) => (a.name > b.name ? 1 : -1));
    setSortedData(changeArrow ? sortData.reverse() : sortData);
  };

  return (
    <div className={styles.dashboard}>
      {loading ? (
        <div className={styles.error}>Что-то пошло не так...</div>
      ) : (
        <table className={styles["dahboard-column"]}>
          <thead>
            <tr className={styles["column"]}>
              <th className={`${styles.name} ${styles["column-name"]}`}>
                NAME
              </th>
              <th
                onClick={sort}
                className={`${styles.type} ${styles["column-name"]}`}
              >
                TYPE
                {!changeArrow && (
                  <img
                    className={styles.sort}
                    onClick={sort}
                    src={arrowDown}
                    alt=""
                  />
                )}
                {changeArrow && (
                  <img
                    className={styles.arrowDown}
                    onClick={sort}
                    src={arrowUp}
                    alt=""
                  />
                )}
              </th>
              <th className={`${styles.status} ${styles["column-name"]}`}>
                STATUS
              </th>
              <th className={`${styles.site} ${styles["column-name"]}`}>
                SITE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <DashboardItem sortedData={sortedData} sites={sites} />
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
