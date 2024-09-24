import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import wave from "../assets/wave.svg";

const Login = () => {
    return (
        <>
        <img className="w-full absolute"/>
        <section
         className="min-h-[calc(100vh)] margins h-full flex justify-center items-center">
            <img src={wave} className="w-full h-full object-cover absolute -z-10"/>
            <div className="shadow px-12 py-16 rounded bg-surface-200 w-[400px]">
                <div className="flex flex-col gap-y-6">
                    <h2 className="w-full flex justify-center text-text">Login</h2>
                    <div className="flex flex-col gap-y-1.5">
                        <CustomInput placeholder={"Enter your username"} label={"Username"} />
                        <CustomInput placeholder={"Enter your password"} label={"Password"} />
                        <div className="flex justify-between">
                        <div className="flex items-center gap-x-1">
                            <input type="checkbox" className="mt-0.5 bg-surface-100 rounded-sm border-[3.5px] border-surface-100 appearance-none w-[18px] h-[18px] checked:bg-primary-400 cursor-pointer"/>
                            <span className="text-sm font-medium group">Remember me</span>
                        </div>
                        <a className="link text-sm">Forgot Password</a>
                        </div>
                        
                    </div>
                    
                    <button className="primary-btn">Login</button>
                    <div className="flex w-full justify-center text-sm gap-x-1">
                        <span>Don't have an account?</span>
                        <a className="link">Sign up</a>
                    </div>
                </div>

            </div>


        </section>
        </>
        
    )
}

export default Login;