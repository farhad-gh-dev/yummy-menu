import Head from "next/head";
import Link from "next/link";

export default function Login() {
  if (true)
    return (
      <div className="login-page">
        <Head>
          <title>Yummy Menu</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="d-flex flex-column h-100">
          <div className="flex-fill">
            <div className="logo-container text-center">
              <img
                src="/logo/logo-light.svg"
                alt="yummy menu"
                className="logo"
              />
            </div>
            <div className="login-form">
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Username, Email Address"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Password"
                  onChange={(e) => console.log(e.target.value)}
                />
                <div
                  className="input-icon"
                  onClick={() => console.log("password is shown")}
                >
                  <img src="/design-utils/eye.png" alt="show password" />
                </div>
              </div>
            </div>
            <div className="guest-user-container d-flex align-items-center justify-content-center">
              <span className="text-cap">enter as</span>
              <button
                className="guest-user-btn text-cap"
                onClick={() => console.log("clicked")}
              >
                guest user
              </button>
            </div>
          </div>
          <div>
            <button
              className="sign-in-btn w-100 text-uppercase"
              onClick={() => console.log("sign-in clicked")}
            >
              sing in
            </button>
            <div className="sign-up-container d-flex align-items-center justify-content-center">
              <span className="text-cap">don't have an account,</span>
              <Link href="/sign-up">
                <a className="sign-up-link text-cap">sign up</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

  return <div>loading...</div>;
}
