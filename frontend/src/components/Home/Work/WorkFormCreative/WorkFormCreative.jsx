import "./WorkFormCreative.scss";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const WorkFormCreative = () => {
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
    <div className="work-form-creative">
      <h1>
        นวัตกรรม / งานที่เกิดจากความคิดสร้างสรรค์ / การพัฒนางานและผลที่ได้รับ
      </h1>
      <div className="work-creative-box">
        <div className="work-box-nav">
          <div className="work-creative-number">ลำดับ</div>
          <div className="work-creative-work">งานอื่นๆ/งานพิเศษ</div>
          <div className="work-creative-result">ผลการปฏิบัติงาน</div>
          <div className="work-creative-remove"></div>
        </div>
        {Array.from({ length: count }, (_, index) => (
          <div className="work-box-input">
            <div className="work-creative-number">{index + 1}</div>
            <div className="work-creative-work">
              <input type="text" />
            </div>
            <div className="work-reative-result">
              <select id={`select${index}`}>
                <option value=""></option>
                <option value="success">เสร็จสิ้น</option>
                <option value="wait">อยู่ระหว่างดำเนินการ</option>
              </select>
            </div>
            <div className="work-creative-remove">
              <button type="button" onClick={() => Remove()}>
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

export default WorkFormCreative;
