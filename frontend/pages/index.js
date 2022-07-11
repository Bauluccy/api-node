import Head from "next/head";
import Link from "next/link";
import classnames from 'classnames'
import style from './index.module.css'
import buttons from './buttons.module.css'

export default function Home() {
  return (
      <div className={style.container} >
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          {/* <link rel="stylesheet" href="index.css"/> */}
        </Head>

        <main>
          <header>
            <h1 className={style.header}>Selecione qual tipo de cadastro</h1>
          </header>
            <nav className={classnames(
              style.nav
            )}>
              <ul>
                  <Link href="/users/list">
                    <button className={classnames(
                      buttons.button,
                      buttons.green
                    )}>Usuários</button>
                  </Link>
                  {/* <Link href=>
                    <a>Carros</a>
                  </Link> */}
              </ul>
            </nav>
          </main>

        <footer>
          <p>API Desenvolvida na cadeira de Programação WEB</p>
        </footer>
      </div>
  );
  
}



