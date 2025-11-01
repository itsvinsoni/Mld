
import React, { useState, useMemo } from 'react';
import type { User, UserRole, Student } from './types';
import { MOCK_USERS, MOCK_STUDENTS, MOCK_FACULTY, MOCK_NOTICES, MOCK_FEES } from './constants';
import LoginScreen from './components/Login';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardHome from './views/DashboardHome';
import StudentManagement from './views/StudentManagement';
import FeeManagement from './views/FeeManagement';

const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [activeView, setActiveView] = useState<string>('dashboard');
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

    const handleLogin = (email: string, pass: string): boolean => {
        const user = MOCK_USERS.find(u => u.email === email);
        if (user) {
            // In a real app, you'd verify the password hash
            setCurrentUser(user);
            setActiveView('dashboard');
            return true;
        }
        return false;
    };

    const handleLogout = () => {
        setCurrentUser(null);
    };

    const renderActiveView = () => {
        if (!currentUser) return null;

        const sharedProps = {
            students: MOCK_STUDENTS,
            faculty: MOCK_FACULTY,
            notices: MOCK_NOTICES,
            fees: MOCK_FEES,
            user: currentUser
        };

        switch (activeView) {
            case 'dashboard':
                return <DashboardHome {...sharedProps} />;
            case 'students':
                return <StudentManagement students={MOCK_STUDENTS} userRole={currentUser.role} />;
            case 'fees':
                return <FeeManagement fees={MOCK_FEES} students={MOCK_STUDENTS} userRole={currentUser.role} />;
            // Add cases for other views like 'courses', 'faculty', 'library', etc.
            default:
                return <div className="p-6">
                  <h1 className="text-2xl font-bold">Page not found</h1>
                  <p>The view '{activeView}' is not yet implemented.</p>
                </div>;
        }
    };

    if (!currentUser) {
        return <LoginScreen onLogin={handleLogin} />;
    }

    return (
        <div className="flex h-screen bg-brand-background font-sans text-slate-800">
            <Sidebar 
                userRole={currentUser.role} 
                activeView={activeView} 
                setActiveView={setActiveView} 
                isCollapsed={isSidebarCollapsed}
                onLogout={handleLogout}
            />
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
                <Header 
                    userName={currentUser.name} 
                    userRole={currentUser.role}
                    isSidebarCollapsed={isSidebarCollapsed}
                    toggleSidebar={() => setSidebarCollapsed(!isSidebarCollapsed)}
                />
                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                    {renderActiveView()}
                </main>
            </div>
        </div>
    );
};

export default App;
