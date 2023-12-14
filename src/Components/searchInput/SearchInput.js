// SearchInput.js
import React from "react";

import styles from "./searchInput.module.css";

import search from "../../img/icons/search.svg";
const SearchInput = ({ tests, value , setValue , filteredData}) => {
  return (
    <>
      <div className={styles.title}>
        <p>Dashboard</p>
      </div>
      <div className={styles["search-input"]}>
        <span className={styles.loupe}>
          <img src={search} alt="" />
        </span>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="What test are you looking for?"
        />
        <span className={styles["total-tests"]}>{filteredData.length} tests</span>
      </div>
    </>
  );
};

export default SearchInput;
