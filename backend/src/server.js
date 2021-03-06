const express = require("express");
const db = require("./config/database");
const app = express();
const cors = require("cors");
const router = require("./routes");
const port = 3003;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.sync();

app.use(router);

app.listen(port, () => {
  console.log(`APIREST Rodando na porta ${port}!`);
});
