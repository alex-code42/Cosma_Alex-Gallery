import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>Art Gallery</h1>
      <h2> Famous Artist</h2>
      <nav className='nav'>
        <a href='/'>Spotlight</a><br></br>
        <a href='/art-pieces'>Art Pieces</a><br></br>
        <a href='/favourites'>Favourites</a>
      </nav>
    </>
  )
}
