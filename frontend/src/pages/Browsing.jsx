import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; 
import wave from "../assets/wave.svg";

const Browsing = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const projects = [
        { id: 1, title: "AI Image Classifier", description: "A deep learning model to classify images using TensorFlow." },
        { id: 2, title: "Chat Application", description: "A real-time chat application using WebSocket and Node.js." },
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
            <div className="w-full max-w-5xl">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="mb-2">
                        <h2 className="text-xl font-bold">{project.title}</h2>
                        <p className="text-gray-600">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Browsing;
