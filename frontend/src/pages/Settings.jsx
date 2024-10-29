import React, { useState } from 'react';
import SettingsSidebar from '../components/SettingsSidebar';
import wave from '../assets/wave.svg';

const Settings = () => {
    const [selectedSection, setSelectedSection] = useState('profile');

    const [isChecked, setIsChecked] = useState(false);
    const [textValue, setTextValue] = useState('');

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleTextChange = (e) => {
        setTextValue(e.target.value);
    };

    const renderContent = () => {
        switch (selectedSection) {
            case 'profile':
                return (
                    <div className="settings-box">
                        <label className="flex items-center space-x-3 mb-4">
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                className="form-checkbox h-5 w-5 text-primary-100"
                            />
                            <span>Enable Something</span>
                        </label>
                        <label className="flex flex-col space-y-2">
                            <span>Change the field of something else:</span>
                            <input
                                type="text"
                                value={textValue}
                                onChange={handleTextChange}
                                className="form-input mt-1 block w-f ull p-2 border border-surface-300 rounded text-black"
                            />
                        </label>
                    </div>
                );
            case 'account':
                return (
                    <div className="settings-box">Account Settings</div>
                );
            case 'notifications':
                return (
                    <div className="settings-box">Notification Settings</div>
                );
            case 'privacy':
                return (
                    <div className="settings-box">Privacy Settings</div>
                );
            default:
                return (
                    <div>Select a section</div>
                );
        }
    };

    return (
        <div className="flex h-screen pt-16 overflow-hidden">
            <img src={wave} className="fixed w-full h-full object-cover z-[-1]" alt="Background Wave"/>
            <div className="fixed h-[calc(100vh-4rem)]">
                <SettingsSidebar onSelect={setSelectedSection}/>
            </div>
            <div className="flex-grow p-4 ml-64">
                {renderContent()}
            </div>
        </div>
    );
};

export default Settings;