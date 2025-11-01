
import React from 'react';
import type { Fee, Student, UserRole } from '../types';
import { UserRole as Roles } from '../types';

interface FeeManagementProps {
    fees: Fee[];
    students: Student[];
    userRole: UserRole;
}

const FeeManagement: React.FC<FeeManagementProps> = ({ fees, students, userRole }) => {
    const canEdit = [Roles.ADMIN, Roles.MANAGER, Roles.HEAD].includes(userRole);

    const feeRecords = fees.map(fee => {
        const student = students.find(s => s.id === fee.studentId);
        return {
            ...fee,
            studentName: student?.name || 'N/A',
            rollNo: student?.rollNo || 'N/A',
        };
    });

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
    }

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Fee Management</h2>
                {canEdit && (
                    <button className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300">
                        + Add Fee Entry
                    </button>
                )}
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-500">
                    <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Student Name</th>
                            <th scope="col" className="px-6 py-3">Roll No</th>
                            <th scope="col" className="px-6 py-3">Date</th>
                            <th scope="col" className="px-6 py-3">Amount Paid</th>
                            <th scope="col" className="px-6 py-3">Remaining Due</th>
                            <th scope="col" className="px-6 py-3">Total Fee</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feeRecords.map(record => (
                            <tr key={record.id} className="bg-white border-b hover:bg-slate-50">
                                <td className="px-6 py-4 font-medium text-slate-900">{record.studentName}</td>
                                <td className="px-6 py-4">{record.rollNo}</td>
                                <td className="px-6 py-4">{record.date}</td>
                                <td className="px-6 py-4 text-green-600 font-medium">{formatCurrency(record.amountPaid)}</td>
                                <td className={`px-6 py-4 font-medium ${record.remainingDue > 0 ? 'text-red-600' : 'text-slate-500'}`}>{formatCurrency(record.remainingDue)}</td>
                                <td className="px-6 py-4">{formatCurrency(record.totalFee)}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-2">
                                        <button className="text-blue-600 hover:underline text-xs">Receipt</button>
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

export default FeeManagement;
