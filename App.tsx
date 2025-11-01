import React, { useState, useMemo, useEffect } from 'react';
import type { User, UserRole, Student } from './types';
import { MOCK_USERS, MOCK_STUDENTS, MOCK_FACULTY, MOCK_NOTICES, MOCK_FEES, MOCK_COLLEGES, MOCK_COURSES, MOCK_BOOKS } from './constants';
import LoginScreen from './components/Login';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardHome from './views/DashboardHome';
import StudentManagement from './views/StudentManagement';
import FeeManagement from './views/FeeManagement';
import CollegeManagement from './views/CollegeManagement';
import CourseManagement from './views/CourseManagement';
import FacultyManagement from './views/FacultyManagement';
import LibraryManagement from './views/LibraryManagement';
import ReportsView from './views/ReportsView';
import SettingsView from './views/SettingsView';

type Theme = 'light' | 'dark';

const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [activeView, setActiveView] = useState<string>('dashboard');
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(true);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

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
            case 'colleges':
                return <CollegeManagement colleges={MOCK_COLLEGES} userRole={currentUser.role} />;
            case 'courses':
                return <CourseManagement courses={MOCK_COURSES} userRole={currentUser.role} />;
            case 'faculty':
                return <FacultyManagement faculty={MOCK_FACULTY} userRole={currentUser.role} />;
            case 'library':
                return <LibraryManagement books={MOCK_BOOKS} students={MOCK_STUDENTS} userRole={currentUser.role} />;
            case 'reports':
                return <ReportsView students={MOCK_STUDENTS} fees={MOCK_FEES} faculty={MOCK_FACULTY} courses={MOCK_COURSES} />;
            case 'settings':
                return <SettingsView user={currentUser} />;
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
        <div className="flex h-screen bg-light-background dark:bg-dark-background font-sans text-light-textPrimary dark:text-dark-textPrimary">
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-20 md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                ></div>
            )}
            <Sidebar 
                userRole={currentUser.role} 
                activeView={activeView} 
                setActiveView={setActiveView} 
                isCollapsed={isSidebarCollapsed}
                isMobileMenuOpen={isMobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                onLogout={handleLogout}
            />
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64'}`}>
                <Header 
                    userName={currentUser.name} 
                    userRole={currentUser.role}
                    isSidebarCollapsed={isSidebarCollapsed}
                    toggleSidebar={() => setSidebarCollapsed(!isSidebarCollapsed)}
                    toggleMobileNav={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    theme={theme}
                    setTheme={setTheme}
                />
                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                    {renderActiveView()}
                </main>
            </div>
        </div>
    );
};

export default App;