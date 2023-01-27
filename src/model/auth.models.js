const db = require("../util/mysql");

module.exports = class User {
  constructor(Name, Pw) {
    this.Name = Name;
    this.Pw = Pw;
  }

  save() {
    const sql = "INSERT INTO Users (Name, Pw) VALUES (?, ?)";
    const params = [this.Name, this.Pw];

    return db.execute(sql, params);
  }

  //validationする
  static validate(Name, Pw) {
    const sql = `SELECT * FROM Users WHERE Name = ? AND Pw = ?;`;
    const params = [Name, Pw];
    return db.execute(sql, params);
  }
};
