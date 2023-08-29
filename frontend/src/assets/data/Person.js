import Member from "../picture/Avatar/Member.jpeg"
import Agency from "../picture/Avatar/Agency.jpg"
import HR from "../picture/Avatar/HR.jpg"

const user = [
    {
        id: 1,
        setting: "Member",
        codeID: "ME1234",
        name: "นายผดุง นาแก",
        position: "เจ้าหน้าที่งานทั่วไป",
        work: "หน่วยการเงินและบัญชี",
        agency: "บริหารงานกลาง",
        email: "padung@gmail.com",
        password: "12345",
        img: Member,
    },
    {
        id: 2,
        setting: "Agency",
        codeID: "AE1234",
        name: "นางแก้ว กุลา",
        position: "หัวหน้าฝ่าย",
        work: "หน่วยการจัดการฝ่าย",
        agency: "หัวหน้าฝ่าย",
        email: "kaew@gmail.com",
        password: "12345",
        img: Agency,
    },
    {
        id: 3,
        setting: "Admin",
        codeID: "HR1234",
        name: "นางแตง กวาดอง",
        position: "ผู้จัดการ",
        work: "ผู้จัดงาน",
        agency: "ผู้จัดการ",
        email: "tang@gmail.com",
        password: "12345",
        img: HR,
    },
]

export default user