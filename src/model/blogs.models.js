//DB関連の処理を担当 (CRUDの操作, communication with the data)

//データベースに接続された状況をimport, ここで読み込んでいく操作をする

//MySQLは下の2つのメソッド(SQlightはrunメソッド)
//query: 実行したいSQL文をセット、SQLに必要ならパラメーターをセット、SQLを実行(引数はいらない)
//excute: 変動値があればqueryの代わりにexcuteを使う(引数がある)
const db = require("../util/mysql");

//クラス関数作って、ここで処理を書いていく(インスタン化した方が処理しやすいから)
module.exports = class Blog {
  constructor(BlogID, Title, Article) {
    this.BlogID = BlogID;
    this.Title = Title;
    this.Article = Article;
  }

  //data saving(コンストラクターの引数取ってくる)
  //   save() {
  //     const sql = "INSERT INTO Books (Title, Author, Comments) VALUES (?, ?, ?)";
  //     const params = [this.Title, this.Author, this.Comments];

  //     return db.execute(sql, params);
  //   }

  //static methods
  //(call method directly without having to instantiate the recipe object, インスタンスに属するものは一切参照しない)
  static find() {
    //IDの順番に並べる
    const sql = "SELECT * FROM Books ORDER BY Book_ID DESC";
    return db.query(sql);
  }
};
l