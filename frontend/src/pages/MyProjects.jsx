import React from "react";
import ProjectTile from "../components/ProjectTile";
import { Link } from "react-router-dom";
import wave from "../assets/wave.svg";

const MyProjects = () => {
  const projects = [
    {
      title: "Collaborative Code Editor",
      creator: "Joe Mama",
      description:
        "Building a web-based code editor with real-time collaboration features for developers.",
      tags: ["Javascript", "React", "Firebase"],
    },
    {
      title: "Autonomous Drone Delivery",
      creator: "Bob Smith",
      description:
        "Developing an autonomous drone for real-time delivery of small packages using computer vision.",
      tags: ["Python", "TensorFlow", "AWS", "Robotics"],
    },
    {
      title: "Traffic Congestion Predictor",
      creator: "Catherine Lee",
      description:
        "Creating a machine learning pipeline for predicting traffic congestion using live sensor data.",
      tags: ["Python", "Django", "PostgreSQL", "TensorFlow"],
    },
    {
      title: "Robotic Arm Simulator",
      creator: "David Miller",
      description:
        "Developing a simulation environment for testing robotic arm algorithms in manufacturing.",
      tags: ["CPlusPlus", "ROS", "Kubernetes"],
    },
    {
      title: "Scalable E-Commerce Platform",
      creator: "Ella Brown",
      description:
        "Building a scalable microservices architecture for an e-commerce platform.",
      tags: ["NodeJS", "Docker", "MongoDB", "React"],
    },
    {
      title: "AI-Powered Chatbot",
      creator: "Franklin White",
      description:
        "Designing an AI-powered chatbot for customer support with advanced natural language processing.",
      tags: ["Python", "Flask", "PyTorch", "AWS"],
    },
    {
      title: "Fitness Tracking App",
      creator: "Grace Williams",
      description:
        "Developing a mobile app for tracking fitness goals using gamification techniques.",
      tags: ["Flutter", "Firebase", "Dart"],
    },
    {
      title: "Robotic Fleet Dashboard",
      creator: "Hannah Martin",
      description:
        "Creating an interactive dashboard for monitoring and optimizing robotic fleets in warehouses.",
      tags: ["Javascript", "React", "GraphQL", "Robotics"],
    },
    {
      title: "Recommendation Engine",
      creator: "Isaac Turner",
      description:
        "Building a scalable recommendation engine for personalized shopping experiences.",
      tags: ["Python", "TensorFlow", "Redis", "AWS"],
    },
    {
      title: "Gesture-Controlled IoT",
      creator: "Julia Roberts",
      description:
        "Developing an embedded system for gesture-based control of IoT devices.",
      tags: ["CPlusPlus", "Arduino", "Linux", "Robotics"],
    },
  ];

  return (
    <section className="margins">
      <div>
        <div className="grid grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectTile
              key={index}
              title={project.title}
              creator={project.creator}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default MyProjects;
