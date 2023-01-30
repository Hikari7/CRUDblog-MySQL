//DB関連の処理を担当 (CRUDの操作, communication with the data)
const db = require("../util/mysql");
//データベースに接続された状況をimport, ここで読み込んでいく操作をする
//modelsからcontrollerに関数渡してる、で、controllerでEJSのファイルのpathとかrouterの処理をしている

//MySQLは下の2つのメソッド(SQlightはrunメソッド)
//query: 実行したいSQL文をセット、SQLに必要ならパラメーターをセット、SQLを実行(引数はいらない)
//excute: 変動値があればqueryの代わりにexcuteを使う(引数がある時)

//クラス関数作って、ここで処理を書いていく(インスタン化した方が処理しやすいから)
module.exports = class Blog {
  constructor(Title, Date, Article, Author) {
    this.Title = Title;
    this.Date = Date;
    this.Article = Article;
    this.Author = Author;
  }

  //data saving(コンストラクターの引数取ってくる)
  save() {
    const sql =
      "INSERT INTO Blogs (Title, Date, Article, Author) VALUES (?, ?, ?, ?)";
    const params = [this.Title, this.Date, this.Article, this.Author];

    return db.execute(sql, params);
  }

  //static methods
  //(call method directly without having to instantiate the recipe object, インスタンスに属するものは一切参照しない)

  static find() {
    //IDの順番に並べる
    const sql = "SELECT * FROM Blogs ORDER BY Blog_ID DESC";
    return db.query(sql);
  }

  //controllerからfindByIdの引数を渡されてる
  static findById(id) {
    const sql = "SELECT * FROM Blogs WHERE Blog_ID = ?";
    return db.execute(sql, [id]);
  }

  static updateOne(data) {
    const sql = "UPDATE Blogs SET Title = ?, Article = ? WHERE (Blog_ID = ?)";
    const params = [data.Title, data.Article, data.id];
    return db.execute(sql, params);
  }

  static deleteOne(id) {
    const sql = "DELETE FROM Blogs WHERE Blog_ID = ?";
    return db.execute(sql, [id]);
  }
};
