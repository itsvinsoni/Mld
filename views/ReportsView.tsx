import React, { useMemo } from 'react';
import type { Student, Fee, Faculty, Course } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

interface ReportsViewProps {
    students: Student[];
    fees: Fee[];
    faculty: Faculty[];
    courses: Course[];
}

const ChartCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-light-textPrimary dark:text-dark-textPrimary">{title}</h3>
        <div style={{ width: '100%', height: 300 }}>
            {children}
        </div>
    </div>
);

const ReportsView: React.FC<ReportsViewProps> = ({ students, fees, faculty, courses }) => {
    const studentCourseData = useMemo(() => {
        const courseCounts: { [key: string]: number } = {};
        students.forEach(student => {
            courseCounts[student.course] = (courseCounts[student.course] || 0) + 1;
        });
        return Object.entries(courseCounts).map(([name, value]) => ({ name, value }));
    }, [students]);

    const feeStatusData = useMemo(() => {
        const statusCounts = { Paid: 0, Pending: 0, Partial: 0 };
        students.forEach(student => {
            statusCounts[student.feeStatus]++;
        });
        return Object.entries(statusCounts).map(([name, value]) => ({ name, value }));
    }, [students]);

    const admissionTrendData = useMemo(() => {
        const trend: { [key: string]: number } = {};
        students.forEach(student => {
            const year = new Date(student.admissionDate).getFullYear().toString();
            trend[year] = (trend[year] || 0) + 1;
        });
        return Object.entries(trend).map(([year, count]) => ({ year, count })).sort((a,b) => parseInt(a.year) - parseInt(b.year));
    }, [students]);
    
    const facultyProgressData = faculty.map(f => ({
        name: f.name.split(' ').slice(0, 2).join(' '),
        progress: f.syllabusProgress,
    }));

    const COLORS = ['#F97316', '#F43F5E', '#FBBF24', '#10B981', '#3B82F6'];
    const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const tickColor = theme === 'dark' ? '#94a3b8' : '#64748B';
    const gridColor = theme === 'dark' ? '#334155' : '#E2E8F0';
    const tooltipStyle = {
        background: theme === 'dark' ? '#1f2937' : '#ffffff',
        border: `1px solid ${gridColor}`,
        borderRadius: '0.5rem',
    };

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary">Reports & Analytics</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ChartCard title="Student Distribution by Course">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie data={studentCourseData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                                {studentCourseData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={tooltipStyle} />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Fee Status Overview">
                    <ResponsiveContainer>
                        <BarChart data={feeStatusData}>
                           <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                            <XAxis dataKey="name" tick={{ fill: tickColor }} />
                            <YAxis tick={{ fill: tickColor }} />
                            <Tooltip contentStyle={tooltipStyle} />
                            <Bar dataKey="value" fill="#F97316" name="Number of Students" />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Admissions Over Time">
                    <ResponsiveContainer>
                        <LineChart data={admissionTrendData}>
                            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                            <XAxis dataKey="year" tick={{ fill: tickColor }} />
                            <YAxis tick={{ fill: tickColor }} />
                            <Tooltip contentStyle={tooltipStyle} />
                            <Legend />
                            <Line type="monotone" dataKey="count" stroke="#F97316" strokeWidth={2} name="Admissions" />
                        </LineChart>
                    </ResponsiveContainer>
                </ChartCard>
                
                <ChartCard title="Faculty Syllabus Progress">
                    <ResponsiveContainer>
                        <BarChart data={facultyProgressData} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                            <XAxis type="number" tick={{ fill: tickColor }} />
                            <YAxis type="category" dataKey="name" width={100} tick={{ fill: tickColor }} style={{ fontSize: '0.75rem' }} />
                            <Tooltip contentStyle={tooltipStyle} />
                            <Legend />
                            <Bar dataKey="progress" fill="#3B82F6" name="Progress (%)" />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>
            </div>
        </div>
    );
};

export default ReportsView;