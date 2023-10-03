import "./Form.scss";

const Form = () => {
  return (
    <div className="form-container">
      <div className="form-content">
        <div className="form-title">
          <p>เปิด / ปิดฟอร์มแบบประเมิน</p>
        </div>
        <div className="form-main">
          <table className="data-table">
            <thead>
              <tr>
                <th>ลำดับ</th>
                <th>แผนก</th>
                <th>รายละเอียด</th>
                <th>กำหนดวัน/เวลา</th>
                <th>สถานะ</th>
              </tr>
            </thead>
            <tbody>
              {/* ที่นี่คุณสามารถเพิ่มข้อมูลแต่ละแถวของตารางที่ต้องการ */}
              <tr>
                <td>1</td>
                <td>แผนก A</td>
                <td>รายละเอียดงาน A</td>
                <td>01/10/2023 10:00</td>
                <td>เปิด</td>
              </tr>
              <tr>
                <td>2</td>
                <td>แผนก B</td>
                <td>รายละเอียดงาน B</td>
                <td>02/10/2023 14:30</td>
                <td>ปิด</td>
              </tr>
              {/* เพิ่มแถวอื่น ๆ ตามต้องการ */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Form;
