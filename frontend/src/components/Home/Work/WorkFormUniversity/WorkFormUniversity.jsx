import "./WorkFormUniversity.scss";
import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const WorkFormUniversity = () => {
  const [count, setCount] = useState(1);
  const [inputs, setInputs] = useState([{ type: "", name: "" }]);

  const handleAdd = () => {
    setCount(count + 1);
    setInputs([...inputs, { type: "", name: "" }]);
  };

  const handleRemove = (index) => {
    if (count > 1) {
      setCount(count - 1);
      const updatedInputs = [...inputs];
      updatedInputs.splice(index, 1);
      setInputs(updatedInputs);
    }
  };

  const handleInputs = (index, event) => {
    const { name, value } = event.target;
    const updatedInputs = [...inputs];
    updatedInputs[index][name] = value;
    setInputs(updatedInputs);
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
        {inputs.map((input, index) => (
          <div className="work-box-input">
            <div className="work-university-type">
              <select
                id={`select${index}`}
                name="type"
                value={input.type}
                onChange={(e) => handleInputs(index, e)}
              >
                <option value=""></option>
                <option value="out">ภายนอก</option>
                <option value="in">ภายใน</option>
                <option value="other">อื่นๆ</option>
              </select>
            </div>
            <div className="work-university-agency">
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={(e) => handleInputs(index, e)}
              />
            </div>
            <div className="work-university-remove">
              <button type="button" onClick={() => handleRemove()}>
                ลบ
              </button>
            </div>
          </div>
        ))}
        <div className="work-box-add">
          <button type="button" onClick={handleAdd}>
            <IoMdAddCircleOutline size="20px" />
            เพิ่มข้อมูล
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkFormUniversity;
