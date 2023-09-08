import "./WorkFormUniversity.scss";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const WorkFormUniversity = () => {
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
    <div className="work-form-university">
      <h1>หน่วยงานอื่นที่ติดต่อประสานงานทั้งภายในและภายนอกมหาวิทยาลัย</h1>
      <div className="work-university-box">
        <div className="work-box-nav">
          <div className="work-university-type">ประเภทหน่วยงาน</div>
          <div className="work-university-agency">ชื่อหน่วยองค์กร</div>
          <div className="work-university-remove"></div>
        </div>
        {Array.from({ length: count }, (_, index) => (
          <div className="work-box-input">
            <div className="work-university-type">
              <select id={`select${index}`}>
                <option value=""></option>
                <option value="out">ภายนอก</option>
                <option value="in">ภายใน</option>
                <option value="other">อื่นๆ</option>
              </select>
            </div>
            <div className="work-university-agency">
              <input type="text" />
            </div>
            <div className="work-university-remove">
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

export default WorkFormUniversity;
