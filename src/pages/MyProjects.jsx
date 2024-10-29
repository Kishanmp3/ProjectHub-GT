import React from "react";
import ProjectTile from "../components/ProjectTile";
import { Link } from "react-router-dom";
import wave from "../assets/wave.svg";

const MyProjects = () => {
    return (
        <section className="min-h-[calc(100vh)] margins h-full flex justify-center items-center">
            <img src={wave} className="absolute w-full h-full object-cover z-[-1]" alt="Background Wave"/>
            <div>
                <ProjectTile />
            </div>
        </section>
    )
}
export default MyProjects