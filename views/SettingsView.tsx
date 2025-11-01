import React from 'react';
import type { User } from '../types';

interface SettingsViewProps {
    user: User;
}

const SettingsView: React.FC<SettingsViewProps> = ({ user }) => {

    const InputField = ({ label, type, value, id }: { label: string, type: string, value: string, id: string }) => (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary mb-1">{label}</label>
            <input
                type={type}
                id={id}
                defaultValue={value}
                className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-light-border dark:border-dark-border text-light-textPrimary dark:text-dark-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                readOnly
            />
        </div>
    );
    
    const Toggle = ({ label, id, enabled = true }: { label: string, id: string, enabled?: boolean }) => (
         <div className="flex items-center justify-between">
            <span className="text-light-textPrimary dark:text-dark-textPrimary">{label}</span>
            <div className={`relative inline-block w-12 h-6 rounded-full transition-colors duration-300 ${enabled ? 'bg-brand-orange' : 'bg-slate-300 dark:bg-slate-600'}`}>
                <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${enabled ? 'transform translate-x-6' : ''}`}></span>
            </div>
        </div>
    );


    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary">Settings</h1>

            {/* Profile Settings */}
            <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-light-textPrimary dark:text-dark-textPrimary">Profile Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Full Name" id="name" type="text" value={user.name} />
                    <InputField label="Email Address" id="email" type="email" value={user.email} />
                    <InputField label="Role" id="role" type="text" value={user.role} />
                    {user.collegeId && <InputField label="College ID" id="collegeId" type="text" value={user.collegeId} />}
                </div>
            </div>

            {/* Security Settings */}
            <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-light-textPrimary dark:text-dark-textPrimary">Security</h2>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="current-password" className="block text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary mb-1">Change Password</label>
                        <input type="password" id="current-password" placeholder="Current Password"  className="mb-2 w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-light-border dark:border-dark-border text-light-textPrimary dark:text-dark-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange" />
                        <input type="password" placeholder="New Password"  className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-light-border dark:border-dark-border text-light-textPrimary dark:text-dark-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange" />
                    </div>
                     <button className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300">
                        Update Password
                    </button>
                </div>
            </div>
            
            {/* Notification Settings */}
            <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-light-textPrimary dark:text-dark-textPrimary">Notifications</h2>
                <div className="space-y-4">
                    <Toggle label="Email Notifications" id="email-notif" />
                    <Toggle label="Push Notifications" id="push-notif" enabled={false} />
                    <Toggle label="Fee Reminders" id="fee-reminders" />
                    <Toggle label="Exam Alerts" id="exam-alerts" />
                </div>
            </div>
        </div>
    );
};

export default SettingsView;