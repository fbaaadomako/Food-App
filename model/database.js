require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "foodfinder",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE if exists users; CREATE TABLE users(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), username VARCHAR(255), password VARCHAR(255));" +
    "DROP TABLE if exists restaurants; CREATE TABLE restaurants(id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, restaurant_id VARCHAR(255), dairy_free BOOLEAN, gluten_free BOOLEAN, vegetarian BOOLEAN, vegan BOOLEAN));";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `foodfinder` was successful!");

    console.log("Closing...");
  });

  con.end();
});
