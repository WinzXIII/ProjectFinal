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
          <th>ตรวจสอบ</th>
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
            <td>
              <button
                style={{
                  borderRadius: "20px",
                  borderWidth: "thin",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2px",
                  backgroundColor: isButtonClickable(row)
                    ? "lime"
                    : "grey", 
                }}
                disabled={!isButtonClickable(row)}
              >
                <img
                  src={plus}
                  alt="Plus"
                  style={{ marginRight: "2px", width: "16px", height: "17px" }}
                />
                ตรวจสอบ
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
