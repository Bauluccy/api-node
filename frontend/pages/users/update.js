import api from "../../services/api";
import { useState, useEffect } from "react";
import Link from "next/link";
import classnames from 'classnames'
import style from './index.module.css'

export default function UpdateUser() {
  const [user, setUser] = useState({ name: "", idade: 0 });
  const [users, setUsers] = useState();
  const [userId, setUserId] = useState();
  const [loadUsers, setLoadUsers] = useState(true);

  function onChange(e) {
    e.preventDefault();
    const value = e.target.value;

    if (e.target.name === "selectedUser") {
      setUserId(parseInt(value));
    }

    if (e.target.name === "name") {
      setUser({ name: value, idade: user.idade });
    }

    if (e.target.name === "idade") {
      setUser({ name: user.name, idade: parseInt(value) });
    }
  }

  async function getUsers() {
    api.get("/users").then((res) => {
      const { data } = res;
      setUsers(data.users);
    });
  }

  async function updateUser() {
    api
      .put(`/users/${userId}`, user)
      .then(() => {
        alert("Usuário atualizado!");
        // setLoadUsers(true);
        window.location = "/users/list";
      })
      .catch((e) => {
        alert(`Erro: ${e}`);
      });
  }

  useEffect(() => {
    getUsers();
    setLoadUsers(false);
  }, [loadUsers]);

  console.log(user);

  return (
    <div>
        <h1 className={style.header}>Selecione um usuário para atualizar</h1>
      <form className={style.div}onChange={(e) => onChange(e)}>
          <h1>Insira os dados para atualizar</h1>
        <select name="selectedUser" defaultValue="DEFAULT">
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
      <br />
      <br />
      <br />
      <button type="button" onClick={() => updateUser()}>Atualizar usuário</button>

        <br />
        <br />
        <Link href="/users/list">
              <button>Voltar para usuários</button>
            </Link>
      </form>
    </div>
  );
}
