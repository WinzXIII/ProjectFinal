import "./WorkFormCreative.scss";
import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const WorkFormCreative = () => {
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
    <div className="work-form-creative" id="formCreative">
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
        {inputs.map((input, index) => (
          <div className="work-box-input" key={index}>
            <div className="work-creative-number">{index + 1}</div>
            <div className="work-creative-work">
              <input
                type="text"
                name="work"
                value={input.work}
                onChange={(e) => handleInputs(index, e)}
              />
            </div>
            <div className="work-creative-result">
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
            <div className="work-creative-remove">
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

export default WorkFormCreative;
