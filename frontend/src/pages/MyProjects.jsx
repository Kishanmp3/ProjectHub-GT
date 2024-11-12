import React from "react";
import ProjectTile from "../components/ProjectTile";
import { Link } from "react-router-dom";
import wave from "../assets/wave.svg";

const MyProjects = () => {
  return (
    <section className="margins">
      <div>
        <div className="grid grid-cols-3 gap-5">
          <ProjectTile />
          <ProjectTile />
          <ProjectTile />
        </div>
      </div>
    </section>
  );
};
export default MyProjects;
