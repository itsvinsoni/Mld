import React, { useState } from 'react';
import type { UserRole } from '../types';
import { UserRole as Roles } from '../types';
import { useCrm } from '../data/CrmProvider';

interface LoginScreenProps {
    onBackToSite?: () => void;
}

/**
 * Demo credentials shown as quick-login buttons.
 * The manual form validates the password too — the older version ignored it.
 */
const demoUsers: { role: UserRole; email: string }[] = [
    { role: Roles.ADMIN, email: 'badebauji@mld.com' },
    { role: Roles.DIRECTOR, email: 'director@mld.com' },
    { role: Roles.MANAGER, email: 'avinash@mld.com' },
    { role: Roles.HEAD, email: 'head@mld.com' },
    { role: Roles.ACCOUNTANT, email: 'accounts@mld.com' },
    { role: Roles.FACULTY, email: 'faculty@mld.com' },
    { role: Roles.STUDENT, email: 'student@mld.com' },
];

const LoginScreen: React.FC<LoginScreenProps> = ({ onBackToSite }) => {
    const { login, loginAsRole } = useCrm();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (!login(email, password)) {
            setError('Invalid email or password.');
        }
    };

    const handleDemoLogin = (role: UserRole) => {
        setError('');
        loginAsRole(role);
    };

    return (
        <div className="min-h-screen bg-light-background dark:bg-dark-background flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-light-surface dark:bg-dark-surface rounded-2xl shadow-xl p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary">MLD CRM</h1>
                        <p className="text-brand-secondary mt-2">Unified Management Dashboard</p>
                        {onBackToSite && (
                            <button
                                onClick={onBackToSite}
                                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-orange hover:text-brand-orange-dark transition"
                            >
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7M5 12h14"/></svg>
                                Back to website
                            </button>
                        )}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary mb-1" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 bg-slate-200 dark:bg-slate-700 border border-light-border dark:border-dark-border text-light-textPrimary dark:text-dark-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                                placeholder="e.g., badebauji@mld.com"
                                autoComplete="username"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary mb-1" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 bg-slate-200 dark:bg-slate-700 border border-light-border dark:border-dark-border text-light-textPrimary dark:text-dark-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                                placeholder="••••••••"
                                autoComplete="current-password"
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
                        <button
                            type="submit"
                            className="w-full bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300"
                        >
                            Log In
                        </button>
                    </form>
                    <div className="mt-6">
                        <p className="text-center text-sm text-slate-500 dark:text-slate-500 mb-4">
                            Or log in with a demo account (password: <code className="text-brand-orange">demo123</code>):
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {demoUsers.map(user => (
                                <button
                                    key={user.role}
                                    onClick={() => handleDemoLogin(user.role)}
                                    className="text-xs text-center py-2 px-1 border border-light-border dark:border-dark-border rounded-md text-light-textSecondary dark:text-dark-textSecondary hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                                >
                                    {user.role}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
