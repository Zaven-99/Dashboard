import React from "react";
import styles from "../../../pages/finalize/finalize.module.css";

const statusClasses = {
  online: styles["online-status"],
  draft: styles["draft-status"],
  paused: styles["paused-status"],
  stopped: styles["stopped-status"],
};

const DashboardRoute = ({ site, test }) => {
  if (!test || !site) {
    return <div>Loading...</div>;
  }
  return (
    <div key={test.id} className={styles["dashboard-item"]}>
      {site?.url === "https://market.company.com" ? (
        <span className={styles.marketCompanyStyle}></span>
      ) : (
        ""
      )}
      {site?.url === "https://www.delivery.company.com" ? (
        <span className={styles.deliveryCompanyStyle}></span>
      ) : (
        ""
      )}
      {site?.url === "http://games.company.com" ? (
        <span className={styles.gamesCompanyStyle}></span>
      ) : (
        ""
      )}

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
        {test.status === "DRAFT" ? <div>Finalize</div> : <div>Result</div>}
      </div>
    </div>
  );
};

export default DashboardRoute;
