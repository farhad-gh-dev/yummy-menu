import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="menu-page page-padding light-mode">
      <Head>
        <title>Yummy Menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="test">test</div>
      </main>
    </div>
  );
}
