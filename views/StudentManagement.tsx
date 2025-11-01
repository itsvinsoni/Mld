
import React, { useState } from 'react';
import type { Student, UserRole } from '../types';
import { UserRole as Roles } from '../types';
import { SearchIcon } from '../components/icons';

interface StudentManagementProps {
    students: Student[];
    userRole: UserRole;
}

const StudentManagement: React.FC<StudentManagementProps> = ({ students, userRole }) => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const canEdit = [Roles.ADMIN, Roles.MANAGER, Roles.HEAD].includes(userRole);

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.course.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusChipClass = (status: 'Paid' | 'Pending' | 'Partial') => {
        switch (status) {
            case 'Paid': return 'bg-green-500/20 text-green-300';
            case 'Pending': return 'bg-red-500/20 text-red-300';
            case 'Partial': return 'bg-yellow-500/20 text-yellow-300';
        }
    };

    return (
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-slate-100">Student Management</h2>
                <div className="w-full md:w-auto flex items-center gap-4">
                    <div className="relative w-full md:w-64">
                        <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search students..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 text-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                        />
                    </div>
                    {canEdit && (
                        <button className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300 whitespace-nowrap">
                            + Add Student
                        </button>
                    )}
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-400">
                    <thead className="text-xs text-slate-400 uppercase bg-slate-700/50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Roll No</th>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Course</th>
                            <th scope="col" className="px-6 py-3">Fee Status</th>
                            <th scope="col" className="px-6 py-3">Attendance</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map(student => (
                            <tr key={student.id} className="border-b border-slate-700 hover:bg-slate-700/50">
                                <td className="px-6 py-4 font-medium text-slate-200">{student.rollNo}</td>
                                <td className="px-6 py-4 text-slate-200">{student.name}</td>
                                <td className="px-6 py-4">{student.course}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusChipClass(student.feeStatus)}`}>
                                        {student.feeStatus}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{student.attendancePercentage}%</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-2">
                                        <button className="text-blue-400 hover:underline text-xs">View</button>
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

export default StudentManagement;