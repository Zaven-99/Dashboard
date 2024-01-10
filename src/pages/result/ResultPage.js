import React from "react";
import styles from "./result.module.css";
import { useParams } from "react-router-dom";

import DashboardRoute from "../../Components/dashboardItem/dashboardRoute/DashboardRoute";

const ResultPage = ({ tests, sites }) => {
  const { id } = useParams();

  const test = tests.find((test) => test.id === Number(id));
   
  const site = sites.find((site) => site.id === test.siteId);

  return (
    <div>
      <p className={styles.title}>Result</p>
      <p className={styles.content}>Order basket redesing</p>
      <div>
        <DashboardRoute site={site} test={test} />
      </div>
    </div>
  );
};

export default ResultPage;
