const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

// DB CONNECTION

const conn = require("./db/conn.js")

conn();

//Routes

const routes = require("./routes/router.js")

app.use("/api", routes)

app.listen(3000, () => {
  console.log("servidor on! na porta 3030");
});

