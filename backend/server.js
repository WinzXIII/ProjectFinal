const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  };

app.use(cors(corsOptions));

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "25452545",
  database: "Technopolis",
});

con.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
  } else {
    console.log("Connected to MySQL database!");
  }
});

app.get("/api/user", (req, res) => {
  con.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.error("เกิดข้อผิดพลาด", err);
      res.status(500).json({ err: "เกิดข้อผิดพลาด" });
    } else {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(result, null, 2));
    }
  });
});

app.listen(3000, () => {
  console.log(`Server is running`);
});
