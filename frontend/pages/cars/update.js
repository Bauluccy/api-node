import api from "../../services/api";
import { useState, useEffect } from "react";
import Link from "next/link";
import classnames from 'classnames'
import style from './index.module.css'

export default function UpdateCar() {
  const [car, setCar] = useState({ modelo: "", cor: "", marca: "", ano: 0 });
  const [cars, setCars] = useState();
  const [carId, setCarId] = useState();
  const [loadCars, setLoadCars] = useState(true);

  function onChange(e) {
    e.preventDefault();
    const value = e.target.value;

    if (e.target.modelo === "selectedCar") {
      setCarId(parseInt(value));
    }

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

  async function getCars() {
    api.get("/cars").then((res) => {
      const { data } = res;
      setCars(data.cars);
    });
  }

  async function updateCar() {
    api
      .put(`/cars/${carId}`, car)
      .then(() => {
        alert("Carro atualizado!");
        // setLoadUsers(true);
        window.location = "/cars/list";
      })
      .catch((e) => {
        alert(`Erro: ${e}`);
      });
  }

  useEffect(() => {
    getCars();
    setLoadCars(false);
  }, [loadCars]);

  console.log(car);

  return (
    <div>
      <h1 className={style.header}>Selecione um carro para atualizar</h1>

      <form className={style.div} onChange={(e) => onChange(e)}>
          <h1>Insira os dados para atualizar</h1>
        <select name="selectedCar" defaultValue="DEFAULT">
          <option value="DEFAULT" disabled>
            Selecione um carro
          </option>
          {cars?.map((car) => {
            return <option value={car.id}>{car.modelo}</option>;
          })}
        </select>
        <label htmlFor="modelo">Modelo</label>
        <input type="text" name="modelo"></input>

        <label htmlFor="cor">Cor</label>
        <input type="text" name="cor"></input>

        <label htmlFor="marca">Marca</label>
        <input type="text" name="marca"></input>

        <label htmlFor="ano">Ano</label>
        <input type="number" name="ano"></input>
      <br />
      <br />
      <br />
      <button type="button" onClick={() => updateCar()}>Atualizar carro</button>
        <br />
        <br />
        <Link href="/cars/list">
              <button>Voltar para carros</button>
        </Link>
      </form>
    </div>
  );
}
