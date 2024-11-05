import React, { useState } from 'react';
import SettingsSidebar from '../components/SettingsSidebar';
import wave from '../assets/wave.svg';
import ProfileSettings from '../components/ProfileSettings';
import AccountSettings from '../components/AccountSettings';
import NotificationSettings from '../components/NotificationSettings';

const Settings = () => {
    const [selectedSection, setSelectedSection] = useState('profile');

    const renderContent = () => {
        switch (selectedSection) {
            case 'profile':
                return <ProfileSettings />;
            case 'account':
                return <AccountSettings />;
            case 'notifications':
                return <NotificationSettings />;
            case 'privacy':
                return <div className="settings-box">Privacy Settings (This is more of a placeholder category once we start actually implementing stuff, can be deleted at any point)</div>;
            default:
                return <div>Select a section</div>;
        }
    };

    return (
        <div className="flex h-screen pt-16">
            {/* Background Image */}
            <img
                src={wave}
                className="fixed w-full h-full object-cover z-[-1]"
                alt="Background Wave"
            />

            {/* Fixed Sidebar */}
            <div className="fixed h-[calc(100vh-4rem)]">
                <SettingsSidebar onSelect={setSelectedSection} />
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-grow p-4 ml-64 h-[calc(100vh-4rem)] overflow-y-auto">
                {renderContent()}
            </div>
        </div>
    );
};

export default Settings;
