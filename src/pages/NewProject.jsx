import React from "react";
import CustomInput from "../components/CustomInput";

const NewProject = () => {
  return (
    <>
      <section className="min-h-[calc(100vh)] h-full flex justify-between items-start px-8">
        {/* Left Col*/}
        <div className="shadow px-8 py-12 rounded bg-surface-200 w-[500px]">
          <div className="flex flex-col gap-y-6">
            <h2 className="w-full flex justify-center text-text mt-8">Create Project</h2>

            <CustomInput
              placeholder={"Enter Your Project Name"}
              label={"Project Name"}
            />

            <div className="flex gap-x-6 mt-4">
              <CustomInput placeholder={"Enter First Name"} label={"First Name"} />
              <CustomInput placeholder={"Enter Last Name"} label={"Last Name"} />
            </div>

            <CustomInput
              placeholder={"Write Your Major Relation"}
              label={"Major Relation"}
            />

            <CustomInput
              placeholder={"Write Your Project Description"}
              label={"Project Description"}
              className="h-32 w-full"
            />

            <div className="flex gap-x-6 mt-4">
              <CustomInput placeholder={"Enter Start Date"} label={"Start Date"} />
              <CustomInput placeholder={"Enter End Date"} label={"End Date"} />
            </div>

            <CustomInput
              placeholder={"Write Your Required Skills"}
              label={"Required Skills"}
              className="h-32 w-full"
            />

            <button className="primary-btn mt-6">Create Project</button>

            <div className="flex w-full justify-center text-sm gap-x-1 mt-4">
              <span>Already Have an Account?</span>
              <a className="link">Login</a>
            </div>
          </div>
        </div>
        {/* Right Col */}
        <div className="w-[300px] flex flex-col items-center justify-center shadow px-8 py-12 rounded bg-surface-200">
          <h3 className="text-2xl font-semibold mb-4 text-center">Upload Project Image</h3>
          <p className="text-sm mb-4 text-center text-text mt-8">
            Please upload an image related to your project.
          </p>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
      </section>
    </>
  );
};

export default NewProject;
