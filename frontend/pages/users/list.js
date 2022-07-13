import api from "../../services/api";
import { useState, useEffect } from "react";
import Link from "next/link";
import style from './users.module.css'
import classnames from 'classnames'
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
      <table className={style.records}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nome</th>
            <th scope="col">Idade</th>
          </tr>
        </thead>
        <tbody className={classnames(
          style.records,
          style.white
        )}>
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
      <footer className={classnames(
        style.centerButtons,
      )}>
        <br />
        <Link href="/"><button>Voltar para home</button></Link>
        <Link href="/users/create"><button>Criar usuário</button></Link>
        <Link href="/users/update"><button>Atualizar usuário</button></Link>
        <Link href="/users/delete"><button >Deletar usuário</button></Link>
      </footer>
    </div>
  );
}
