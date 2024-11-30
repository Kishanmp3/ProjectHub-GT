import React, { useState } from 'react';
import { FaUser, FaCog, FaBell, FaLock } from 'react-icons/fa';

const SettingsSidebar = ({ onSelect }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelect = (item) => {
        setSelectedItem(item);
        onSelect(item);
    };

    const menuItems = [
        { name: 'profile', icon: <FaUser /> },
        { name: 'account', icon: <FaCog /> },
        { name: 'notifications', icon: <FaBell /> },
        { name: 'privacy', icon: <FaLock /> },
    ];

    return (
        <div className="w-64 h-full shadow-lg border-r border-surface-300 bg-surface-200 text-text-200 bg-opacity-15">
            <div className="border-b border-surface-300 p-5 text-center">
                <p className="text-3xl font-bold text-primary-300">Settings</p>
            </div>
            <ul className="py-6 space-y-2">
                {menuItems.map((item) => (
                    <li
                        key={item.name}
                        className={`flex items-center px-6 py-3 cursor-pointer text-lg font-semibold transition duration-200 rounded-2xl text-center
                            ${
                            selectedItem === item.name
                                ? ' text-primary-100 bg-surface-300'
                                : 'hover:bg-surface-300 hover:text-primary-200'
                        }`}
                        onClick={() => handleSelect(item.name)}
                    >
                        <span className="mr-3">{item.icon}</span>
                        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SettingsSidebar;