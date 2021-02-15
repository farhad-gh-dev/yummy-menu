import Head from "next/head";

export default function Login() {
  if (true)
    return (
      <div className="login-page">
        <Head>
          <title>Yummy Menu</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <div className="logo-container text-center">
            <img src="/logo/logo-light.svg" alt="yummy menu" className="logo" />
          </div>
          <div className="form"></div>
        </div>
      </div>
    );

  return <div>loading...</div>;
}
