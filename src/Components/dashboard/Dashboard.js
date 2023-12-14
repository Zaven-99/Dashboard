import React from "react";

import styles from "../dashboard/dashboard.module.css";

import arrowUp from "../../img/icons/arrowUp.png";
import DashboardItem from "../dashboardItem/DashboardItem";

const Dashboard = ({tests , sites , loading, filteredData}) => {
  

  const sort = () => {
    console.log("sort");
  };

  return (
    <div className={styles.dashboard}>
      {loading && <div className={styles.error}>Что-то пошло не так...</div>}
      {!loading && (
        <table className={styles["dahboard-column"]}>
          <thead>
            <tr className={styles["column"]}>
              <th className={`${styles.name} ${styles["column-name"]}`}>
                NAME
              </th>
              <th className={`${styles.type} ${styles["column-name"]}`}>
                TYPE
                <img
                  className={styles.sort}
                  onClick={sort}
                  src={arrowUp}
                  alt=""
                />
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
                <DashboardItem filteredData = {filteredData} tests={tests} sites={sites} />
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
