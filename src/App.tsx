import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css';
import './global.css';

interface Posts{
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string
  },
  content:{
    type: 'paragraph' | 'link',
    content: string
  }[],
  publishedAt: Date
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/IgorCassolli.png',
      name: 'Pedro Fernandes',
      role: "Developer WEB"
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀" },
      { type: 'link', content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date('2022-09-03 12:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/IgorCassolli.png',
      name: 'Diego Fernandes',
      role: "CTO RocketSeat"
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀" },
      { type: 'link', content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date('2022-09-06 14:00:00')
  }
]
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post  
                  key={post.id}
                  author={post.author}
                  content={post.content as []}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}

