import React, { useEffect, useState } from "react";
import Dashboard from "../../Components/dashboard/Dashboard";
import SearchInput from "../../Components/searchInput/SearchInput";
import styles from "../main/main.module.css";

const MainPage = ({ sites, loading, tests, filteredData, value, setValue }) => {
  const [noResults, setNoResults] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

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
        value={value}
        handleInputChange={handleInputChange}
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
