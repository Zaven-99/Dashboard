import React from "react";
import { useParams } from "react-router-dom";
import styles from "./finalize.module.css";
import DashboardRoute from "../../Components/dashboardItem/dashboardRoute/DashboardRoute";

const FinalizePage = ({ tests, sites }) => {
  const { id } = useParams();

  const test = tests.find((test) => test.id === Number(id));
  const site = sites.find((site) => site.id === test.siteId);

  return (
    <div>
      <p className={styles.title}>Finalize</p>
      <p className={styles.content}>Order basket redesing</p>
      <div />
      <DashboardRoute site={site} test={test} />
      <div />
    </div>
  );
};

export default FinalizePage;
