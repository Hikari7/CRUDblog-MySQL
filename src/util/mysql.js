const mysql = require("mysql2");

console.log("MYSQL_HOST: ", process.env.MYSQL_HOST);

//asyncが使える, this is for the cofnfiguration of my backend
//to connect my remote db
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DBNAME,
  port: process.env.MYSQL_PORT,
});

//to query and check if table "article" exists
const sql = `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='railway' AND TABLE_NAME='Article'`;
pool.query(sql, (err, data) => {
  if (err) {
    return console.error(err.message);
  }

  console.log(data);

  if (data.length === 0) {
    console.log("Table 'Article' does not exist");
    //seedDB: create table and implant data
    // seedDB();
  } else {
    console.log("Table 'Article' exists");
  }
});

//seedDB: custom function

module.exports = pool.promise();
