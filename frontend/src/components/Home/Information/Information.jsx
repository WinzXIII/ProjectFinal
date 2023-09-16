import "./Information.scss";
import { useAuth } from "../../auth-page";

const Information = () => {
  const auth = useAuth();
  const user = auth.user;

  return (
    <div className="info-container">
      <div className="info-content">
        <div className="info-title">
          <p>ข้อมูลส่วนบุคคล</p>
        </div>
        <div className="info-box">
          <div className="info-box-img">
            <img src={user?.image} alt="Person" />
          </div>
          <div className="info-box-text">
            <div className="info-text-data">
              <div className="info-data-header">รหัสพนักงาน {user?.codeID}</div>

              <div className="info-data-body">
                <div className="info-body-text">
                  <div className="info-text">
                    <p>ชื่อ - นามสกุล :</p>
                    <p>
                      {user?.gender}
                      {user?.firstName} {user?.lastName}
                    </p>
                  </div>
                  <div className="info-text">
                    <p>ตำแหน่ง :</p>
                    <p> {user?.position} </p>
                  </div>
                </div>
                <div className="info-body-text">
                  <div className="info-text">
                    <p>งาน :</p>
                    <p> {user?.department} </p>
                  </div>
                  <div className="info-text">
                    <p>หน่วยงาน :</p>
                    <p> {user?.agency} </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-text-data">
              <div className="info-data-header">ชื่อตำแหน่งผู้บังคับบัญชา</div>
              <div className="info-data-body">
                <div className="info-body-text">
                  <div className="info-text">
                    <p>ระดับต้น :</p>
                    <p>ดร.รัฐภาคย์ รุ่งทิพย์</p>
                  </div>
                  <div className="info-text">
                    <p>ตำแหน่ง :</p>
                    <p>หัวหน้า......</p>
                  </div>
                </div>
                <div className="info-body-text">
                  <div className="info-text">
                    <p>ระดับเหนือขึ้นไป :</p>
                    <p>ดร.เกียรติ สุวรรณโชค</p>
                  </div>
                  <div className="info-text">
                    <p>ตำแหน่ง :</p>
                    <p>ผช.ผอ.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
