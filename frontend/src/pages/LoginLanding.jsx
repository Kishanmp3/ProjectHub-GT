import React from "react";
import AppRouter from "../AppRouter";
import { Link } from "react-router-dom";
import wave from "../assets/wave.svg";

const LoginLanding = () => {
  return (
    <div className="min-h-[calc(100vh)] margins h-full flex justify-center items-center">
      <img src={wave} className="w-full h-full object-cover absolute -z-10" />
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="flex gap-80">
          <Link
            to="/new-project"
            className="dashboard-btn w-64 h-32 text-2xl flex items-center justify-center"
          >
            Create Project
          </Link>
          <Link
            to="/myprojects"
            className="dashboard-btn w-64 h-32 text-2xl flex items-center justify-center"
          >
            My Projects
          </Link>
        </div>
      </main>
    </div>
  );
};

export default LoginLanding;
