import React, { useState } from 'react';
import SettingsSidebar from '../components/SettingsSidebar';
import wave from '../assets/wave.svg';

const Settings = () => {
    const [selectedSection, setSelectedSection] = useState('profile');

    const renderContent = () => {
        switch (selectedSection) {
            case 'profile':
                return (
                    <div>Profile Settings</div>
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
                return <div>Select a section</div>;
        }
    };

    return (
        <div className="flex h-screen">
            <img src={wave} className="absolute w-full h-full object-cover z-[-1]" alt="Background Wave"/>
            <SettingsSidebar onSelect={setSelectedSection}/>
            <div className="flex-grow p-4">
                {renderContent()}
            </div>
        </div>
    );
};

export default Settings;