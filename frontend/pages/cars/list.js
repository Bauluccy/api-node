import api from "../../services/api";
import { useState, useEffect } from "react";
import Link from "next/link";
import style from './cars.module.css'
import classnames from 'classnames'
import buttons from './buttons.module.css'

export default function ListCars() {
  const [cars, setCars] = useState();
  const [loadCars, setLoadCars] = useState(true);

  async function getCars() {
    api.get("/cars").then((res) => {
      const { data } = res;
      setCars(data.cars);
    });
  }

  useEffect(() => {
    getCars();
    setLoadCars(false);
  }, [loadCars]);

  console.log(cars);
  return (
    <div>
      <h1 className={style.header}>Carros</h1>
      <table className={style.records}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Modelo</th>
            <th scope="col">Cor</th>
            <th scope="col">Marca</th>
            <th scope="col">Ano</th>
          </tr>
        </thead>
        <tbody className={classnames(
          style.records,
          style.white
        )}>
          {cars?.map((car) => {
            return (
              <tr>
                <th>{car.id}</th>
                <th>{car.modelo}</th>
                <th>{car.cor}</th>
                <th>{car.marca}</th>
                <th>{car.ano}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <footer className={style.centerButtons}>
        <br />
        <Link href="/"><button>Voltar para home</button></Link>
        <Link href="/cars/create"><button>Adicionar carro</button></Link>
        <Link href="/cars/update"><button>Atualizar carro</button></Link>
        <Link href="/cars/delete"><button >Deletar carro</button></Link>
      </footer>
    </div>
  );
}
