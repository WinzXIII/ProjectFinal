import { useAuth } from "../../auth-page";
import "./Settings.scss";

const Settings = () => {
  const auth = useAuth();
  const dataUser = auth.informationUser;

  return (
    <div className="set-container">
      <div className="set-content">
        <div className="set-title">
          <p>กำหนดสิทธิ์</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
