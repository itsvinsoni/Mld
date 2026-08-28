import React, { useState } from 'react';
import type { Student } from '../types';
import { UserRole as Roles } from '../types';
import { SearchIcon } from '../components/icons';
import { Modal, ConfirmDialog, Field, fieldClass } from '../components/Modal';
import { useCrm } from '../data/CrmProvider';

const emptyForm = {
    name: '',
    rollNo: '',
    course: 'Computer Science',
    batch: '2024',
    admissionDate: '',
    feeStatus: 'Pending' as Student['feeStatus'],
    attendancePercentage: 90,
    contact: '',
};

const StudentManagement: React.FC = () => {
    const { students, courses, userRole, addStudent, updateStudent, deleteStudent } = useCrm();
    const [searchTerm, setSearchTerm] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [form, setForm] = useState({ ...emptyForm });
    const [deleteTarget, setDeleteTarget] = useState<Student | null>(null);

    const canEdit = [Roles.ADMIN, Roles.MANAGER, Roles.HEAD].includes(userRole);
    const canDelete = [Roles.ADMIN, Roles.MANAGER].includes(userRole);

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.course.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusChipClass = (status: 'Paid' | 'Pending' | 'Partial') => {
        switch (status) {
            case 'Paid': return 'bg-green-500/20 text-green-600 dark:text-green-300';
            case 'Pending': return 'bg-red-500/20 text-red-600 dark:text-red-300';
            case 'Partial': return 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-300';
        }
    };

    const openAdd = () => {
        setEditingId(null);
        setForm({ ...emptyForm, course: courses[0]?.name || 'Computer Science' });
        setModalOpen(true);
    };

    const openEdit = (student: Student) => {
        setEditingId(student.id);
        setForm({
            name: student.name,
            rollNo: student.rollNo,
            course: student.course,
            batch: student.batch,
            admissionDate: student.admissionDate,
            feeStatus: student.feeStatus,
            attendancePercentage: student.attendancePercentage,
            contact: student.contact,
        });
        setModalOpen(true);
    };

    const handleSave = () => {
        if (!form.name.trim() || !form.rollNo.trim()) return;
        const payload = { ...form, name: form.name.trim(), rollNo: form.rollNo.trim(), booksIssued: [] };
        if (editingId) {
            updateStudent(editingId, payload);
        } else {
            addStudent(payload);
        }
        setModalOpen(false);
    };

    const handleDelete = () => {
        if (deleteTarget) deleteStudent(deleteTarget.id);
        setDeleteTarget(null);
    };

    return (
        <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary">Student Management</h2>
                <div className="w-full md:w-auto flex items-center gap-4">
                    <div className="relative w-full md:w-64">
                        <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search students..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={fieldClass}
                        />
                    </div>
                    {canEdit && (
                        <button onClick={openAdd} className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300 whitespace-nowrap">
                            + Add Student
                        </button>
                    )}
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-light-textSecondary dark:text-dark-textSecondary">
                    <thead className="text-xs uppercase bg-slate-50 dark:bg-dark-surface/50 text-slate-500 dark:text-slate-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Roll No</th>
                            <th scope="col" className="px-6 py-3">Course</th>
                            <th scope="col" className="px-6 py-3">Fee Status</th>
                            <th scope="col" className="px-6 py-3">Attendance</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map(student => (
                            <tr key={student.id} className="border-b border-light-border dark:border-dark-border hover:bg-slate-50 dark:hover:bg-dark-surface/50">
                                <td className="px-6 py-4 font-medium text-light-textPrimary dark:text-dark-textPrimary">
                                    <div className="flex items-center gap-3">
                                        <img className="w-8 h-8 rounded-full object-cover" src={`https://picsum.photos/seed/${student.name.split(' ')[0]}/40/40`} alt={student.name} />
                                        <span>{student.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">{student.rollNo}</td>
                                <td className="px-6 py-4">{student.course}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusChipClass(student.feeStatus)}`}>
                                        {student.feeStatus}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{student.attendancePercentage}%</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3">
                                        <button onClick={() => openEdit(student)} className="text-brand-orange hover:underline text-xs">Edit</button>
                                        {canDelete && (
                                            <button onClick={() => setDeleteTarget(student)} className="text-red-500 hover:underline text-xs">Delete</button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filteredStudents.length === 0 && (
                            <tr><td colSpan={6} className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">No students found.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title={editingId ? 'Edit Student' : 'Add Student'}
                footer={
                    <>
                        <button onClick={() => setModalOpen(false)} className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition">Cancel</button>
                        <button onClick={handleSave} className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300">Save</button>
                    </>
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Full Name"><input className={fieldClass} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. Priya Sharma" /></Field>
                    <Field label="Roll No"><input className={fieldClass} value={form.rollNo} onChange={e => setForm({ ...form, rollNo: e.target.value })} placeholder="e.g. CS101" /></Field>
                    <Field label="Course">
                        <select className={fieldClass} value={form.course} onChange={e => setForm({ ...form, course: e.target.value })}>
                            {courses.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                        </select>
                    </Field>
                    <Field label="Batch"><input className={fieldClass} value={form.batch} onChange={e => setForm({ ...form, batch: e.target.value })} /></Field>
                    <Field label="Admission Date"><input type="date" className={fieldClass} value={form.admissionDate} onChange={e => setForm({ ...form, admissionDate: e.target.value })} /></Field>
                    <Field label="Fee Status">
                        <select className={fieldClass} value={form.feeStatus} onChange={e => setForm({ ...form, feeStatus: e.target.value as Student['feeStatus'] })}>
                            <option value="Paid">Paid</option>
                            <option value="Pending">Pending</option>
                            <option value="Partial">Partial</option>
                        </select>
                    </Field>
                    <Field label="Attendance %"><input type="number" min={0} max={100} className={fieldClass} value={form.attendancePercentage} onChange={e => setForm({ ...form, attendancePercentage: Number(e.target.value) })} /></Field>
                    <Field label="Contact"><input className={fieldClass} value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} placeholder="e.g. 555-0101" /></Field>
                </div>
            </Modal>

            <ConfirmDialog
                open={!!deleteTarget}
                onClose={() => setDeleteTarget(null)}
                onConfirm={handleDelete}
                title="Delete Student"
                message={`Delete ${deleteTarget?.name ?? 'this student'} permanently? This cannot be undone.`}
            />
        </div>
    );
};

export default StudentManagement;
