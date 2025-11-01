
import React from 'react';
import type { UserRole } from '../types';
import { MenuIcon, SearchIcon, NotificationIcon, ChevronDownIcon } from './icons';

interface HeaderProps {
    userName: string;
    userRole: UserRole;
    isSidebarCollapsed: boolean;
    toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ userName, userRole, isSidebarCollapsed, toggleSidebar }) => {
    return (
        <header className="flex-shrink-0 bg-slate-800 h-20 flex items-center justify-between px-4 md:px-6 border-b border-slate-700">
            <div className="flex items-center">
                <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-slate-700 mr-4">
                    <MenuIcon className="w-6 h-6 text-slate-400" />
                </button>
                <div className="relative hidden md:block">
                    <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search by name, roll no, course..."
                        className="pl-10 pr-4 py-2 w-64 lg:w-96 bg-slate-700 border border-transparent rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:bg-slate-600 focus:ring-2 focus:ring-brand-orange"
                    />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full hover:bg-slate-700 relative">
                    <NotificationIcon className="w-6 h-6 text-slate-400" />
                    <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-slate-800"></span>
                </button>
                <div className="h-8 w-px bg-slate-700"></div>
                <div className="flex items-center space-x-3">
                    <img 
                      src={`https://picsum.photos/seed/${userName.split(' ')[0]}/40/40`} 
                      alt="User Avatar" 
                      className="w-10 h-10 rounded-full object-cover" 
                    />
                    <div>
                        <p className="font-semibold text-sm text-slate-200">{userName}</p>
                        <p className="text-xs text-brand-secondary">{userRole}</p>
                    </div>
                    <ChevronDownIcon className="w-5 h-5 text-slate-500 cursor-pointer" />
                </div>
            </div>
        </header>
    );
};

export default Header;