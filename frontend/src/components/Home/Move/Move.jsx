import React, { useState } from "react";
import "./Move.scss";
import { departments, personsByDepartment } from "./Datas"; 
import Options from "./Options"; 

const Move = () => {
  // State to keep track of the selected department
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department); // Simply set the selected department
  };

  const handleOptionChange = (person, option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [person]: option,
    }));
  };

  return (
    <div className="move-container">
      <div className="move-content">
        <div className="move-title">
          <h1>ย้ายแผนกนะจ๊ะ</h1>
        </div>
        <div className="container">
          <div className="department-list">
            <ul>
              {departments.map((department) => (
                <li
                  key={department}
                  className={selectedDepartment === department ? "active" : ""}
                  onClick={() => handleDepartmentClick(department)}
                >
                  {department}
                  {selectedDepartment === department && (
                    <ul className="person-list">
                      {personsByDepartment[department].map((person) => (
                        <li key={person}>
                          <div className="person-info">
                            <span className="person-name">{person}</span>
                            <div className="dropdown">
                              <select
                                value={selectedOptions[person] || ""}
                                onChange={(event) =>
                                  handleOptionChange(person, event.target.value)
                                }
                              >
                                <Options
                                  handleOptionChange={(option) =>
                                    handleOptionChange(person, option)
                                  }
                                />
                              </select>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Move;
