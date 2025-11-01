
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
            case 'Paid': return 'bg-green-100 text-green-800';
            case 'Pending': return 'bg-red-100 text-red-800';
            case 'Partial': return 'bg-yellow-100 text-yellow-800';
        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-slate-800">Student Management</h2>
                <div className="w-full md:w-auto flex items-center gap-4">
                    <div className="relative w-full md:w-64">
                        <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search students..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
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
                <table className="w-full text-sm text-left text-slate-500">
                    <thead className="text-xs text-slate-700 uppercase bg-slate-50">
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
                            <tr key={student.id} className="bg-white border-b hover:bg-slate-50">
                                <td className="px-6 py-4 font-medium text-slate-900">{student.rollNo}</td>
                                <td className="px-6 py-4">{student.name}</td>
                                <td className="px-6 py-4">{student.course}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusChipClass(student.feeStatus)}`}>
                                        {student.feeStatus}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{student.attendancePercentage}%</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-2">
                                        <button className="text-blue-600 hover:underline text-xs">View</button>
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
