import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer/Footer'
import Navbar from '../comps/Navbar/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="nijas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quam dolorum aliquam facilis corporis quis.</p>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quam dolorum aliquam facilis corporis quis.</p>
        <Link href="/ninjas">
          <a>Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
