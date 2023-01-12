import { Post } from "./Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css';
import './global.css';


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
          author="Igor da Silva Cassolli"
          content="Isso é um teste, vamos lá, dale Grêmio, é us guri, vamo Grêmio FI FI FI"
        />

        </main>
      </div>
    </div>
  )
}

