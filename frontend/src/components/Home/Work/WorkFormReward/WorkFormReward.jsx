import "./WorkFormReward.scss";
import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const WorkFormReward = () => {
  const [count, setCount] = useState(1);
  const [inputs, setInputs] = useState([
    { reward: "", type: "", agency: "", date: "" },
  ]);

  const handleAdd = () => {
    setCount(count + 1);
    setInputs([...inputs, { reward: "", type: "", agency: "", date: "" }]);
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
    const updatedinputs = [...inputs];
    updatedinputs[index][name] = value;
    setInputs(updatedinputs);
  };

  return (
    <div className="work-form-reward">
      <h1>รางวัลที่ได้รับจากการปฏิบัติงาน</h1>
      <div className="work-reward-box">
        <div className="work-box-nav">
          <div className="work-reward-number">ลำดับ</div>
          <div className="work-reward-name">ชื่อรางวัล</div>
          <div className="work-reward-type">ลักษณะรางวัลที่ได้รับ</div>
          <div className="work-reward-agency">หน่วยงานที่ได้รับมอบหมาย</div>
          <div className="work-reward-date">วันที่ได้รับรางวัล</div>
          <div className="work-reward-remove"></div>
        </div>
        {inputs.map((input, index) => (
          <div className="work-box-input">
            <div className="work-reward-number">{index + 1}</div>
            <div className="work-reward-name">
              <input
                type="text"
                name="reward"
                value={input.reward}
                onChange={(e) => handleInputs(index, e)}
              />
            </div>
            <div className="work-reward-type">
              <input
                type="text"
                name="type"
                value={input.type}
                onChange={(e) => handleInputs(index, e)}
              />
            </div>
            <div className="work-reward-agency">
              <input
                type="text"
                name="agency"
                value={input.agency}
                onChange={(e) => handleInputs(index, e)}
              />
            </div>
            <div className="work-reward-date">
              <input
                className="work-reward-date-settings"
                type="date"
                defaultValue={new Date().toISOString().slice(0, 10)}
                name="date"
                value={input.date}
                onChange={(e) => handleInputs(index, e)}
              />
            </div>
            <div className="work-reward-remove">
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

export default WorkFormReward;
