import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker-custom.css"; // Custom styles for dark mode

const NewProject = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const openModal = () => {
    if (selectedImage) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="min-h-[100vh] h-full flex justify-center items-center px-6 bg-surface-100 overflow-hidden">
        <div className="flex justify-between gap-x-10 p-6 w-full max-w-[1200px] shadow-lg rounded-lg bg-surface-200">
          {/* Left Col */}
          <div className="flex flex-col gap-y-2 w-[55%]">
            <h2 className="text-center text-2xl font-semibold mb-4 text-text">Create Project</h2>

            <CustomInput placeholder="Enter Your Project Name" label="Project Name" />
            <div className="flex gap-x-2">
              <CustomInput placeholder="Enter First Name" label="First Name" />
              <CustomInput placeholder="Enter Last Name" label="Last Name" />
            </div>
            <CustomInput placeholder="Write Your Major Relation" label="Major Relation" />
            <CustomInput placeholder="Write Your Project Description" label="Project Description" />

            <div className="flex gap-x-2">
              
              {/* Start Date Picker */}
              <label className="flex flex-col gap-y-1 w-full">
                <span className="text-text">Start Date</span>
                <ReactDatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="MM/DD/YYYY"
                  className="dark-datepicker p-2 rounded-md bg-[#1A1A1A] text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>

              {/* End Date Picker */}
              <label className="flex flex-col gap-y-1 w-full">
                <span className="text-text">End Date</span>
                <ReactDatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="MM/DD/YYYY"
                  className="dark-datepicker p-2 rounded-md bg-[#1A1A1A] text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>
            </div>

            <CustomInput placeholder="Write Your Required Skills" label="Required Skills" />

            <button className="primary-btn mt-4">Create Project</button>

            <div className="text-center text-sm mt-3 text-text">
              <span>Already Have an Account?</span>
              <Link to="/login" className="ml-1 text-blue-500 hover:underline">Login</Link>
            </div>
          </div>

          {/* Right Col - Upload Image */}
          <div className="w-[40%] flex flex-col items-center">
            <div
              className="w-full h-[400px] cursor-pointer flex items-center justify-center rounded-lg overflow-hidden"
              style={{
                backgroundColor: !selectedImage ? "#1F1F1F" : "transparent",
                backgroundImage: selectedImage ? `url(${selectedImage})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={openModal}
            >
              {!selectedImage && (
                <div className="text-gray-300 text-center">
                  <p>Upload Image</p>
                </div>
              )}
            </div>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            
            {/* Choose File Button */}
            <button
              onClick={() => document.getElementById("file-upload").click()}
              className="primary-btn mt-3"
            >
              Choose File
            </button>
          </div>
        </div>
        
        {/* Modal for Full Image */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div className="relative p-4 rounded-lg bg-surface-200" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-lg font-bold bg-black rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Full Size"
                className="rounded-lg max-w-[90vw] max-h-[90vh] object-contain"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default NewProject;