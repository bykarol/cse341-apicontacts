require("dotenv").config()
const express = require("express");
const { initDb } = require("./data/database");
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/contacts", require("./routes"));

initDb((err) => {
  if (err) {
    console.log(err);
  }
  else {
    app.listen(PORT, () => console.log(`Database is listening and Web Server is running on port: ${PORT}`));
  }
})
