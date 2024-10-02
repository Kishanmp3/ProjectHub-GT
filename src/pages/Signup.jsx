import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import wave from "../assets/wave.svg";
import { useSignUp, useSignIn } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const { signIn } = useSignIn();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [verifying, setVerifying] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!isLoaded) return;

    try {
      const signUpResult = await signUp.create({
        emailAddress: email,
        password: password,
      });

      await signUpResult.update({
        username: username, // Add the username here
      });

      await signUpResult.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setVerifying(true);
    } catch (err) {
      setErrorMsg("An error occured");
    }
  };

  const [verifyCode, setVerifyCode] = useState("");

  const handleVerification = async (e) => {
    e.preventDefault();
    if (!verifying) return;
    try {
      const signUpResult = await signUp.attemptEmailAddressVerification({
        code: verifyCode,
      });

      if (signUpResult.status === "complete") {
        await setActive({ session: signUpResult.createdSessionId });
        navigate("/loginlanding");
      }

      setVerifying(true);
    } catch (err) {
      setErrorMsg("An error occured");
    }
    setVerifying(false);
  };

  const handleSignUpGithub = async () => {
    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_github",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/loginlanding",
      });
    } catch (error) {
      console.error("GitHub sign-up error:", error);
    }
  };

  const handleSignUpGoogle = async () => {
    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/loginlanding",
      });
    } catch (error) {
      console.error("Google sign-up error:", error);
    }
  };

  return (
    <>
      <section className="min-h-[calc(100vh)] margins h-full flex justify-center items-center">
        <img src={wave} className="w-full h-full object-cover absolute -z-10" />
        <div className="shadow px-8 py-12 rounded bg-surface-200 w-[400px]">
          {verifying ? (
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col items-center">
                <h3>Verify your email</h3>
                <p className="text-center">
                  Enter the verification code sent to your email at{" "}
                  <span className="text-sm font-medium text-text-200">
                    moneky@gmail.com
                  </span>{" "}
                  to continue
                </p>
              </div>
              <hr />
              <form
                onSubmit={handleVerification}
                className="flex flex-col gap-y-1.5"
              >
                <CustomInput
                  label={"Verification Code"}
                  placeholder={"ex. 123456"}
                  value={verifyCode}
                  onChange={(e) => setVerifyCode(e.target.value)}
                />
                <button type="submit" className="primary-btn mt-4">
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-y-6">
                <div className="flex flex-col items-center">
                  <h3>Sign Up</h3>
                  <p>Welcome! Create an account to get started.</p>
                </div>
                <div className="grid grid-cols-2 gap-x-3 w-full">
                  <button onClick={handleSignUpGoogle} className="icon-btn">
                    <div className="text-lg mt-1">
                      <i className="bx bxl-google"></i>
                    </div>
                    Google
                  </button>
                  <button onClick={handleSignUpGithub} className="icon-btn">
                    <div className="text-lg mt-1">
                      <i className="bx bxl-github"></i>
                    </div>
                    Github
                  </button>
                </div>
                <hr />
                {errorMsg && (
                  <div className="bg-red-300 text-red-500 rounded-lg flex font-semibold text-xs justify-center py-1.5">
                    {errorMsg}
                  </div>
                )}
                <form
                  onSubmit={handleSignUp}
                  className="flex flex-col gap-y-1.5"
                >
                  <CustomInput
                    placeholder={"Enter your username"}
                    label={"Username"}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <CustomInput
                    placeholder={"Enter your email"}
                    label={"Email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <CustomInput
                    placeholder={"Enter your password"}
                    label={"Password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="primary-btn mt-4">Sign Up</button>
                </form>
                <div className="flex w-full justify-center text-sm gap-x-1">
                  <span>Already have an account?</span>
                  <Link to="/login" className="link">
                    Log in
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Signup;
