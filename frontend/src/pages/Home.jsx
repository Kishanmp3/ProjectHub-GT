import React from "react";
import curves from "../assets/curves.svg";

const Home = () => {
  return (
    <>
      <div className="absolute w-full h-full z-[-1] bg-gradient-to-b from-surface-200 from-50  % to-surface-100">
        <img
          src={curves}
          className="w-full h-full object-cover"
          alt="Background Wave"
        />
      </div>

      <section className="min-h-[calc(100vh)] margins h-full flex justify-start items-center">
        <div className="flex flex-col justify-center items-start h-full gap-y-5">
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-1.5">
              <span className="capitalize text-[15px] font-bold text-primary-300 -mb-2 ml-1">
                PROJECT HUB @ GT
              </span>
              <div className="flex flex-col gap-y-1.5">
                <h1 className="text-6xl text-white font-bold">Connect with</h1>
                <h1 className="text-6xl text-white font-bold">GT Projects</h1>
              </div>
            </div>

            <p className="text-lg text-text-300 max-w-[400px]">
              Find collaborators, join exciting ventures, and make an impact
              with fellow Jackets!
            </p>
          </div>
          <button className="primary-btn">Get Started</button>
        </div>
      </section>
    </>
  );
};

export default Home;
