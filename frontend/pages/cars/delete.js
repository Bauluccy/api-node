import api from "../../services/api";
import { useState, useEffect } from "react";

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
      <h1>Deletar Carro</h1>
      <form>
        <select onChange={onChange} defaultValue="DEFAULT">
          <option value="DEFAULT" disabled>
            Selecione um carro
          </option>
          {cars?.map((car) => {
            return <option value={car.id}>{car.modelo}</option>;
          })}
        </select>
      </form>

      <button onClick={() => deleteCar()}>Deletar Carro</button>

      <footer>
        <a href="/cars/list">Voltar para lista de carros</a>
      </footer>
    </div>
  );
}
