import React from "react";
import wave from "../assets/wave.svg";

const Home = () => {
    return (
        <section
            className="min-h-[calc(100vh)] margins h-full flex justify-center items-center">
            <img src={wave} className="absolute w-full h-full object-cover z-[-1]" alt="Background Wave"/>
            <div className="flex flex-col justify-center items-center h-full space-y-8">
                <h1 className="text-7xl text-white mb-4 leading-tight">Project Hub @ GT</h1>
                <h2 className="text-4xl text-white mb-2 leading-normal">Connect with GT Projects!</h2>
                <p className="text-2xl text-white leading-relaxed">
                    Find collaborators, join exciting ventures, and make an impact with fellow Jackets!
                </p>
            </div>
        </section>
    );
};

export default Home;
