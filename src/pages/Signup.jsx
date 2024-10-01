import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import Axios from "axios";
import wave from "../assets/wave.svg";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError("");

        Axios.post("http://localhost:3000/auth/signup", {
            username,
            email,
            password,
        })
            .then((response) => {
                if (response.data.status) {

                } else {
                    setError(response.data.message || "Signup failed");
                }
            })
            .catch((err) => {
                console.error(err);
                setError("An error occurred during signup.");
            });
    };

    return (
        <>
            <img className="w-full absolute" />
            <section className="min-h-[calc(100vh)] margins h-full flex justify-center items-center">
                <img src={wave} className="w-full h-full object-cover absolute -z-10" />

                <div className="shadow px-12 py-16 rounded bg-surface-200 w-[400px]">
                    <form className="flex flex-col gap-y-6" onSubmit={handleSubmit}>
                        <h2 className="w-full flex justify-center text-text">Welcome</h2>

                        <div className="flex flex-col gap-y-1.5">
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
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <CustomInput
                                placeholder={"Confirm your password"}
                                label={"Confirm Password"}
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        {error && <p className="text-red-500">{error}</p>}

                        <button className="primary-btn" type="submit">
                            Sign Up
                        </button>

                        <div className="flex w-full justify-center text-sm gap-x-1">
                            <span>Already have an account?</span>
                            <Link to="/login" className="link">
                                Log in
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Signup;

