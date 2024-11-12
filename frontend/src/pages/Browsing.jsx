import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import wave from "../assets/wave.svg";

const Browsing = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const projects = [
        { id: 1, title: "AI Image Classifier", description: "A deep learning model to classify images using TensorFlow." },
        { id: 2, title: "Chat Application", description: "A real-time chat application using WebSocket and Node.js." },
        { id: 3, title: "Weather Forecast App", description: "A web application that displays weather forecasts using data from a weather API." },
        { id: 4, title: "Personal Portfolio Website", description: "A responsive website built with HTML, CSS, and JavaScript to showcase personal projects and skills." },
        { id: 5, title: "E-commerce Platform", description: "A complete e-commerce platform with product management, cart functionality, and payment integration using React and Firebase." },
        { id: 6, title: "Task Manager", description: "A task management tool with user authentication and real-time task updates built with MERN stack." },
        { id: 7, title: "Expense Tracker", description: "An expense tracking application with data visualization features using Chart.js." },
        { id: 8, title: "Game Development", description: "A 2D platformer game developed using Unity and C#." },
        { id: 9, title: "IoT Smart Home System", description: "A smart home system prototype that integrates sensors and microcontrollers for remote monitoring using Arduino and MQTT." },
        { id: 10, title: "Blog Platform", description: "A content management system that allows users to create and manage blog posts using Django." },
    ];

    const handleSearch = (term) => {
        setSearchTerm(term.toLowerCase());
    };

    const filteredProjects = projects.filter((project) =>
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm)
    );

    return (
        <section className="min-h-[calc(100vh)] margins h-full flex flex-col items-center pt-20">
            <img src={wave} className="absolute w-full h-full object-cover z-[-1]" alt="Background Wave" />

            <div className="w-full max-w-md mb-6 text-center">
                <div className="mb-2">
                    <p className="text-xl font-semibold text-black-700">Search</p>
                    <FaSearch className="text-black-600 text-2xl" />
                </div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search projects..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
            </div>
            <div className="w-full max-w-4xl grid grid-cols-1 gap-4">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-black font-bold text-lg">{project.title}</h3>
                        <p className="text-gray-700">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Browsing;
