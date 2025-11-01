import React from 'react';
import type { UserRole } from '../types';
import { MenuIcon, SearchIcon, NotificationIcon, ChevronDownIcon, SunIcon, MoonIcon } from './icons';

type Theme = 'light' | 'dark';

interface HeaderProps {
    userName: string;
    userRole: UserRole;
    isSidebarCollapsed: boolean;
    toggleSidebar: () => void;
    toggleMobileNav: () => void;
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const Header: React.FC<HeaderProps> = ({ userName, userRole, isSidebarCollapsed, toggleSidebar, toggleMobileNav, theme, setTheme }) => {
    
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <header className="flex-shrink-0 bg-light-surface dark:bg-dark-surface h-20 flex items-center justify-between px-4 md:px-6 border-b border-light-border dark:border-dark-border">
            <div className="flex items-center">
                {/* Desktop Toggle */}
                <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 mr-4 hidden md:block">
                    <MenuIcon className="w-6 h-6 text-slate-500 dark:text-slate-400" />
                </button>
                 {/* Mobile Toggle */}
                <button onClick={toggleMobileNav} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 mr-4 md:hidden">
                    <MenuIcon className="w-6 h-6 text-slate-500 dark:text-slate-400" />
                </button>
                <div className="relative hidden md:block">
                    <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search by name, roll no, course..."
                        className="pl-10 pr-4 py-2 w-64 lg:w-96 bg-slate-100 dark:bg-slate-700 border border-transparent rounded-lg text-light-textPrimary dark:text-dark-textPrimary placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:bg-white dark:focus:bg-slate-600 focus:ring-2 focus:ring-brand-orange"
                    />
                </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
                 <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700">
                    {theme === 'light' ? 
                        <MoonIcon className="w-6 h-6 text-slate-500 dark:text-slate-400" /> : 
                        <SunIcon className="w-6 h-6 text-slate-500 dark:text-slate-400" />
                    }
                </button>
                <button className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 relative">
                    <NotificationIcon className="w-6 h-6 text-slate-500 dark:text-slate-400" />
                    <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-light-surface dark:ring-dark-surface"></span>
                </button>
                <div className="h-8 w-px bg-light-border dark:bg-dark-border hidden sm:block"></div>
                <div className="flex items-center space-x-3">
                    <img 
                      src={`https://picsum.photos/seed/${userName.split(' ')[0]}/40/40`} 
                      alt="User Avatar" 
                      className="w-10 h-10 rounded-full object-cover" 
                    />
                    <div className="hidden sm:block">
                        <p className="font-semibold text-sm text-light-textPrimary dark:text-dark-textPrimary">{userName}</p>
                        <p className="text-xs text-brand-secondary">{userRole}</p>
                    </div>
                    <ChevronDownIcon className="w-5 h-5 text-slate-500 cursor-pointer hidden sm:block" />
                </div>
            </div>
        </header>
    );
};

export default Header;