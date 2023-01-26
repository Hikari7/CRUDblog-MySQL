//userID用の

const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DBNAME,
  port: process.env.MYSQL_PORT,
});

const sql = `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='railway' AND TABLE_NAME='Users'`;
pool.query(sql, (err, data) => {
  if (err) {
    return console.error(err.message);
  }

  if (data.length === 0) {
    console.log("Table 'Users' does not exist");
    seedDB();
  } else {
    console.log("Table 'Users' exists");
  }
});

const seedDB = () => {
  pool.query(`DROP TABLE IF EXISTS Users`);

  pool.query(
    `CREATE TABLE Users (
            User_ID INT PRIMARY KEY AUTO_INCREMENT,
            Name VARCHAR(100) NOT NULL,
            Pw VARCHAR(100) NOT NULL
            );`,
    (err) => {
      if (err) {
        return console.error("CREATE TABLE:", err.message);
      }
      console.log("Successful creation of the 'Users' table");
    }
  );

  pool.query(
    `
      INSERT INTO Users (User_ID, Name, Pw) VALUES
      (1, 'Hikari', 'Hikari0712'),
      (2, 'Koro', 'Koro1008'),
      (3, 'Jungkook', 'Jungkook0901');`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of 3 Users");
    }
  );
};

module.exports = pool.promise();
