import React from "react";
import plus from "C:/Users/thebi/Desktop/Projects/ProjectFinal/frontend/src/assets/emoji/plus.png";

const Table = ({ data }) => {
  if (!data) {
    return null; 
  }

  const headers = Object.keys(data[0]);

  const getFontColor = (text) => {
    if (text === "ประเมินแล้ว" || text === "ตรวจแล้ว") {
      return "lime";
    } else if (text === "ยังไม่ประเมิน" || text === "ยังไม่ตรวจ") {
      return "red";
    } else {
      return "inherit"; 
    }
  };


  const isButtonClickable = (row) => {
    return (
      row["สถานะการประเมิน"] === "ประเมินแล้ว"
    );
  };

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}

        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td
                key={header}
                style={{
                  color:
                    header === "สถานะการประเมิน" ||
                    header === "สถานะการตรวจสอบ"
                      ? getFontColor(row[header])
                      : "inherit",
                }}
              >
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
