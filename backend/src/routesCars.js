const express = require("express");
const routes = express.Router();

const CarsController = require("./controllers/CarsController");

routes.get("/cars", CarsController.index);
routes.get("/cars/:id", CarsController.read);

routes.post("/cars", CarsController.create);
routes.put("/cars/:id", CarsController.update);
routes.delete("/cars/:id", CarsController.delete);

routes.get("*", function (req, res) {
  res.status(404).send("Página não encontrada!");
});

module.exports = routes;
