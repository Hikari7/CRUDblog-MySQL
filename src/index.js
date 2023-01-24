require("dotenv").config();
const express = require("express");

const app = express();

//mysqlを読み込ませる
const dbConnection = require("./util/mysql");

// Route handler that sends a message at /

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  console.log(`Server is up on PORT ${PORT} 🚀`);

  //catch promise
  const [data] = await dbConnection.query("SELECT 1"); //{"1":1}  resulting the value of "SELECT 1"
  //retrun the first element: data, and the second element: metadata
  //   console.log(connect);
  if (data) console.log("Successful connection to the MySQL database!");
});
