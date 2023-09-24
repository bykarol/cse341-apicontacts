require("dotenv").config()
const express = require("express");
const { initDb } = require("./data/database");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors({
  origin: "*",
  methods: "GET, POST, PUT, DELETE"
}));
app.use("/contacts", require("./routes"));

initDb((err) => {
  if (err) {
    console.log(err);
  }
  else {
    app.listen(PORT, () => console.log(`Database is listening and Web Server is running on port: ${PORT}`));
  }
})
