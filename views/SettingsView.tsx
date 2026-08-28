import React, { useState } from 'react';
import { useCrm } from '../data/CrmProvider';

const SettingsView: React.FC = () => {
    const { currentUser: user } = useCrm();

    // Demo-only notification toggles (local state, no backend).
    const [notifs, setNotifs] = useState({ email: true, push: false, fee: true, exam: true });
    const [pwdMsg, setPwdMsg] = useState('');

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

    const Toggle = ({ label, enabled, onToggle }: { label: string, enabled: boolean, onToggle: () => void }) => (
        <div className="flex items-center justify-between">
            <span className="text-light-textPrimary dark:text-dark-textPrimary">{label}</span>
            <button onClick={onToggle} className={`relative inline-block w-12 h-6 rounded-full transition-colors duration-300 ${enabled ? 'bg-brand-orange' : 'bg-slate-300 dark:bg-slate-600'}`}>
                <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${enabled ? 'transform translate-x-6' : ''}`}></span>
            </button>
        </div>
    );

    if (!user) return null;

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
                <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">Profile fields are read-only in this demo. Update them once the Supabase user profile table is connected.</p>
            </div>

            {/* Notification Settings */}
            <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-light-textPrimary dark:text-dark-textPrimary">Notifications</h2>
                <div className="space-y-4">
                    <Toggle label="Email Notifications" enabled={notifs.email} onToggle={() => setNotifs(n => ({ ...n, email: !n.email }))} />
                    <Toggle label="Push Notifications" enabled={notifs.push} onToggle={() => setNotifs(n => ({ ...n, push: !n.push }))} />
                    <Toggle label="Fee Reminders" enabled={notifs.fee} onToggle={() => setNotifs(n => ({ ...n, fee: !n.fee }))} />
                    <Toggle label="Exam Alerts" enabled={notifs.exam} onToggle={() => setNotifs(n => ({ ...n, exam: !n.exam }))} />
                </div>
            </div>

            {/* Security demo note */}
            <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-light-textPrimary dark:text-dark-textPrimary">Security</h2>
                <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                    Password management is handled by the auth service (Supabase Auth when connected). In this demo the
                    password is a fixed <code className="text-brand-orange">demo123</code>.
                </p>
                {pwdMsg && <p className="mt-3 text-sm text-green-600 dark:text-green-400">{pwdMsg}</p>}
            </div>
        </div>
    );
};

export default SettingsView;
