import React from "react";
import "./History.scss";
import { GoSearch } from "react-icons/go";

const History = () => {
  const [sort, setSort] = React.useState(false);

  const work = [
    {
      id: 1,
      term: "1/2566",
      dateStart: "1",
    },
  ];

  return (
    <div className="his-container">
      <div className="his-content">
        <div className="his-title">
          <p>ประวัติภาระงาน</p>
        </div>
        <div className="his-box">
          <div className="his-box-menu">
            <div className="his-menu-sort">
              <p>เรียงตามลำดับ : </p>{" "}
              <a onClick={() => setSort(!sort)}>
                {!sort ? "มากไปน้อย" : "น้อยไปมาก"}
              </a>
            </div>
            <div className="his-menu-search">
              <input type="search" />
              <span className="block">
                <GoSearch size="20px" />
              </span>
            </div>
          </div>
          <div className="his-box-table">
            <div className="his-table-head">
              <div className="his-table-number">ลำดับ</div>
              <div className="his-table-term">ปีการศึกษา</div>
              <div className="his-table-start">ตั้งต่วันที่</div>
              <div className="his-table-end">ถึงวันที่</div>
              <div className="his-table-status">สถานะ</div>
            </div>
            <div className="his-table-content">
              <div className="his-table-number"></div>
              <div className="his-table-term"></div>
              <div className="his-table-start"></div>
              <div className="his-table-end"></div>
              <div className="his-table-status"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
