import React, { useState } from 'react';

const ProfileSettings = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [textValue, setTextValue] = useState('');
    const [major, setMajor] = useState('');
    const [resume, setResume] = useState(null);
    const [skills, setSkills] = useState([]);
    const [skillInput, setSkillInput] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    const majors = [
        'Aerospace Engineering',
        'Applied Languages and Intercultural Studies',
        'Applied Physics',
        'Architecture',
        'Biochemistry',
        'Biology',
        'Biomedical Engineering',
        'Business Administration',
        'Chemical and Biomolecular Engineering',
        'Chemistry',
        'Civil Engineering',
        'Computational Media',
        'Computer Engineering',
        'Computer Science',
        'Earth and Atmospheric Sciences',
        'Economics',
        'Electrical Engineering',
        'Environmental Engineering',
        'Global Economics and Modern Languages',
        'History, Technology, and Society',
        'Industrial Design',
        'Industrial Engineering',
        'International Affairs',
        'Literature, Media, and Communication',
        'Materials Science and Engineering',
        'Mathematics',
        'Mechanical Engineering',
        'Music Technology',
        'Neuroscience',
        'Nuclear and Radiological Engineering',
        'Physics',
        'Psychology',
        'Public Policy',
    ];

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleTextChange = (e) => {
        setTextValue(e.target.value);
    };

    const handleMajorChange = (e) => {
        setMajor(e.target.value);
    };

    const handleResumeUpload = (e) => {
        const file = e.target.files[0];
        if (file && (file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
            setResume(file);
        } else {
            alert('Please upload a PDF or DOCX file.');
        }
    };

    const handleSkillInputChange = (e) => {
        setSkillInput(e.target.value);
    };

    const handleSkillKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addSkill();
        }
    };

    const addSkill = () => {
        if (skillInput && !skills.includes(skillInput)) {
            setSkills([...skills, skillInput]);
            setSkillInput('');
        }
    };

    const removeSkill = (skill) => {
        setSkills(skills.filter(s => s !== skill));
    };

    const handleProfilePictureUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload an image file.');
        }
    };

    return (
        <div className="settings-box space-y-6">

            {/* Major Selection Section */}
            <div className="p-4 bg-surface-200 rounded shadow-md">
                <label className="block mb-2 text-gray-300 font-medium text-lg">Select Major:</label>
                <select
                    value={major}
                    onChange={handleMajorChange}
                    className="block w-full p-2 border rounded text-gray-300 border-gray-500 bg-[#212121] outline-none focus:ring-0"
                >
                    <option value="" disabled>
                        -- Select Your Major --
                    </option>
                    {majors.map((majorOption, index) => (
                        <option key={index} value={majorOption}>
                            {majorOption}
                        </option>
                    ))}
                </select>
            </div>

            {/* Resume Upload Section */}
            <div className="p-4 bg-surface-200 rounded shadow-md">
                <label className="block mb-2 text-gray-300 font-medium text-lg">Upload Resume:</label>
                <div className="border border-gray-500 rounded p-2 bg-[#212121]">
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleResumeUpload}
                        className="w-full text-gray-300 outline-none focus:ring-0"
                    />
                    {resume && <p className="mt-2 text-sm text-gray-400">Uploaded: {resume.name}</p>}
                </div>
            </div>

            {/* Skills Section */}
            <div className="p-4 bg-surface-200 rounded shadow-md">
                <label className="block mb-2 text-gray-300 font-medium text-lg">Skills:</label>
                <div className="flex space-x-2">
                    <input
                        type="text"
                        value={skillInput}
                        onChange={handleSkillInputChange}
                        onKeyPress={handleSkillKeyPress}
                        className="form-input p-2 border border-gray-500 rounded text-gray-300 bg-[#212121] flex-grow outline-none focus:ring-0"
                        placeholder="Add a skill"
                    />
                    <button
                        onClick={addSkill}
                        className="p-2 bg-orange-500 text-white rounded-lg w-20"
                    >
                        Add
                    </button>
                </div>
                <div className="flex flex-wrap mt-2">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex items-center bg-[#1A1A1A] px-2 py-1 rounded m-1 shadow-sm border border-gray-500">
                            <span className="text-gray-300">{skill}</span>
                            <button onClick={() => removeSkill(skill)} className="ml-2 text-red-500">x</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Profile Picture Upload Section */}
            <div className="p-4 bg-surface-200 rounded shadow-md">
                <label className="block mb-2 text-gray-300 font-medium text-lg">Profile Picture:</label>
                <div className="border border-gray-500 rounded p-2 bg-[#212121]">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePictureUpload}
                        className="w-full text-gray-300 outline-none focus:ring-0"
                    />
                    {profilePicture && (
                        <div className="mt-4">
                            <img
                                src={profilePicture}
                                alt="Profile Preview"
                                className="w-24 h-24 rounded-full object-cover shadow-md"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;
