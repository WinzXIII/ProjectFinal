import "./Work.scss";
import { useAuth } from "../../auth-page";
import { IoMdAddCircleOutline } from "react-icons/io";
import React from "react";

const Work = () => {
  const auth = useAuth();
  const user = auth.user;

  const [count, setCount] = React.useState(3);

  return (
    <div className="work-container">
      <div className="work-content">
        <div className="work-title">
          <p>กรอกภาระงาน</p>
        </div>

        <div className="work-infomation">
          <h1>ข้อมูลเกี่ยวกับผู้ปฏิบัติงาน</h1>
          <div className="work-infomation-box">
            <div className="work-box-text">
              <div className="work-text-data">
                <div className="work-data-text">
                  <p>ชื่อ - นามสกุล</p>
                  <a>{user?.name}</a>
                </div>
                <div className="work-data-text">
                  <p>ตำแหน่ง</p>
                  <a>{user?.position}</a>
                </div>
              </div>
              <div className="work-text-data">
                <div className="work-data-text">
                  <p>งาน :</p>
                  <a>{user?.work}</a>
                </div>
                <div className="work-data-text">
                  <p>หน่วยงาน :</p>
                  <a>{user?.agency}</a>
                </div>
              </div>
            </div>
            <div className="work-box-header">
              <p>ชื่อตำแหน่งผู้บังคับบัญชา</p>
            </div>
            <div className="work-box-text">
              <div className="work-text-data">
                <div className="work-data-text">
                  <p>ระดับต้น :</p>
                  <a>ดร.รัฐภาคย์ รุ่งทิพย์</a>
                </div>
              </div>
              <div className="work-text-data">
                <div className="work-data-text">
                  <p>ระดับเหนือขึ้นไป :</p>
                  <a>ดร.เกียรติ สุวรรณโชค</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form className="work-form" action="">
          <div className="work-form-main">
            <h1>ภาระงานหลักและผลการปฎิบัติงาน</h1>
            <div className="work-main-box">
              <div className="work-box-nav">
                <div className="work-nav-number">ลำดับ</div>
                <div className="work-nav-work">ภาระงาน</div>
                <div className="work-nav-detail">รายละเอียด</div>
                <div className="work-nav-result">ผลการปฏิบัติงาน</div>
              </div>
              {Array.from({ length: count }, (_, index) => (
                <div className="work-box-input" key={index}>
                  <div className="work-input-number">{index + 1}</div>
                  <div className="work-input-work">
                    <input type="text" />
                  </div>
                  <div className="work-input-detail">
                    <input type="text" />
                  </div>
                  <div className="work-input-result">
                    <select id={`select${index}`}>
                      <option value="none"></option>
                      <option value="success">เสร็จสิ้น</option>
                      <option value="wait">อยู่ระหว่างดำเนินการ</option>
                    </select>
                  </div>
                </div>
              ))}
              <div className="work-box-add">
                <button type="button" onClick={() => setCount(count + 1)}>
                  <IoMdAddCircleOutline size="20px" />
                  เพิ่มข้อมูล
                </button>
              </div>
            </div>
          </div>

          <div className="work-form-other">
            <h1>งานอื่น/งานพิเศษและผลการปฏิบัติงาน</h1>
            <div className="work-other-box"></div>
          </div>

          <div className="work-form-creative">
            <h1>
              นวัตกรรม/งานที่เกิดจากความคิดสร้างสรรค์/การพัฒนางานและผลที่ได้รับ
            </h1>
            <div className="work-creative-box"></div>
          </div>

          <div className="work-form-university">
            <h1>หน่วยงานอื่นที่ติดต่อประสานงานทั้งภายในและภายนอกมหาวิทยาลัย</h1>
            <div className="work-university-box"></div>
          </div>

          <div className="work-form-reward">
            <h1>รางวัลที่ได้รับจากการปฏิบัติงาน</h1>
            <div className="work-reward-box"></div>
          </div>

          <div className="work-form-submit">
            <button type="submit">บันทึกข้อมูล</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Work;
