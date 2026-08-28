import React, { useState, useEffect } from 'react';
import type { UserRole } from './types';
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
import ResultManagement from './views/ResultManagement';
import { PublicLayout } from './pages/PublicLayout';
import { HomePage } from './pages/HomePage';
import { InstitutionsPage } from './pages/InstitutionsPage';
import { InstitutionDetailPage } from './pages/InstitutionDetailPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { MessagesPage } from './pages/MessagesPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProgramDetailPage } from './pages/ProgramDetailPage';
import { useRoute, getSegments, navigate, installLinkInterceptor } from './pages/router';
import { LanguageProvider } from './pages/i18n';
import { CrmProvider, useCrm } from './data/CrmProvider';
// Ensure translations are registered
import './pages/translations';

type Theme = 'light' | 'dark';

const CrmApp: React.FC = () => {
    const route = useRoute();
    const segments = getSegments(route);

    const { currentUser, logout } = useCrm();

    const [activeView, setActiveView] = useState<string>('dashboard');
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(true);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState<Theme>('light');

    // Reset to the dashboard whenever a user signs in.
    const wasLoggedIn = React.useRef(!!currentUser);
    useEffect(() => {
        if (currentUser && !wasLoggedIn.current) {
            setActiveView('dashboard');
        }
        wasLoggedIn.current = !!currentUser;
    }, [currentUser]);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    useEffect(() => {
        const cleanup = installLinkInterceptor();
        return cleanup;
    }, []);

    // Redirect old /programs/* to /courses/* (route rename)
    useEffect(() => {
        if (segments[0] === 'programs' && segments[1]) {
            navigate(`/courses/${segments.slice(1).join('/')}`, true);
        }
    }, [segments]);

    const handleLogout = () => {
        logout();
        navigate('/');
        setActiveView('dashboard');
    };

    const handleBackToSite = () => {
        navigate('/');
    };

    const renderActiveView = () => {
        if (!currentUser) return null;
        switch (activeView) {
            case 'dashboard': return <DashboardHome />;
            case 'students': return <StudentManagement />;
            case 'fees': return <FeeManagement />;
            case 'colleges': return <CollegeManagement />;
            case 'courses': return <CourseManagement />;
            case 'faculty': return <FacultyManagement />;
            case 'library': return <LibraryManagement />;
            case 'reports': return <ReportsView />;
            case 'results': return <ResultManagement />;
            case 'settings': return <SettingsView />;
            default:
                return (
                    <div className="p-6">
                        <h1 className="text-2xl font-bold">Page not found</h1>
                        <p>The view '{activeView}' is not yet implemented.</p>
                    </div>
                );
        }
    };

    // -------- CRM / ADMIN (#/admin) --------
    if (segments[0] === 'admin') {
        if (!currentUser) {
            return <LoginScreen onBackToSite={handleBackToSite} />;
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
                    userRole={currentUser.role as UserRole}
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
                        userRole={currentUser.role as UserRole}
                        isSidebarCollapsed={isSidebarCollapsed}
                        toggleSidebar={() => setSidebarCollapsed(!isSidebarCollapsed)}
                        toggleMobileNav={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        theme={theme}
                        setTheme={setTheme}
                        onBackToSite={handleBackToSite}
                    />
                    <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                        {renderActiveView()}
                    </main>
                </div>
            </div>
        );
    }

    // -------- PUBLIC MULTIPAGE SITE --------
    let page: React.ReactNode;
    if (segments.length === 0) {
        page = <HomePage />;
    } else if (segments[0] === 'institutions' && segments.length === 1) {
        page = <InstitutionsPage />;
    } else if (segments[0] === 'institutions' && segments[1]) {
        page = <InstitutionDetailPage slug={segments[1]} />;
    } else if (segments[0] === 'about') {
        page = <AboutPage />;
    } else if (segments[0] === 'gallery') {
        page = <GalleryPage />;
    } else if (segments[0] === 'messages') {
        page = <MessagesPage />;
    } else if (segments[0] === 'contact') {
        page = <ContactPage />;
    } else if (segments[0] === 'courses' && segments[1]) {
        page = <ProgramDetailPage slug={segments[1]} />;
    } else {
        page = <NotFoundPage />;
    }

    return <LanguageProvider><PublicLayout>{page}</PublicLayout></LanguageProvider>;
};

const App: React.FC = () => (
    <CrmProvider>
        <CrmApp />
    </CrmProvider>
);

export default App;
