// // const db = require("../util/sqlite");
// const db = require("../util/mysql");

// module.exports = class Blog {
//   constructor(BlogID, Title, Article) {
//     this.BlogID = BlogID;
//     this.Title = Title;
//     this.Article = Article;
//   }

//   save() {
//     const sql = "INSERT INTO Books (Title, Author, Comments) VALUES (?, ?, ?)";
//     const params = [this.Title, this.Author, this.Comments];

//     return db.execute(sql, params);
//   }

//   static find() {
//     const sql = "SELECT * FROM Books ORDER BY Book_ID DESC";
//     return db.query(sql);
//   }

//   static findById(id) {
//     const sql = "SELECT * FROM Books WHERE Book_ID = ?";
//     return db.execute(sql, [id]);
//   }

//   static updateOne(data) {
//     const sql =
//       "UPDATE Books SET Title = ?, Author = ?, Comments = ? WHERE (Book_ID = ?)";
//     const params = [data.Title, data.Author, data.Comments, data.id]; //literal
//     // const params = Object.values(data) //shorter but less reliable
//     return db.execute(sql, params);
//   }

//   static deleteOne(id) {
//     const sql = "DELETE FROM Books WHERE Book_ID = ?";
//     return db.execute(sql, [id]);
//   }
// };
