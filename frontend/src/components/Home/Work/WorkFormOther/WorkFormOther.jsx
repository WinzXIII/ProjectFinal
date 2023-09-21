import "./WorkFormOther.scss";
import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const WorkFormOther = () => {
  const [count, setCount] = useState(1);
  const [inputs, setInputs] = useState([{ work: "", result: "" }]);

  const handleAdd = () => {
    setCount(count + 1);
    setInputs([...inputs, { work: "", result: "" }]);
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
    <div className="work-form-other" id="formOther">
      <h1>งานอื่น / งานพิเศษและผลการปฏิบัติงาน</h1>
      <div className="work-other-box">
        <div className="work-box-nav">
          <div className="work-other-number">ลำดับ</div>
          <div className="work-other-work">งานอื่น/งานพิเศษ</div>
          <div className="work-other-result">ผลการปฏิบัติงาน</div>
          <div className="work-other-remove"></div>
        </div>
        {inputs.map((input, index) => (
          <div className="work-box-input" key={index}>
            <div className="work-other-number">{index + 1}</div>
            <div className="work-other-work">
              <input
                type="text"
                name="work"
                value={input.work}
                onChange={(e) => handleInputs(index, e)}
              />
            </div>
            <div className="work-other-result">
              <select
                id={`select${index}`}
                name="result"
                value={input.result}
                onChange={(e) => handleInputs(index, e)}
              >
                <option value=""></option>
                <option value="success">เสร็จสิ้น</option>
                <option value="wait">อยู่ระหว่างดำเนินการ</option>
              </select>
            </div>
            <div className="work-other-remove">
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

export default WorkFormOther;
