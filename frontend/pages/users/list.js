import api from "../../services/api";
import { useState, useEffect } from "react";
import style from './index.module.css'
import buttons from './buttons.module.css'

export default function ListUsers() {
  const [users, setUsers] = useState();
  const [loadUsers, setLoadUsers] = useState(true);

  async function getUsers() {
    api.get("/users").then((res) => {
      const { data } = res;
      setUsers(data.users);
    });
  }

  useEffect(() => {
    getUsers();
    setLoadUsers(false);
  }, [loadUsers]);

  console.log(users);
  return (
    <div>
      <h1 className={style.header}>Usuários</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nome</th>
            <th scope="col">Idade</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.idade}</td>
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
        <a href="/users/create">Criar usuário</a>
        <br />
        <br />
        <a href="/users/update">Atualizar usuário</a>
        <br />
        <br />
        <a href="/users/delete">Deletar usuário</a>
      </footer>
    </div>
  );
}
