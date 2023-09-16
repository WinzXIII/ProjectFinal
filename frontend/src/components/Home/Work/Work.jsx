import "./Work.scss";
import { useAuth } from "../../auth-page";
import { IoMdAddCircleOutline } from "react-icons/io";
import React from "react";
import WorkFormMain from "./WorkFormMain/WorkFormMain";
import WorkFormOther from "./WorkFormOther/WorkFormOther";
import WorkFormCreative from "./WorkFormCreative/WorkFormCreative";
import WorkFormUniversity from "./WorkFormUniversity/WorkFormUniversity";
import WorkFormReward from "./WorkFormReward/WorkFormReward";

const Work = () => {
  const auth = useAuth();
  const user = auth.user;

  const SubmitForm = (e) => {
    e.preventDefault();

    console.log(e);
  };

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

        <form className="work-form" onSubmit={SubmitForm}>
          <WorkFormMain />
          <WorkFormOther />
          <WorkFormCreative />
          <WorkFormUniversity />
          <WorkFormReward />
          <div className="work-form-submit">
            <button type="submit">บันทึกข้อมูล</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Work;
