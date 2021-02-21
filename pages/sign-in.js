import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import useAuthForm from "../hooks/useAuthForm";
import useTokenCheckInAuth from "../hooks/useTokenCheckInAuth";

import AuthFormPanel from "../components/AuthFormPanel/AuthFormPanel";
import Loading from "../components/Loading/Loading";
import ErrorPanel from "../components/Errors/ErrorPanel";

export default function signIn() {
  const { isLoading } = useTokenCheckInAuth();
  const {
    formData,
    ErrorMessage,
    formHandler,
    guestUser,
    signInHandler,
  } = useAuthForm({
    usernameOrEmail: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  if (!isLoading)
    return (
      <div className="auth-page">
        <Head>
          <title>Yummy Menu</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ErrorPanel text={ErrorMessage} type="fail" />
        <AuthFormPanel
          type="sign in"
          redirectLink={{
            description: "don't have an account,",
            buttonTitle: "sign up",
            to: "/sign-up",
          }}
          guestUser={guestUser}
          formData={formData}
          submitHandler={signInHandler}
          ErrorMessage={ErrorMessage}
        >
          <div className="input-container">
            <input
              type="text"
              name="usernameOrEmail"
              value={formData.usernameOrEmail}
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
              <div className="p-relative">
                <img
                  src={`/design-utils/show-password.png`}
                  alt="show password"
                />
                {showPassword && <div className="hide-password"></div>}
              </div>
            </div>
          </div>
        </AuthFormPanel>
      </div>
    );

  return <Loading />;
}
