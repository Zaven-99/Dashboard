import React from "react";
import styles from "../dashboardItem/dashboardItem.module.css";

import { NavLink } from "react-router-dom";

const DashboardItem = ({ tests, sites , filteredData}) => {
  const statusClasses = {
    online: styles["online-status"],
    draft: styles["draft-status"],
    paused: styles["paused-status"],
    stopped: styles["stopped-status"],
  };

  return (
    <div>
      {filteredData.map((test) => {
        const site = sites.find((site) => site.id === test.siteId);

        return (
          <div key={test.id} className={styles["dashboard-item"]}>
            <p className={styles["name"]}>{test.name}</p>
            <p className={styles["type"]}>
              {test.type.length > 3 ? test.type.toLowerCase() : test.type}
            </p>
            <p
              className={`${styles["status"]} ${
                statusClasses[test.status.toLowerCase()]
              }`}
            >
              {test.status.toLowerCase()}
            </p>
            {site && (
              <div className={styles.sites}>
                {site.url.replace(/^https?:\/\/(www\.)?/, "")}
              </div>
            )}
            <div
              className={`${
                test.status === "DRAFT"
                  ? styles["state-finalize"]
                  : styles["state-result"]
              }`}
            >
              {test.status === "DRAFT" ? (
                <NavLink to="/Finalize">Finalize</NavLink>
              ) : (
                <NavLink to="/Result">Result</NavLink>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardItem;
