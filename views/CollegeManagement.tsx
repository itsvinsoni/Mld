import React, { useState } from 'react';
import type { College, UserRole } from '../types';
import { UserRole as Roles } from '../types';
import { SearchIcon } from '../components/icons';

interface CollegeManagementProps {
    colleges: College[];
    userRole: UserRole;
}

const CollegeManagement: React.FC<CollegeManagementProps> = ({ colleges, userRole }) => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const canEdit = [Roles.ADMIN, Roles.MANAGER].includes(userRole);

    const filteredColleges = colleges.filter(college =>
        college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary">College Management</h2>
                <div className="w-full md:w-auto flex items-center gap-4">
                    <div className="relative w-full md:w-64">
                        <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search colleges..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-700 border border-light-border dark:border-dark-border text-light-textPrimary dark:text-dark-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                        />
                    </div>
                    {canEdit && (
                        <button className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300 whitespace-nowrap">
                            + Add College
                        </button>
                    )}
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-light-textSecondary dark:text-dark-textSecondary">
                    <thead className="text-xs uppercase bg-slate-50 dark:bg-dark-surface/50 text-slate-500 dark:text-slate-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">College Name</th>
                            <th scope="col" className="px-6 py-3">Location</th>
                            <th scope="col" className="px-6 py-3">Principal</th>
                            <th scope="col" className="px-6 py-3">Student Count</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredColleges.map(college => (
                            <tr key={college.id} className="border-b border-light-border dark:border-dark-border hover:bg-slate-50 dark:hover:bg-dark-surface/50">
                                <td className="px-6 py-4 font-medium text-light-textPrimary dark:text-dark-textPrimary">{college.name}</td>
                                <td className="px-6 py-4">{college.location}</td>
                                <td className="px-6 py-4">{college.principal}</td>
                                <td className="px-6 py-4">{college.studentCount}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-2">
                                        <button className="text-blue-500 hover:underline text-xs">View</button>
                                        {canEdit && <button className="text-brand-orange hover:underline text-xs">Edit</button>}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CollegeManagement;