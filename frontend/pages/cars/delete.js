import api from "../../services/api";
import { useState, useEffect } from "react";
import Link from "next/link";
import classnames from 'classnames'
import style from './cars.module.css'
import buttons from './buttons.module.css'

export default function DeleteCar() {
  const [cars, setCars] = useState();
  const [CarID, setCarID] = useState();
  const [loadCars, setLoadCars] = useState(true);

  async function getCars() {
    api.get("/cars").then((res) => {
      const { data } = res;
      setCars(data.cars);
    });
  }

  async function deleteCar() {
    api
      .delete(`/cars/${CarID}`)
      .then(() => {
        alert("Carro removido!");
        setLoadCars(true);
      })
      .catch((e) => {
        alert(`Erro: ${e}`);
      });
  }

  function onChange(e) {
    setCarID(parseInt(e.target.value));
  }

  useEffect(() => {
    getCars();
    setLoadCars(false);
  }, [loadCars]);

  // console.log(carID);
  return (
    <div>
      <h1 className={style.header}>Deletar Carro</h1>
      <form className={style.div}>
        <select onChange={onChange} defaultValue="DEFAULT">
          <option value="DEFAULT" disabled>
            Selecione um carro
          </option>
          {cars?.map((car) => {
            return <option value={car.id}>{car.modelo}</option>;
          })}
        </select>
        <br/>
        <br/>
      <button className={buttons.red} type="button" onClick={() => deleteCar()}>Deletar Carro</button>
      <br/>
      <br/>
      <Link href="/cars/list">
        <button>Voltar para carros</button>
      </Link>
      </form>
    </div>
  );
}
