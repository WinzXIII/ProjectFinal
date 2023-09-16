import "./WorkFormMain.scss";
import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const WorkFormMain = () => {
  const [count, setCount] = useState(1);
  const [inputs, setInputs] = useState([{ work: "", detail: "", result: "" }]);

  const handleAdd = () => {
    setCount(count + 1);
    setInputs([...inputs, { work: "", detail: "", result: "" }]);
  };

  const handleRemove = (index) => {
    if (count > 1) {
      setCount(count - 1);
      const updatedInputs = [...inputs];
      updatedInputs.splice(index, 1);
      setInputs(updatedInputs);
    }
  };

  const handleInput = (index, event) => {
    const { name, value } = event.target;
    const updatedInputs = [...inputs];
    updatedInputs[index][name] = value;
    setInputs(updatedInputs);
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
        {inputs.map((input, index) => (
          <div className="work-box-input" key={index}>
            <div className="work-main-number">{index + 1}</div>
            <div className="work-main-work">
              <input
                type="text"
                name="work"
                value={input.work}
                onChange={(e) => handleInput(index, e)}
              />
            </div>
            <div className="work-main-detail">
              <input
                type="text"
                name="detail"
                value={input.detail}
                onChange={(e) => handleInput(index, e)}
              />
            </div>
            <div className="work-main-result">
              <select
                id={`select${index}`}
                name="result"
                value={input.result}
                onChange={(e) => handleInput(index, e)}
              >
                <option value=""></option>
                <option value="success">เสร็จสิ้น</option>
                <option value="wait">อยู่ระหว่างดำเนินการ</option>
              </select>
            </div>
            <div className="work-main-remove">
              <button type="button" onClick={() => handleRemove(index)}>
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

export default WorkFormMain;
