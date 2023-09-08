import "./WorkFormReward.scss";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const WorkFormReward = () => {
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
        {Array.from({ length: count }, (_, index) => (
          <div className="work-box-input">
            <div className="work-reward-number">{index + 1}</div>
            <div className="work-reward-name">
              <input type="text" />
            </div>
            <div className="work-reward-type">
              <input type="text" />
            </div>
            <div className="work-reward-agency">
              <input type="text" />
            </div>
            <div className="work-reward-date">
              <input
                className="work-reward-date-settings"
                type="date"
                defaultValue={new Date().toISOString().slice(0, 10)}
              />
            </div>
            <div className="work-reward-remove">
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

export default WorkFormReward;
