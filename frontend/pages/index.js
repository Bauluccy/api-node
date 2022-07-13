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
              style.div,
            )}>
              <ul>
                  <Link href="/users/list">
                    <button className={buttons.green}>Usuários</button>
                  </Link >
                  <br></br>
                  <br></br>
                   <Link href="/cars/list">
                    <button className={buttons.red}>
                    Carros</button>
                  </Link>
              </ul>
              <br/>
              <br/>
              <p className={style.footer}>API Desenvolvida na cadeira de Programação WEB</p>
              <p className={style.footer}>By Luciano and Marcos</p>
            </nav>
          </main>s

        <footer className={style.footer}>
        </footer>
      </div>
  );
  
}



