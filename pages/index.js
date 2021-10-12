import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MAFlogo from "../logoMAF.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MAF Construcciones</title>
        <meta
          name="description"
          content="MAF construcciones. Empresa familiar desde 1991"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenidos a MAF construcciones</h1>

        <p className={styles.description}>Construimos su futuro desde 1991</p>
        <h3 className={styles.subtitle}> - PÁGINA EN CONSTRUCCIÓN - </h3>
        <Image src={MAFlogo} className={styles.inConstruction}></Image>
      </main>
    </div>
  );
} //
