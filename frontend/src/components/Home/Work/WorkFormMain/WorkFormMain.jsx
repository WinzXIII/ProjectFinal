import "./WorkFormMain.scss";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const WorkFormMain = () => {
  const [count, setCount] = React.useState(1);

  const Add = () => {
    setCount(count + 1);
  };

  const Remove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="work-form-main">
      <h1>ภาระงานหลักและผลการปฎิบัติงาน</h1>
      <div className="work-main-box">
        <div className="work-box-nav">
          <div className="work-main-number">ลำดับ</div>
          <div className="work-main-work">ภาระงาน</div>
          <div className="work-main-detail">รายละเอียด</div>
          <div className="work-main-result">ผลการปฏิบัติงาน</div>
          <div className="work-main-remove"></div>
        </div>
        {Array.from({ length: count }, (_, index) => (
          <div className="work-box-input" key={index}>
            <div className="work-main-number">{index + 1}</div>
            <div className="work-main-work">
              <input type="text" />
            </div>
            <div className="work-main-detail">
              <input type="text" />
            </div>
            <div className="work-main-result">
              <select id={`select${index}`}>
                <option value=""></option>
                <option value="success">เสร็จสิ้น</option>
                <option value="wait">อยู่ระหว่างดำเนินการ</option>
              </select>
            </div>
            <div className="work-main-remove">
              <button
                type="button"
                onClick={() => Remove()}
              >
                ลบ
              </button>
            </div>
          </div>
        ))}
        <div className="work-box-add">
          <button type="button" onClick={() => Add()}>
            <IoMdAddCircleOutline size="20px" />
            เพิ่มข้อมูล
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkFormMain;
