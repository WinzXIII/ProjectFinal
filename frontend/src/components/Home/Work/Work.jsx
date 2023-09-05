import "./Work.scss";
import { useAuth } from "../../auth-page";
import { IoMdAddCircleOutline } from "react-icons/io";
import React from "react";

const Work = () => {
  const auth = useAuth();
  const user = auth.user;

  const [count, setCount] = React.useState(1);

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
                <div className="work-main-number">ลำดับ</div>
                <div className="work-main-work">ภาระงาน</div>
                <div className="work-main-detail">รายละเอียด</div>
                <div className="work-main-result">ผลการปฏิบัติงาน</div>
                <div className="work-main-remove"></div>
              </div>
              {Array.from({ length: count }, (_, index) => (
                <div className="work-box-input" key={index}>
                  <div className="work-main-number">{index + 1}</div>
                  <div className="work-main-work">
                    <input type="text" required />
                  </div>
                  <div className="work-main-detail">
                    <input type="text" required />
                  </div>
                  <div className="work-main-result">
                    <select id={`select${index}`} required>
                      <option value=""></option>
                      <option value="success">เสร็จสิ้น</option>
                      <option value="wait">อยู่ระหว่างดำเนินการ</option>
                    </select>
                  </div>
                  <div className="work-main-remove">
                    <button
                      type="button"
                      onClick={() => {
                        if (count > 1) {
                          setCount(count - 1);
                        }
                      }}
                    >
                      ลบ
                    </button>
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
            <h1>งานอื่น / งานพิเศษและผลการปฏิบัติงาน</h1>
            <div className="work-other-box">
              <div className="work-box-nav">
                <div className="work-other-number">ลำดับ</div>
                <div className="work-other-work">งานอื่นๆ/งานพิเศษ</div>
                <div className="work-other-result">ผลการปฏิบัติงาน</div>
                <div className="work-other-remove"></div>
              </div>
              {Array.from({ length: count }, (_, index) => (
                <div className="work-box-input">
                  <div className="work-other-number">{index + 1}</div>
                  <div className="work-other-work">
                    <input type="text" required />
                  </div>
                  <div className="work-other-result">
                    <select id={`select${index}`} required>
                      <option value=""></option>
                      <option value="success">เสร็จสิ้น</option>
                      <option value="wait">อยู่ระหว่างดำเนินการ</option>
                    </select>
                  </div>
                  <div className="work-other-remove">
                    <button
                      type="button"
                      onClick={() => {
                        if (count > 1) {
                          setCount(count - 1);
                        }
                      }}
                    >
                      ลบ
                    </button>
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

          <div className="work-form-creative">
            <h1>
              นวัตกรรม / งานที่เกิดจากความคิดสร้างสรรค์ /
              การพัฒนางานและผลที่ได้รับ
            </h1>
            <div className="work-creative-box">
              <div className="work-box-nav">
                <div className="work-creative-number">ลำดับ</div>
                <div className="work-creative-work">งานอื่นๆ/งานพิเศษ</div>
                <div className="work-creative-result">ผลการปฏิบัติงาน</div>
                <div className="work-creative-remove"></div>
              </div>
              {Array.from({ length: count }, (_, index) => (
                <div className="work-box-input">
                  <div className="work-creative-number">{index + 1}</div>
                  <div className="work-creative-work">
                    <input type="text" required />
                  </div>
                  <div className="work-reative-result">
                    <select id={`select${index}`} required>
                      <option value=""></option>
                      <option value="success">เสร็จสิ้น</option>
                      <option value="wait">อยู่ระหว่างดำเนินการ</option>
                    </select>
                  </div>
                  <div className="work-creative-remove">
                    <button
                      type="button"
                      onClick={() => {
                        if (count > 1) {
                          setCount(count - 1);
                        }
                      }}
                    >
                      ลบ
                    </button>
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

          <div className="work-form-university">
            <h1>หน่วยงานอื่นที่ติดต่อประสานงานทั้งภายในและภายนอกมหาวิทยาลัย</h1>
            <div className="work-university-box">
              <div className="work-box-nav">
                <div className="work-university-type">ประเภทหน่วยงาน</div>
                <div className="work-university-agency">ชื่อหน่วยองค์กร</div>
                <div className="work-university-remove"></div>
              </div>
              {Array.from({ length: count }, (_, index) => (
                <div className="work-box-input">
                  <div className="work-university-type">
                    <select id={`select${index}`} required>
                      <option value=""></option>
                      <option value="success">ภายใน</option>
                      <option value="wait">ภายนอก</option>
                    </select>
                  </div>
                  <div className="work-university-agency">
                    <input type="text" required />
                  </div>
                  <div className="work-university-remove">
                    <button
                      type="button"
                      onClick={() => {
                        if (count > 1) {
                          setCount(count - 1);
                        }
                      }}
                    >
                      ลบ
                    </button>
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

          <div className="work-form-reward">
            <h1>รางวัลที่ได้รับจากการปฏิบัติงาน</h1>
            <div className="work-reward-box">
              <div className="work-box-nav">
                <div className="work-reward-number">ลำดับ</div>
                <div className="work-reward-name">ชื่อรางวัล</div>
                <div className="work-reward-type">ลักษณะรางวัลที่ได้รับ</div>
                <div className="work-reward-agency">
                  หน่วยงานที่ได้รับมอบหมาย
                </div>
                <div className="work-reward-date">วันที่ได้รับรางวัล</div>
                <div className="work-reward-remove"></div>
              </div>
              {Array.from({ length: count }, (_, index) => (
                <div className="work-box-input">
                  <div className="work-reward-number">{index + 1}</div>
                  <div className="work-reward-name">
                    <input type="text" required />
                  </div>
                  <div className="work-reward-type">
                    <input type="text" required />
                  </div>
                  <div className="work-reward-agency">
                    <input type="text" required />
                  </div>
                  <div className="work-reward-date">
                    <input className="work-reward-date-settings" type="date" required />
                  </div>
                  <div className="work-reward-remove">
                    <button
                      type="button"
                      onClick={() => {
                        if (count > 1) {
                          setCount(count - 1);
                        }
                      }}
                    >
                      ลบ
                    </button>
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

          <div className="work-form-submit">
            <button type="submit">บันทึกข้อมูล</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Work;
