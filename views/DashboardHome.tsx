
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
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
        <h3 className="text-sm font-medium text-brand-secondary">{title}</h3>
        <p className="text-3xl font-bold text-slate-100 mt-2">{value}</p>
        {change && <p className="text-xs text-green-400 mt-1">{change}</p>}
    </div>
);

const DashboardHome: React.FC<DashboardHomeProps> = ({ students, faculty, notices, fees, user }) => {
    const totalStudents = students.length;
    const totalFaculty = faculty.length;
    const totalFeesCollected = fees.reduce((acc, fee) => acc + fee.amountPaid, 0);
    const pendingDues = fees.reduce((acc, fee) => acc + fee.remainingDue, 0);

    const visibleNotices = notices.filter(n => n.visibleTo.includes(user.role));

    const formatCurrencyShort = (amount: number) => {
        if (amount >= 100000) {
            return `₹${(amount / 100000).toFixed(1)}L`;
        }
        if (amount >= 1000) {
            return `₹${(amount / 1000).toFixed(0)}k`;
        }
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
    };

    const feeData = fees.map(fee => {
        const student = students.find(s => s.id === fee.studentId);
        return {
            name: student?.name.split(' ')[0] || 'Unknown',
            Paid: fee.amountPaid,
            Due: fee.remainingDue,
        };
    }).slice(0, 15);

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-slate-100">Welcome, {user.name.split(' ')[0]}!</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard title="Total Students" value={totalStudents} />
                <MetricCard title="Total Faculty" value={totalFaculty} />
                <MetricCard title="Fees Collected" value={formatCurrencyShort(totalFeesCollected)} />
                <MetricCard title="Pending Dues" value={formatCurrencyShort(pendingDues)} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-slate-800 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg font-semibold mb-4 text-slate-200">Fee Collection Summary</h3>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <BarChart data={feeData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                                <XAxis dataKey="name" tick={{ fill: '#94a3b8' }} />
                                <YAxis tick={{ fill: '#94a3b8' }} />
                                <Tooltip
                                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                                    contentStyle={{
                                        background: '#1f2937',
                                        border: '1px solid #334155',
                                        borderRadius: '0.5rem',
                                        color: '#cbd5e1'
                                    }}
                                    labelStyle={{ color: '#f1f5f9', fontWeight: 'bold' }}
                                />
                                <Legend wrapperStyle={{ color: '#d1d5db' }} />
                                <Bar dataKey="Paid" fill="#FB923C" />
                                <Bar dataKey="Due" fill="#F87171" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg font-semibold mb-4 text-slate-200">Notice Board</h3>
                    <div className="space-y-4">
                        {visibleNotices.slice(0, 5).map(notice => (
                            <div key={notice.id} className="border-l-4 border-brand-orange pl-4">
                                <p className="font-semibold text-sm text-slate-200">{notice.title}</p>
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