import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import CountryList from '../components/CountryList'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
      <Head>
        <title>Country List</title>
      </Head>
      
      <main>
        <h1 className={styles.main}>
          Country Details
        </h1>

        <div className={styles.container}>
        <div className="ui container">
      <CountryList />
    </div>
        </div>
        
      </main>
    </div>
    </>
  )
}
