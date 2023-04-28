const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_reference",
});

//upload
router.get("/upload", (req, res, next) => {
  res.render("upload");
});


router.get("/read/:id", (req, res, next) => {
  db.query(
    `SELECT * FROM reference WHERE id = ${req.params.id}`,
    function (err, result) {
      if (err) throw err;
      res.render("read", { data: result });
    }
  );

});

router.get("/computer", (req, res, next) => {
  res.json({
    message: "Computer category",
  });
});

router.get("/data_mining", (req, res, next) => {
  res.json({
    message: "Data Mining category",
  });
});

router.get("/software_engineering", (req, res, next) => {
  res.json({
    message: "Software Engineering category",
  });
});

router.get("/uiux", (req, res, next) => {
  res.json({
    message: "UIUX category",
  });
});

router.get("/security", (req, res, next) => {
  res.json({
    message: "Security category",
  });
});

router.get("/database", (req, res, next) => {
  res.json({
    message: "Database category",
  });
});

router.get("/web_development", (req, res, next) => {
  res.json({
    message: "Web Development category",
  });
});

router.get("/software_testing", (req, res, next) => {
  res.json({
    message: "Software Testing category",
  });
});

module.exports = router;
