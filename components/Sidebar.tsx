import React, { ReactElement } from 'react';
import { UserRole } from '../types';
import { DashboardIcon, StudentsIcon, FeesIcon, FacultyIcon, LibraryIcon, CoursesIcon, ReportsIcon, SettingsIcon, LogoutIcon } from './icons';

interface SidebarProps {
    userRole: UserRole;
    activeView: string;
    setActiveView: (view: string) => void;
    isCollapsed: boolean;
    isMobileMenuOpen: boolean;
    setMobileMenuOpen: (isOpen: boolean) => void;
    onLogout: () => void;
}

type NavItem = {
    key: string;
    label: string;
    icon: ReactElement;
    roles: UserRole[];
};

const navItems: NavItem[] = [
    { key: 'dashboard', label: 'Dashboard', icon: <DashboardIcon />, roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.HEAD, UserRole.FACULTY, UserRole.STUDENT] },
    { key: 'colleges', label: 'Colleges', icon: <LibraryIcon />, roles: [UserRole.ADMIN, UserRole.MANAGER] },
    { key: 'courses', label: 'Courses', icon: <CoursesIcon />, roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.HEAD] },
    { key: 'students', label: 'Students', icon: <StudentsIcon />, roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.HEAD, UserRole.FACULTY] },
    { key: 'faculty', label: 'Faculty', icon: <FacultyIcon />, roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.HEAD] },
    { key: 'fees', label: 'Fees', icon: <FeesIcon />, roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.HEAD, UserRole.STUDENT] },
    { key: 'library', label: 'Library', icon: <LibraryIcon />, roles: [UserRole.ADMIN, UserRole.HEAD, UserRole.FACULTY] },
    { key: 'reports', label: 'Reports', icon: <ReportsIcon />, roles: [UserRole.ADMIN] },
    { key: 'settings', label: 'Settings', icon: <SettingsIcon />, roles: [UserRole.ADMIN] },
];

const Sidebar: React.FC<SidebarProps> = ({ userRole, activeView, setActiveView, isCollapsed, onLogout, isMobileMenuOpen, setMobileMenuOpen }) => {
    const filteredNavItems = navItems.filter(item => item.roles.includes(userRole));
    
    const handleItemClick = (view: string) => {
        setActiveView(view);
        setMobileMenuOpen(false); // Close on mobile after navigation
    };


    return (
        <aside className={`fixed top-0 left-0 h-full bg-light-surface dark:bg-dark-surface text-light-textPrimary dark:text-dark-textPrimary flex flex-col shadow-lg z-30 transition-all duration-300 transform md:transform-none ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} ${isCollapsed ? 'md:w-20' : 'md:w-64'}`}>
            <div className={`flex items-center justify-center h-20 border-b border-light-border dark:border-dark-border`}>
                <div className={`font-bold text-2xl text-brand-orange transition-opacity duration-300 ${isCollapsed ? 'opacity-0 md:opacity-100' : 'opacity-100'}`}>
                    {isCollapsed ? 'M' : 'MLD'}
                </div>
            </div>
            <nav className="flex-1 px-4 py-4 space-y-2">
                {filteredNavItems.map(item => (
                    <button
                        key={item.key}
                        onClick={() => handleItemClick(item.key)}
                        className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200 ${
                            activeView === item.key
                                ? 'bg-brand-orange-light text-brand-orange-dark'
                                : 'hover:bg-slate-100 dark:hover:bg-slate-700'
                        } ${isCollapsed ? 'justify-center' : ''}`}
                    >
                        <span className="shrink-0">{item.icon}</span>
                        {!isCollapsed && <span className="ml-4 font-medium">{item.label}</span>}
                    </button>
                ))}
            </nav>
            <div className={`px-4 py-4 border-t border-light-border dark:border-dark-border`}>
                 <button
                    onClick={onLogout}
                    className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-slate-700 ${isCollapsed ? 'justify-center' : ''}`}
                >
                    <span className="shrink-0"><LogoutIcon /></span>
                    {!isCollapsed && <span className="ml-4 font-medium">Logout</span>}
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;