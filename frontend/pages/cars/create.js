import api from "../../services/api";
import { useState } from "react";

export default function CreateCar() {
  const [car, setCar] = useState({ modelo: "", cor: "", marca: "", ano: 0 });
  function onChange(e) {
    e.preventDefault();
    const value = e.target.value;

    if (e.target.modelo === "modelo") {
      setCar({ modelo: value, cor: car.cor, marca: car.marca, ano: car.ano });
    }

    if (e.target.cor === "cor") {
      setCar({ modelo: car.modelo, cor: value, marca: car.marca, ano: car.ano });
    }

    if (e.target.marca === "marca") {
      setCar({ modelo: car.modelo, cor: car.cor, marca: value,ano: car.ano });
    }

    if (e.target.ano === "ano") {
      setCar({ modelo: car.modelo, cor: car.cor, marca: car.marca, ano: parseInt(value) });
    }
  }

  async function createCar() {
    api
      .post("/cars", car)
      .then(() => {
        alert("Carro Adicionado!");
        window.location = "/cars/list";
      })
      .catch((e) => {
        alert(`Erro: ${e}`);
      });
  }

  console.log(car);

  return (
    <div>
      <h1>Adicionar Carro</h1>

      <form onChange={(e) => onChange(e)}>
        <label htmlFor="modelo">Modelo</label>
        <input type="text" name="modelo"></input>

        <label htmlFor="cor">Cor</label>
        <input type="text" name="cor"></input>

        <label htmlFor="marca">Marca</label>
        <input type="text" name="marca"></input>

        <label htmlFor="ano">Ano</label>
        <input type="number" name="ano"></input>
      </form>

      <button onClick={() => createCar()}>Adicionar Carro</button>

      <footer>
        <a href="/cars/list">Voltar para lista de carros</a>
      </footer>
    </div>
  );
}
