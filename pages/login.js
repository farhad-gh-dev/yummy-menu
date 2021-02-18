import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const { formData, formHandler, guestUser, signInHandler } = useAuth({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  if (true)
    return (
      <div className="login-page">
        <Head>
          <title>Yummy Menu</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="login-panel d-flex flex-column h-100">
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
                  name="username"
                  value={formData.username}
                  placeholder="Username, Email Address"
                  onChange={(e) => formHandler(e)}
                />
              </div>
              <div className="input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  placeholder="Password"
                  onChange={(e) => formHandler(e)}
                />
                <div
                  className="input-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <img src="/design-utils/eye.png" alt="show password" />
                </div>
              </div>
            </div>
            <div className="guest-user-container text-center">
              <span className="text-cap">enter as</span>
              <button
                className="guest-user-btn text-cap"
                onClick={() => guestUser()}
              >
                guest user
              </button>
            </div>
          </div>
          <div>
            <button
              className="sign-in-btn w-100 text-uppercase"
              onClick={() => signInHandler(formData)}
            >
              sing in
            </button>
            <div className="sign-up-container text-center">
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
