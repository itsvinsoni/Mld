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
    <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-lg">
        <h3 className="text-sm font-medium text-brand-secondary">{title}</h3>
        <p className="text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary mt-2">{value}</p>
        {change && <p className="text-xs text-green-500 dark:text-green-400 mt-1">{change}</p>}
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

    const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const tickColor = theme === 'dark' ? '#94a3b8' : '#64748B';
    const gridColor = theme === 'dark' ? '#475569' : '#E2E8F0';

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary">Welcome, {user.name.split(' ')[0]}!</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard title="Total Students" value={totalStudents} />
                <MetricCard title="Total Faculty" value={totalFaculty} />
                <MetricCard title="Fees Collected" value={formatCurrencyShort(totalFeesCollected)} />
                <MetricCard title="Pending Dues" value={formatCurrencyShort(pendingDues)} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg font-semibold mb-4 text-light-textPrimary dark:text-dark-textPrimary">Fee Collection Summary</h3>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <BarChart data={feeData}>
                                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                                <XAxis dataKey="name" tick={{ fill: tickColor }} />
                                <YAxis tick={{ fill: tickColor }} />
                                <Tooltip
                                    cursor={{fill: 'rgba(125,125,125,0.1)'}}
                                    contentStyle={{
                                        background: theme === 'dark' ? '#1f2937' : '#ffffff',
                                        border: `1px solid ${gridColor}`,
                                        borderRadius: '0.5rem',
                                    }}
                                />
                                <Legend />
                                <Bar dataKey="Paid" fill="#F97316" />
                                <Bar dataKey="Due" fill="#F43F5E" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg font-semibold mb-4 text-light-textPrimary dark:text-dark-textPrimary">Notice Board</h3>
                    <div className="space-y-4">
                        {visibleNotices.slice(0, 5).map(notice => (
                            <div key={notice.id} className="border-l-4 border-brand-orange pl-4">
                                <p className="font-semibold text-sm text-light-textPrimary dark:text-dark-textPrimary">{notice.title}</p>
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