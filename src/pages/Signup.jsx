import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import wave from "../assets/wave.svg";

const Signup = () => {
    return (
        <>
            <img className="w-full absolute"/>
            <section
                className="min-h-[calc(100vh)] margins h-full flex justify-center items-center">
                <img src={wave} className="w-full h-full object-cover absolute -z-10"/>
                <div className="shadow px-12 py-16 rounded bg-surface-200 w-[400px]">
                    <div className="flex flex-col gap-y-6">
                        <h2 className="w-full flex justify-center text-text">Welcome!</h2>
                        <div className="flex flex-col gap-y-1.5">
                            <CustomInput placeholder={"Enter your first name"} label={"First Name"} />
                            <CustomInput placeholder={"Enter your last name"} label={"Last Name"} />
                            <CustomInput placeholder={"Enter your email"} label={"Email"} />
                            <CustomInput placeholder={"Enter your password"} label={"Password"} />
                            <CustomInput placeholder={"Confirm your password"} label={"Confirm Password"} />
                        </div>

                        <button className="primary-btn">Sign Up</button>
                        <div className="flex w-full justify-center text-sm gap-x-1">
                            <span>Already have an account?</span>
                            <Link to="/login" className="link">Log in</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;
