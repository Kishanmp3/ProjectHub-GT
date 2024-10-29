import React, { useState } from 'react';
import SettingsSidebar from '../components/SettingsSidebar';
import wave from '../assets/wave.svg';
import Navbar from "../components/Navbar.jsx";

const Settings = () => {
    const [selectedSection, setSelectedSection] = useState('profile');

    const renderContent = () => {
        switch (selectedSection) {
            case 'profile':
                return (
                    <div className="settings-box">Profile Settings</div>
                );
            case 'account':
                return (
                    <div>Account Settings</div>
                );
            case 'notifications':
                return (
                    <div>Notification Settings</div>
                );
            case 'privacy':
                return (
                    <div>Privacy Settings</div>
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