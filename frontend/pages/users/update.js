import api from "../../services/api";
import { useState, useEffect } from "react";
// import ListUsers from "./list";

export default function UpdateUser() {
 
  const [users, setUsers] = useState();
  const [user, setUser] = useState({ name: "", idade: 0 });
  const [loadUsers, setLoadUsers] = useState(true);
  const [userId, setUserID] = useState();

  async function getUsers() {
    api.get("/users").then((res) => {
      const { data } = res;
      setUsers(data.users);
    });daw
  }
  
  useEffect(() => {
    getUsers();
    setLoadUsers(false);
  }, [loadUsers]);

  async function updateuser(){
    api
    .put(`/users/${userId}`)
    .then(() => {
      alert("Usuário atualizado!");
      window.location = "/users/list";
    })
    .catch((e) => {
      alert(`Erro: ${e}`);
    });
  }

  function onChange(e) {
    e.preventDefault();
    const value = e.target.value;

    if(e.target.name === "usuarioEscolhido")
    {
      setUserID(parseInt(value));
    }

    if (e.target.name === "name") {
      setUser({ name: value, idade: user.idade });
    }

    if (e.target.idade === "idade") {
      setUser({ name: user.name, idade: parseInt(value) });
    }
  }


  console.log(users);

  return (
    <div>
      <h1>Alterar Usuário</h1>

      <form onChange={(e) => onChange(e)}>
      <select name="usuarioEscolhido" onChange={onChange} defaultValue="DEFAULT">
          <option value="DEFAULT" disabled>
            Selecione um usuário
          </option>
          {users?.map((user) => {
            return <option value={user.id}>{user.name}</option>;
          })}
        </select>

        <label htmlFor="name">Nome</label>
        <input type="text" name="name"></input>

        <label htmlFor="name">Idade</label>
        <input type="number" name="idade"></input>
      </form>

      <button onClick={() => UpdateUser()}>Alterar usuário</button>

      <footer>
        <a href="/users/list">Voltar para lista de usuários</a>
      </footer>
    </div>
  );
}
