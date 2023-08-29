import "./Information.scss";
import { useAuth } from "../../../auth-page";

const Information = () => {
  const auth = useAuth();
  const user = auth?.user;

  return (
    <div className="info-container">
      <div className="info-textheader">Personal information</div>
      <div className="info-table">
        <div className="table-img">
          <img src={user?.img} alt="person" />
        </div>

        <div className="table-data">
          <div className="data-id">Employee ID {user?.codeID}</div>

          <div className="data-private">
            <div className="data-set">
              <div>
                <p>Name - Surname:</p>
                {user?.name}
              </div>
              <div>
                <p>Work:</p>
                {user?.work}
              </div>
            </div>
            <div className="data-set">
              <div>
                <p>Position:</p>
                {user?.position}
              </div>
              <div>
                <p>Agency:</p>
                {user?.agency}
              </div>
            </div>
          </div>

          <div className="data-span-text">Supervisor position name</div>

          <div className="data-private">
            <div className="data-set">
              <div>
                <p>Elementary level:</p>
                ดร.รัฐภาคย์ รุ่งทิพย์
              </div>
              <div>
                <p>Above level:</p>
                ดร.เกียรติ สุวรรณโชค
              </div>
            </div>
            <div className="data-set">
              <div>
                <p>Position:</p>
                หัวหน้า
              </div>
              <div>
                <p>Position:</p>
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
