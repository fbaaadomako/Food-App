require("dotenv").config();
const mysql = require("mysql");
const fs = require("fs");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "foodfinder",
  multipleStatements: true,
});

let sql = fs.readFileSync(__dirname + "/init_db.sql").toString(); // this is new
con.query(sql, function (err, result) {
  if (err) throw err;
<<<<<<< HEAD
  console.log("Connected!"); 
 
let sql = fs.readFileSync(__dirname+"/init_db.sql").toString();
con.query(sql, function(err, result) { 
    if (err) throw err;
    console.log("Table creation `foodfinder` was successful!");

    console.log("Closing...");
  });

  con.end();
||||||| 31ac5cd
  console.log("Connected!");

  let sql =
    "DROP TABLE if exists users; CREATE TABLE users(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), username VARCHAR(255), password VARCHAR(255));" +
    "DROP TABLE if exists restaurants; CREATE TABLE restaurants(id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, restaurant_id VARCHAR(255), city VARCHAR(255), dairy_free BOOLEAN, gluten_free BOOLEAN, vegetarian BOOLEAN, vegan BOOLEAN);";
  // let sql = fs.readFileSync(__dirname + "/init_db.sql").toString();
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `foodfinder` was successful!");

    console.log("Closing...");
  });

  con.end();
=======
  console.log("Table creation `foodfinder` was successful!");

  console.log("Closing...");
>>>>>>> f0dc059cfbca41caa5df7d738250c360b95bf7a2
});

con.end();
