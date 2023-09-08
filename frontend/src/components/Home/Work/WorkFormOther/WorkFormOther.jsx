import "./WorkFormOther.scss";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const WorkFormOther = () => {
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
    <div className="work-form-other">
      <h1>งานอื่น / งานพิเศษและผลการปฏิบัติงาน</h1>
      <div className="work-other-box">
        <div className="work-box-nav">
          <div className="work-other-number">ลำดับ</div>
          <div className="work-other-work">งานอื่น/งานพิเศษ</div>
          <div className="work-other-result">ผลการปฏิบัติงาน</div>
          <div className="work-other-remove"></div>
        </div>
        {Array.from({ length: count }, (_, index) => (
          <div className="work-box-input" key={index}>
            <div className="work-other-number">{index + 1}</div>
            <div className="work-other-work">
              <input type="text" />
            </div>
            <div className="work-other-result">
              <select id={`select${index}`}>
                <option value=""></option>
                <option value="success">เสร็จสิ้น</option>
                <option value="wait">อยู่ระหว่างดำเนินการ</option>
              </select>
            </div>
            <div className="work-other-remove">
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
          <button type="button" onClick={() =>  Add()}>
            <IoMdAddCircleOutline size="20px" />
            เพิ่มข้อมูล
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkFormOther;
