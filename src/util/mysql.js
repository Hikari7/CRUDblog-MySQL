const mysql = require("mysql2");

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
const sql = `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='railway' AND TABLE_NAME='Blogs'`;
pool.query(sql, (err, data) => {
  if (err) {
    return console.error(err.message);
  }

  //データがあるかチェック
  if (data.length === 0) {
    console.log("Table 'Blogs' does not exist");
    //seedDB: create table and implant data
    seedDB();
  } else {
    console.log("Ta  ble 'Blogs' exists");
  }
});

//seedDB: custom function
const seedDB = () => {
  pool.query(`DROP TABLE IF EXISTS Blogs`);

  //テーブルの作成
  //作成するテーブルの名前はblogでid, title, articleの3つの列を持ち、idはオートインクリメントで自動で1ずつ増える整数でプライマリキーに設定しています。
  //title, articleはVARCHARでNOT NULLを設定します。
  pool.query(
    `CREATE TABLE Blogs (
            Blog_ID INT PRIMARY KEY AUTO_INCREMENT,
            Title VARCHAR(100) NOT NULL,
            Date VARCHAR(100) NOT NULL,
            Article TEXT
            );`,
    (err) => {
      if (err) {
        return console.error("CREATE TABLE:", err.message);
      }
      console.log("Successful creation of the 'Blogs' table");
    }
  );

  //内容を書く
  pool.query(
    `
      INSERT INTO Blogs (Blog_ID, Title, Date, Article) VALUES
      (1, 'How To Eat', '0901','Absolutely salivating'),
      (2, 'Does Your Cat Want to Murder You?', '0901','Absolutely salivating'),
      (3, 'Dame da','0901', 'Absolutely salivating');`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of 3 Blogs");
    }
  );
};

module.exports = pool.promise();
