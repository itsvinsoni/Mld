
import React from 'react';
import type { Student, Faculty, Notice, Fee, User } from '../types';
import { UserRole } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DashboardHomeProps {
    students: Student[];
    faculty: Faculty[];
    notices: Notice[];
    fees: Fee[];
    user: User;
}

interface MetricCardProps {
    title: string;
    value: string | number;
    change?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change }) => (
    <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-sm font-medium text-brand-secondary">{title}</h3>
        <p className="text-3xl font-bold mt-2">{value}</p>
        {change && <p className="text-xs text-green-600 mt-1">{change}</p>}
    </div>
);

const DashboardHome: React.FC<DashboardHomeProps> = ({ students, faculty, notices, fees, user }) => {
    const totalStudents = students.length;
    const totalFaculty = faculty.length;
    const totalFeesCollected = fees.reduce((acc, fee) => acc + fee.amountPaid, 0);
    const pendingDues = fees.reduce((acc, fee) => acc + fee.remainingDue, 0);

    const visibleNotices = notices.filter(n => n.visibleTo.includes(user.role));

    const feeData = fees.map(fee => {
        const student = students.find(s => s.id === fee.studentId);
        return {
            name: student?.name.split(' ')[0] || 'Unknown',
            Paid: fee.amountPaid,
            Due: fee.remainingDue,
        };
    }).slice(0, 8);

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-slate-800">Welcome, {user.name.split(' ')[0]}!</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard title="Total Students" value={totalStudents} />
                <MetricCard title="Total Faculty" value={totalFaculty} />
                <MetricCard title="Fees Collected" value={`₹${(totalFeesCollected / 1000).toFixed(1)}k`} />
                <MetricCard title="Pending Dues" value={`₹${(pendingDues / 1000).toFixed(1)}k`} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-slate-800">Fee Collection Summary</h3>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <BarChart data={feeData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip
                                    cursor={{fill: 'rgba(0,0,0,0.05)'}}
                                    contentStyle={{
                                        background: 'white',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '0.5rem',
                                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                                    }}
                                    labelStyle={{ color: '#475569', fontWeight: 'bold' }}
                                />
                                <Legend />
                                <Bar dataKey="Paid" fill="#FB923C" />
                                <Bar dataKey="Due" fill="#FCA5A5" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-slate-800">Notice Board</h3>
                    <div className="space-y-4">
                        {visibleNotices.map(notice => (
                            <div key={notice.id} className="border-l-4 border-brand-orange pl-4">
                                <p className="font-semibold text-sm">{notice.title}</p>
                                <p className="text-xs text-brand-secondary">{notice.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
