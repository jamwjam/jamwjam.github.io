import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { HeartText } from '../components/heartText/HeartText'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>James Kim</title>
        <meta name="description" content="James' personal corner of the internet!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>
          welcome to my personal corner of the internet!
        </p>
        <ul className={styles.links}>
          <li><Link href="/resume">resume</Link></li>
          <li><a href="https://github.com/jamwjam">github</a></li>
          <li><a href="https://codepen.io/jamwjam">codepen</a></li>
          <li><a href="https://jamwjam.github.io/storybook/">storybook</a></li>
          <li><Link href="/resources">curated resources</Link></li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <HeartText />
      </footer>
    </div>
  )
}

export default Home
