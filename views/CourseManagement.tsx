import React, { useState } from 'react';
import type { Course } from '../types';
import { UserRole as Roles } from '../types';
import { SearchIcon } from '../components/icons';
import { Modal, ConfirmDialog, Field, fieldClass } from '../components/Modal';
import { useCrm } from '../data/CrmProvider';

const emptyForm = { name: '', code: '', department: 'Engineering', durationYears: 4 };

const CourseManagement: React.FC = () => {
    const { courses, students, userRole, addCourse, updateCourse, deleteCourse } = useCrm();
    const [searchTerm, setSearchTerm] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [form, setForm] = useState({ ...emptyForm });
    const [deleteTarget, setDeleteTarget] = useState<Course | null>(null);

    const canEdit = [Roles.ADMIN, Roles.MANAGER, Roles.HEAD, Roles.DIRECTOR].includes(userRole);
    const canDelete = [Roles.ADMIN, Roles.DIRECTOR].includes(userRole);

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const openAdd = () => {
        setEditingId(null);
        setForm({ ...emptyForm });
        setModalOpen(true);
    };

    const openEdit = (course: Course) => {
        setEditingId(course.id);
        setForm({ name: course.name, code: course.code, department: course.department, durationYears: course.durationYears });
        setModalOpen(true);
    };

    const handleSave = () => {
        if (!form.name.trim()) return;
        const studentCount = students.filter(s => s.course === form.name).length;
        const payload = { ...form, name: form.name.trim(), code: form.code.trim(), studentCount };
        if (editingId) updateCourse(editingId, payload);
        else addCourse(payload);
        setModalOpen(false);
    };

    const handleDelete = () => {
        if (deleteTarget) deleteCourse(deleteTarget.id);
        setDeleteTarget(null);
    };

    return (
        <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary">Course Management</h2>
                <div className="w-full md:w-auto flex items-center gap-4">
                    <div className="relative w-full md:w-64">
                        <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search courses..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={fieldClass}
                        />
                    </div>
                    {canEdit && (
                        <button onClick={openAdd} className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300 whitespace-nowrap">
                            + Add Course
                        </button>
                    )}
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-light-textSecondary dark:text-dark-textSecondary">
                    <thead className="text-xs uppercase bg-slate-50 dark:bg-dark-surface/50 text-slate-500 dark:text-slate-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Course Name</th>
                            <th scope="col" className="px-6 py-3">Code</th>
                            <th scope="col" className="px-6 py-3">Department</th>
                            <th scope="col" className="px-6 py-3">Duration (Yrs)</th>
                            <th scope="col" className="px-6 py-3">Students</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCourses.map(course => (
                            <tr key={course.id} className="border-b border-light-border dark:border-dark-border hover:bg-slate-50 dark:hover:bg-dark-surface/50">
                                <td className="px-6 py-4 font-medium text-light-textPrimary dark:text-dark-textPrimary">{course.name}</td>
                                <td className="px-6 py-4">{course.code}</td>
                                <td className="px-6 py-4">{course.department}</td>
                                <td className="px-6 py-4">{course.durationYears}</td>
                                <td className="px-6 py-4">{course.studentCount}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3">
                                        <button onClick={() => openEdit(course)} className="text-brand-orange hover:underline text-xs">Edit</button>
                                        {canDelete && (
                                            <button onClick={() => setDeleteTarget(course)} className="text-red-500 hover:underline text-xs">Delete</button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filteredCourses.length === 0 && (
                            <tr><td colSpan={6} className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">No courses found.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title={editingId ? 'Edit Course' : 'Add Course'}
                footer={
                    <>
                        <button onClick={() => setModalOpen(false)} className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition">Cancel</button>
                        <button onClick={handleSave} className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300">Save</button>
                    </>
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Course Name"><input className={fieldClass} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. Computer Science" /></Field>
                    <Field label="Code"><input className={fieldClass} value={form.code} onChange={e => setForm({ ...form, code: e.target.value })} placeholder="e.g. CSE" /></Field>
                    <Field label="Department"><input className={fieldClass} value={form.department} onChange={e => setForm({ ...form, department: e.target.value })} placeholder="e.g. Engineering" /></Field>
                    <Field label="Duration (Years)"><input type="number" min={1} className={fieldClass} value={form.durationYears} onChange={e => setForm({ ...form, durationYears: Number(e.target.value) })} /></Field>
                </div>
            </Modal>

            <ConfirmDialog
                open={!!deleteTarget}
                onClose={() => setDeleteTarget(null)}
                onConfirm={handleDelete}
                title="Delete Course"
                message={`Delete ${deleteTarget?.name ?? 'this course'} permanently? This cannot be undone.`}
            />
        </div>
    );
};

export default CourseManagement;
