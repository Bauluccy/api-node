import api from "../../services/api";
import { useState, useEffect } from "react";
import ListCars from "./list";

export default function UpdateCar() {
 
  const [cars, setCars] = useState();
  const [loadCars, setLoadCars] = useState(true);
  const [carID, setCarID] = useState();

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

  async function updatecar(){
    api
    .put(`/cars/${carID}`)
    .then(() => {
      alert("Carro atualizado!");
      window.location = "/cars/list";
    })
    .catch((e) => {
      alert(`Erro: ${e}`);
    });
  }

  function onChange(e) {
    e.preventDefault();
    const value = e.target.value;

    if(e.target.modelo === "carroEscolhido")
    {
      setCarID(parseInt(value));
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


  console.log(cars);

  return (
    <div>
      <h1>Alterar Carro</h1>

      <form onChange={(e) => onChange(e)}>
        <select name="carroEscolhido" onChange={onChange} defaultValue="DEFAULT">
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
      </form>

      <button onClick={() => updateCar()}>Alterar Carro</button>

      <footer>
        <a href="/cars/list">Voltar para lista de usuários</a>
      </footer>
    </div>
  );
}
