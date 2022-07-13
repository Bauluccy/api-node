import api from "../../services/api";
import { useState } from "react";
import Link from "next/link";
import classnames from 'classnames'
import style from './index.module.css'
import buttons from './buttons.module.css'

export default function CreateUser() {
  const [user, setUser] = useState({ name: "", idade: 0 });
  function onChange(e) {
    e.preventDefault();
    const value = e.target.value;

    if (e.target.name === "name") {
      setUser({ name: value, idade: user.idade });
    }

    if (e.target.name === "idade") {
      setUser({ name: user.name, idade: parseInt(value) });
    }
  }

  async function createUser() {
    api
      .post("/users", user)
      .then(() => {
        alert("Usuário criado!");
        window.location = "/users/list";
      })
      .catch((e) => {
        alert(`Erro: ${e}`);
      });
  }

  console.log(user);

  return (
    <div>
      <h1 className={style.header}>Criar Usuário</h1>
      
        <form className={style.div} onChange={(e) => onChange(e)}>
          <label htmlFor="name">Nome</label>
          <input  type="text" name="name"></input>
          <label htmlFor="name">Idade</label>
          <input type="number" name="idade"></input>
          <br></br>
          <br></br>
          
            
        <button type="button" onClick={() => createUser()}>Criar usuário</button>
            <br></br>
            <br></br>
  
            <Link href="/users/list">
              <button>Voltar para usuários</button>
            </Link>
        </form>

        
    </div>
  );
}
