import React, { useEffect, useState } from "react";
import Dashboard from "../../Components/dashboard/Dashboard";
import SearchInput from "../../Components/searchInput/SearchInput";
import styles from "../main/main.module.css";

const MainPage = () => {
  const [tests, setTests] = useState([]);
  const [sites, setSites] = useState([]);

  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState("");
  const [noResults, setNoResults] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3100/tests");
        const response2 = await fetch(" http://localhost:3100/sites");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const tests = await response.json();
        const sites = await response2.json();
        setTests(tests);
        setSites(sites);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(true);
      }
    };

    fetchData();
  }, []);

  const filteredData = tests.filter((test) =>
    test.name.toLowerCase().includes(value.toLowerCase())
  );

  useEffect(() => {
     setNoResults(filteredData.length === 0);
  }, [filteredData]);

  const reset = () => {
    setValue("");
  };

  return (
    <div>
      <SearchInput
        filteredData={filteredData}
        tests={tests}
        setValue={setValue}
        value={value}
      />

      {noResults ? (
        <div>
          <div className={styles.notFound}>
            Your search did not match any results.
          </div>
          <button onClick={reset} className={styles.btn}>
            Reset
          </button>
        </div>
      ) : (
        <Dashboard
          filteredData={filteredData}
          tests={tests}
          sites={sites}
          loading={loading}
        />
      )}
    </div>
  );
};

export default MainPage;
