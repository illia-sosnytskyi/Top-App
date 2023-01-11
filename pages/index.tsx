import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Top App</title>
        <link rel="icon" href='/favicon.ico' />
      </Head>
    </div>
  );
}
