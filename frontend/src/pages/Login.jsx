import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import wave from "../assets/wave.svg";
import { useSignIn } from "@clerk/clerk-react";
import "boxicons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigation = useNavigate();

  const { isLoaded, setActive, signIn } = useSignIn();

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!isLoaded) return;

    try {
      const signInResult = await signIn.create({
        identifier: email,
        password,
      });

      if (signInResult.status === "complete") {
        await setActive({ session: signInResult.createdSessionId });
        navigation("/loginlanding");
      }
    } catch (err) {
      setErrorMsg("An error occured. Please try again");
    }
  };

  const handleSignInGithub = async () => {
    if (!isLoaded) return;

    try {
      const signInResult = await signIn.authenticateWithRedirect({
        strategy: "oauth_github",
        redirectUrl: "/login",
        redirectUrlComplete: "/loginlanding",
      });
    } catch (err) {
      setErrorMsg("An error occurred with GitHub sign-in. Please try again.");
    }
  };

  const handleSignInGoogle = async () => {
    if (!isLoaded) return;

    try {
      const signInResult = await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/login",
        redirectUrlComplete: "/loginlanding",
      });
    } catch (err) {
      setErrorMsg("An error occurred with Google sign-in. Please try again.");
    }
  };

  return (
    <>
      <img className="w-full absolute" />
      <section className="min-h-[calc(100vh)] margins h-full flex justify-center items-center">
        <img src={wave} className="w-full h-full object-cover absolute -z-10" />
        <div className="shadow px-8 py-12 rounded bg-surface-200 w-[400px]">
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col items-center ">
              <h3>Login</h3>
              <p>Welcome back! Sign in to continue.</p>
            </div>
            <div className="grid grid-cols-2 gap-x-3 w-full">
              <button onClick={handleSignInGoogle} className="icon-btn">
                <div className="text-lg mt-1">
                  <i className="bx bxl-google"></i>
                </div>
                Google
              </button>
              <button onClick={handleSignInGithub} className="icon-btn">
                <div className="text-lg mt-1">
                  <i className="bx bxl-github"></i>
                </div>
                Github
              </button>
            </div>
            <hr />
            <form className="flex flex-col gap-y-1.5" onSubmit={handleSignIn}>
              <CustomInput
                type="email"
                placeholder={"Enter your email"}
                label={"Email"}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
              <CustomInput
                type="password"
                placeholder={"Enter your password"}
                label={"Password"}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
              <div className="flex justify-between">
                <div className="flex items-center gap-x-1">
                  <input
                    type="checkbox"
                    className="mt-0.5 bg-surface-100 rounded-sm border-[3.5px] border-surface-100 appearance-none w-[18px] h-[18px] checked:bg-primary-400 cursor-pointer"
                  />
                  <span className="text-sm font-medium group text-text-300">
                    Remember me
                  </span>
                </div>
                <a className="link text-sm">Forgot Password</a>
              </div>
              <button type="submit" className="primary-btn text-center mt-4">
                Login
              </button>
            </form>

            <div className="flex w-full justify-center text-sm gap-x-1">
              <span>Don't have an account?</span>
              <Link to="/signup" className="link">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
