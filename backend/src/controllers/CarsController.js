const { models } = require("../config/database");
const Car = models.Cars;
const path = require("path");

class CarsController {
  async index(req, res) {
    try {
      const cars = await Car.findAll();
      return res.status(200).send({ cars: cars });
    } catch (e) {
      return res.status(500).json({
        error: e,
        message: e.message,
      });
    }
  }

  async read(req, res) {
    try {
      const id = req.params.id;
      const cars = await Car.findByPk(parseInt(id));
      return res.status(200).send({ cars: cars });
    } catch (e) {
      return res.status(500).json({
        error: e,
        message: e.message,
      });
    }
  }

  async create(req, res) {
    try {
      var modelo = req.body.modelo;
      var cor = req.body.cor;
      var marca = req.body.marca;
      var ano = req.body.ano;
      const newCar = await Car.create({
        modelo: modelo,
        cor: cor,
        marca: marca,
        ano: ano,
      });
      res.status(201).send({ message: "Carro Adicionado!", newCar: newCar });
    } catch (e) {
      return res.status(500).json({
        error: e,
        message: e.message,
      });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const modelo = req.body.modelo;
      const cor = req.body.cor;
      const marca = req.body.marca;
      const ano = req.body.ano;
      const car = await Car.update(
        { modelo: modelo, cor: cor, marca: marca, ano: ano },
        { where: { id: id } }
      );
      console.log(...car);
      if (car[0] === 1) {
        return res.status(200).send({ message: "Carro atualizado!" });
      } else {
        return res.status(200).send({ message: "Nenhum carro alterado!" });
      }
    } catch (e) {
      return res.status(500).json({
        error: e,
        message: e.message,
      });
    }
  }

  async delete(req, res) {
    try {
      const id = parseInt(req.params.id);
      const car = await Car.destroy({ where: { id: id } });
      console.log(car);
      if (car === 1) {
        return res.status(200).send({ message: "Carro removido!" });
      } else {
        return res.status(200).send({ message: "Nenhum carro removido!" });
      }
    } catch (e) {
      return res.status(500).json({
        error: e,
        message: e.message,
      });
    }
  }
}

module.exports = new UsersController();
