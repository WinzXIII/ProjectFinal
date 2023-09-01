import "./Information.scss";
import { useAuth } from "../../auth-page";

const Information = () => {
  const auth = useAuth();
  const user = auth.user;

  return (
    <div className="info-container">
      <div className="info-content">
        <div className="info-title">ข้อมูลส่วนบุคคล</div>
        <div className="info-border">
          <div className="info-data">
            <div className="info-data-img">
              <img src={user?.img} alt="Person" />
            </div>

            <div className="info-data-text">
              <p>รหัสพนักงาน: {user?.codeID}</p>

              <div className="data-text">
                <div className="data-text-show">
                  <p>ชื่อ - นามสกุล​ :</p>
                  {user?.name}
                </div>
                <div className="data-text-show">
                  <p>ตำแหน่ง : </p>
                  {user?.position}
                </div>
              </div>

              <div className="data-text">
                <div className="data-text-show">
                  <p>งาน : </p>
                  {user?.work}
                </div>

                <div className="data-text-show">
                  <p>หน่วยงาน :</p>
                  {user?.agency}
                </div>
              </div>

              <p>ชื่อตำแหน่งผู้บังคับบัญชา</p>

              <div className="data-text">
                <div className="data-text-show">
                  <p>ระดับต้น​ : </p>
                  ดร.รัฐภาคย์ รุ่งทิพย์
                </div>
                <div className="data-text-show">
                  <p>ตำแหน่ง : </p>
                  หัวหน้า......
                </div>
              </div>

              <div className="data-text">
                <div className="data-text-show">
                  <p>ระดับเหนือขึ้นไป : </p>
                  ดร. เกียรติ สุวรรณโชค
                </div>

                <div className="data-text-show">
                  <p>ตำแหน่ง :</p>
                  ผช.ผอ.
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
