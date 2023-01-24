//DB関連の処理を担当 (CRUDの操作)

//データベースに接続された状況をimport, ここで読み込んでいく操作をする

//query: 実行したいSQL文をセット、SQLに必要ならパラメーターをセット、SQLを実行
//excute: 変動値があればqueryの代わりにexcuteを使う
const db = require("../util/mysql");

module.exports = class Blog {
  constructor(BlogID, Title, Article) {
    this.BlogID = BlogID;
    this.Title = Title;
    this.Article = Article;
  }

//   save() {
//     const sql = "INSERT INTO Books (Title, Author, Comments) VALUES (?, ?, ?)";
//     const params = [this.Title, this.Author, this.Comments];

//     return db.execute(sql, params);
//   }

  static find() {
    const sql = "SELECT * FROM Books ORDER BY Book_ID DESC";
    return db.query(sql);
  }

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
};
