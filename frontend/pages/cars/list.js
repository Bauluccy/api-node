import api from "../../services/api";
import { useState, useEffect } from "react";

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
      <h1>Carros</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Modelo</th>
            <th scope="col">Cor</th>
            <th scope="col">Marca</th>
            <th scope="col">Ano</th>
          </tr>
        </thead>
        <tbody>
          {cars?.map((car) => {
            return (
              <tr>
                <td>{car.id}</td>
                <td>{car.modelo}</td>
                <td>{car.cor}</td>
                <td>{car.marca}</td>
                <td>{car.ano}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <footer>
        <br />
        <a href="/">Voltar para home</a>
        <br />
        <br />
        <a href="/cars/create">Criar carro</a>
        <br />
        <br />
        <a href="/cars/update">Atualizar carro</a>
        <br />
        <br />
        <a href="/cars/delete">Deletar carro</a>
      </footer>
    </div>
  );
}
