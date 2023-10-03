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
        <div className="set-main">
          <table className="ttable">
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Settings;
