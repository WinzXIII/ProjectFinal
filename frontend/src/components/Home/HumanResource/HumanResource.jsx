// HumanResource.jsx
import React, { useState } from "react";
import "./HumanResource.scss";
// import searchImage from "C:/Users/thebi/Desktop/Projects/ProjectFinal/frontend/src/assets/emoji/search.png";
import TableDatas from "./TableDatas"; 
import Table from "./Table";


const HumanResource = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);


    const filtered = TableDatas.map((table) => ({
      tableName: table.tableName,
      data: table.data.filter((row) =>
        row["รหัสพนักงาน"].toLowerCase().includes(query.toLowerCase())
      ),
    }));
    setFilteredData(filtered);
  };


  const tablesToRender = searchQuery ? filteredData : TableDatas; 

  return (
    <div className="per-container">
      <div className="per-content">
        <div className="per-title">
          <p>รายงานการประเมิน</p>
        </div>
        <div className="searchbox">
          <input
            type="text"
            placeholder="ค้นหา : รหัสพนักงาน"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <img className="Search" alt="Search" src={searchImage} />
        </div>
        {tablesToRender.map((table, index) => (
          <div className="table-container" key={index}>
            <div className="table-name">{table.tableName}</div>
            <Table data={table.data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HumanResource;
