import "./Information.scss";
import { useAuth } from "../../../auth-page";

const Information = () => {
  const auth = useAuth();
  const user = auth?.user;

  return (
    <div className="info-container">
      <div className="info-textheader">ข้อมูลส่วนบุคคล</div>
      <div className="info-table">
        <div className="table-img">
          <img src={user?.img} alt="person" />
        </div>

        <div className="table-data">
          <div className="data-id">รหัสพนักงาน {user?.codeID}</div>

          <div className="data-private">
            <div className="data-set">
              <div>
                <p>ชื่อ - สกุล:</p>
                {user?.name}
              </div>
              <div>
                <p>งาน:</p>
                {user?.work}
              </div>
            </div>
            <div className="data-set">
              <div>
                <p>ตำแหน่ง:</p>
                {user?.position}
              </div>
              <div>
                <p>หน่วยงาน:</p>
                {user?.agency}
              </div>
            </div>
          </div>

          <div className="data-span-text">ชื่อตำแหน่งผู้บังคับบัญชา</div>

          <div className="data-private">
            <div className="data-set">
              <div>
                <p>ระดับต้น:</p>
                ดร.รัฐภาคย์ รุ่งทิพย์
              </div>
              <div>
                <p>ระดับเหนือขึ้นไป:</p>
                ดร.เกียรติ สุวรรณโชค
              </div>
            </div>
            <div className="data-set">
              <div>
                <p>ตำแหน่ง:</p>
                หัวหน้า
              </div>
              <div>
                <p>ตำแหน่ง:</p>
                ผช.ผอ.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
