
import React, { useState } from 'react';
import type { UserRole } from '../types';
import { MOCK_USERS } from '../constants';

interface LoginScreenProps {
    onLogin: (email: string, pass: string) => boolean;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (!onLogin(email, 'demo123')) {
            setError('Invalid credentials. Please use the demo buttons.');
        }
    };

    const handleDemoLogin = (role: UserRole) => {
        const user = MOCK_USERS.find(u => u.role === role);
        if(user) {
            onLogin(user.email, 'demo123');
        }
    }

    const demoUsers = [
        { role: 'Admin', email: 'badebauji@mld.com' },
        { role: 'Manager', email: 'avinash@mld.com' },
        { role: 'College Head', email: 'head@mld.com' },
        { role: 'Faculty', email: 'faculty@mld.com' },
        { role: 'Student', email: 'student@mld.com' },
    ];

    return (
        <div className="min-h-screen bg-brand-background flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-slate-800">MLD CRM</h1>
                        <p className="text-brand-secondary mt-2">Unified Management Dashboard</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-600 mb-1" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                                placeholder="e.g., admin@college.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-600 mb-1" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                                placeholder="••••••••"
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
                        <p className="text-center text-sm text-slate-500 mb-4">Or log in with a demo account:</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {demoUsers.map(user => (
                                <button
                                    key={user.role}
                                    onClick={() => handleDemoLogin(user.role as UserRole)}
                                    className="text-xs text-center py-2 px-1 border border-slate-200 rounded-md hover:bg-slate-50 transition"
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
