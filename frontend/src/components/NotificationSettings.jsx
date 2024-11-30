import React, { useState } from 'react';

const NotificationSettings = () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(true);
    const [notificationTypes, setNotificationTypes] = useState({
        projectApplication: true,
        applicationUpdate: false,
        invitationReceived: true,
    });

    const toggleEmailNotifications = () => {
        setEmailNotifications(!emailNotifications);
    };

    const togglePushNotifications = () => {
        setPushNotifications(!pushNotifications);
    };

    const toggleNotificationType = (type) => {
        setNotificationTypes({
            ...notificationTypes,
            [type]: !notificationTypes[type],
        });
    };

    return (
        <div className="settings-box space-y-6">
            {/* Email Notifications Section */}
            <div className="p-4 bg-surface-200 rounded-md shadow-md">
                <label className="block text-gray-300 font-medium text-lg">Email Notifications:</label>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-400">Receive email notifications for project updates, invitations, and more.</span>
                    <div className="ml-4">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={emailNotifications}
                                onChange={toggleEmailNotifications}
                                className="sr-only"
                            />
                            <div className={`w-11 h-6 bg-gray-500 rounded-full shadow-inner transition-colors ${emailNotifications ? 'bg-blue-500' : 'bg-gray-500'}`}>
                                <div className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${emailNotifications ? 'transform translate-x-5' : ''}`}></div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Push Notifications Section */}
            <div className="p-4 bg-surface-200 rounded-md shadow-md">
                <label className="block text-gray-300 font-medium text-lg">Push Notifications:</label>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-400">Receive push notifications for app-related events and updates.</span>
                    <div className="ml-4">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={pushNotifications}
                                onChange={togglePushNotifications}
                                className="sr-only"
                            />
                            <div className={`w-11 h-6 bg-gray-500 rounded-full shadow-inner transition-colors ${pushNotifications ? 'bg-blue-500' : 'bg-gray-500'}`}>
                                <div className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${pushNotifications ? 'transform translate-x-5' : ''}`}></div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Notification Types Section */}
            <div className="p-4 bg-surface-200 rounded-md shadow-md">
                <label className="block text-gray-300 font-medium text-lg">Notification Types:</label>
                <div className="mt-2 space-y-2">
                    {/* Project Application Notification */}
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400">A person applied to one of your projects</span>
                        <div className="ml-4">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={notificationTypes.projectApplication}
                                    onChange={() => toggleNotificationType('projectApplication')}
                                    className="sr-only"
                                />
                                <div className={`w-11 h-6 bg-gray-500 rounded-full shadow-inner transition-colors ${notificationTypes.projectApplication ? 'bg-blue-500' : 'bg-gray-500'}`}>
                                    <div className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${notificationTypes.projectApplication ? 'transform translate-x-5' : ''}`}></div>
                                </div>
                            </label>
                        </div>
                    </div>
                    
                    {/* Application Update Notification */}
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400">One of your applications has an update</span>
                        <div className="ml-4">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={notificationTypes.applicationUpdate}
                                    onChange={() => toggleNotificationType('applicationUpdate')}
                                    className="sr-only"
                                />
                                <div className={`w-11 h-6 bg-gray-500 rounded-full shadow-inner transition-colors ${notificationTypes.applicationUpdate ? 'bg-blue-500' : 'bg-gray-500'}`}>
                                    <div className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${notificationTypes.applicationUpdate ? 'transform translate-x-5' : ''}`}></div>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Invitation Received Notification */}
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400">You've received an invitation to collaborate</span>
                        <div className="ml-4">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={notificationTypes.invitationReceived}
                                    onChange={() => toggleNotificationType('invitationReceived')}
                                    className="sr-only"
                                />
                                <div className={`w-11 h-6 bg-gray-500 rounded-full shadow-inner transition-colors ${notificationTypes.invitationReceived ? 'bg-blue-500' : 'bg-gray-500'}`}>
                                    <div className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${notificationTypes.invitationReceived ? 'transform translate-x-5' : ''}`}></div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationSettings;
