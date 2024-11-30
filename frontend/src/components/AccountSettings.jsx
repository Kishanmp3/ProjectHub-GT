import React, { useState } from 'react';

const AccountSettings = () => {
    const [email, setEmail] = useState('user@example.com');
    const [isEditingEmail, setIsEditingEmail] = useState(false);

    const [username, setUsername] = useState('username123');
    const [isEditingUsername, setIsEditingUsername] = useState(false);

    const [password, setPassword] = useState('');
    const [isPasswordUpdating, setIsPasswordUpdating] = useState(false);

    const [connectedAccounts, setConnectedAccounts] = useState({
        GitHub: false,
        LinkedIn: false,
    });

    const toggleEmailEditing = () => setIsEditingEmail(!isEditingEmail);
    const toggleUsernameEditing = () => setIsEditingUsername(!isEditingUsername);
    const togglePasswordUpdating = () => setIsPasswordUpdating(!isPasswordUpdating);

    const handleConnectedAccountChange = (account) => {
        setConnectedAccounts({
            ...connectedAccounts,
            [account]: !connectedAccounts[account],
        });
    };

    const saveEmail = () => {
        // Do some MongoDB actions here
        setIsEditingEmail(false);
    };

    const saveUsername = () => {
        // Do some MongoDB actions here
        setIsEditingUsername(false);
    };

    const savePassword = () => {
        // Do some MongoDB actions here
        setIsPasswordUpdating(false);
        alert('Password updated successfully!');
    };

    return (
        <div className="settings-box space-y-6">
            {/* Email Section */}
            <div className="p-4 bg-surface-200 rounded shadow-md">
                <label className="block text-gray-300 font-medium text-lg">Email:</label>
                {isEditingEmail ? (
                    <div className="flex space-x-2 mt-2">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-input outline-none p-2 border border-gray-500 rounded text-gray-300 flex-grow bg-[#212121]"
                            placeholder="Enter your email"
                        />
                        <button onClick={saveEmail} className="p-2 bg-green-500 text-white rounded-md">
                            Save
                        </button>
                        <button onClick={toggleEmailEditing} className="p-2 bg-red-500 text-white rounded-md">
                            Cancel
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-between items-center mt-2">
                        <div className="bg-[#1A1A1A] p-2 rounded border border-gray-500 text-gray-300 flex-grow">
                            {email}
                        </div>
                        <button onClick={toggleEmailEditing} className="p-2 ml-4 bg-orange-500 text-white rounded-md w-20">
                            Edit
                        </button>
                    </div>
                )}
            </div>

            {/* Username Section */}
            <div className="p-4 bg-surface-200 rounded shadow-md">
                <label className="block text-gray-300 font-medium text-lg">Username:</label>
                {isEditingUsername ? (
                    <div className="flex space-x-2 mt-2">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-input outline-none p-2 border border-gray-500 rounded text-gray-300 flex-grow bg-[#212121]"
                            placeholder="Enter your username"
                        />
                        <button onClick={saveUsername} className="p-2 bg-green-500 text-white rounded-md">
                            Save
                        </button>
                        <button onClick={toggleUsernameEditing} className="p-2 bg-red-500 text-white rounded-md">
                            Cancel
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-between items-center mt-2">
                        <div className="bg-[#1A1A1A] p-2 rounded border border-gray-500 text-gray-300 flex-grow">
                            {username}
                        </div>
                        <button onClick={toggleUsernameEditing} className="p-2 ml-4 bg-orange-500 text-white rounded-md w-20">
                            Edit
                        </button>
                    </div>
                )}
            </div>

            {/* Password Section */}
            <div className="p-4 bg-surface-200 rounded shadow-md">
                <label className="block text-gray-300 font-medium text-lg">Password:</label>
                {isPasswordUpdating ? (
                    <div className="flex space-x-2 mt-2">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-input outline-none p-2 border border-gray-500 rounded text-gray-300 flex-grow bg-[#212121]"
                            placeholder="Enter new password"
                        />
                        <button onClick={savePassword} className="p-2 bg-green-500 text-white rounded-md">
                            Save
                        </button>
                        <button onClick={togglePasswordUpdating} className="p-2 bg-red-500 text-white rounded-md">
                            Cancel
                        </button>
                    </div>
                ) : (
                    <button onClick={togglePasswordUpdating} className="p-2 bg-orange-500 text-white rounded-md mt-2">
                        Update Password
                    </button>
                )}
            </div>

            {/* Connected Accounts Section */}
            <div className="p-4 bg-surface-200 rounded shadow-md">
                <label className="block text-gray-300 font-medium text-lg">Connected Accounts:</label>
                <div className="mt-2 space-y-2">
                    {Object.keys(connectedAccounts).map((account) => (
                        <div key={account} className="flex items-center justify-between">
                            <span className="text-gray-300">{account}</span>
                            <button
                                onClick={() => handleConnectedAccountChange(account)}
                                className={`p-2 rounded-md ${
                                    connectedAccounts[account] ? 'bg-green-500 text-white' : 'bg-gray-500 text-gray-300'
                                }`}
                            >
                                {connectedAccounts[account] ? 'Connected' : 'Connect'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;
