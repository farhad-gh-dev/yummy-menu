import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import useAuthForm from "../hooks/useAuthForm";
import useTokenCheckInAuth from "../hooks/useTokenCheckInAuth";

import Loading from "../components/Loading/Loading";
import ErrorPanel from "../components/Errors/ErrorPanel";

export default function signUp() {
  const { isLoading } = useTokenCheckInAuth();
  const {
    formData,
    ErrorMessage,
    formHandler,
    guestUser,
    singUpHandler,
  } = useAuthForm({
    email: "",
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  if (!isLoading)
    return (
      <div className="login-page">
        <Head>
          <title>Yummy Menu</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ErrorPanel text={ErrorMessage} type="fail" />
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
                  name="email"
                  value={formData.email}
                  placeholder="Email Address"
                  onChange={(e) => formHandler(e)}
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  placeholder="Username"
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
              onClick={() => !ErrorMessage && singUpHandler(formData)}
            >
              sing in
            </button>
            <div className="sign-up-container text-center">
              <span className="text-cap">already have an account,</span>
              <Link href="/sign-in">
                <a className="sign-up-link text-cap">sign in</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

  return <Loading />;
}
