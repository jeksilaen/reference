require("dotenv").config();

const express = require("express");
const mysql = require("mysql");
const app = express();
const path = require("path");
const upload = require("express-fileupload");

app.use(express.json());
app.use(upload());

// Middleware for json and urlencoded requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "uploads")));

app.set("view engine", "ejs");

// MySQL connection
const db = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.DB_PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MySQL!");
  }
});

// Routes middleware
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/upload", require("./routes/upload"));
app.use("/category", require("./routes/category"));
app.use("/dashboard", require("./routes/dashboard"));

app.get("/", require("./routes/home"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});
