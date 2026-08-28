import React, { useState } from 'react';
import type { Faculty } from '../types';
import { UserRole as Roles } from '../types';
import { SearchIcon } from '../components/icons';
import { Modal, ConfirmDialog, Field, fieldClass } from '../components/Modal';
import { useCrm } from '../data/CrmProvider';

const emptyForm = { name: '', course: 'BCA (Computer Applications)', contact: '', syllabusProgress: 80 };

const FacultyManagement: React.FC = () => {
    const { faculty, courses, userRole, addFaculty, updateFaculty, deleteFaculty } = useCrm();
    const [searchTerm, setSearchTerm] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [form, setForm] = useState({ ...emptyForm });
    const [deleteTarget, setDeleteTarget] = useState<Faculty | null>(null);

    const canEdit = [Roles.ADMIN, Roles.MANAGER, Roles.HEAD, Roles.DIRECTOR].includes(userRole);
    const canDelete = [Roles.ADMIN, Roles.DIRECTOR].includes(userRole);

    const filteredFaculty = faculty.filter(f =>
        f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.course.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getProgressBarColor = (progress: number) => {
        if (progress > 80) return 'bg-green-500';
        if (progress > 50) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    const openAdd = () => {
        setEditingId(null);
        setForm({ ...emptyForm, course: courses[0]?.name || 'BCA (Computer Applications)' });
        setModalOpen(true);
    };

    const openEdit = (member: Faculty) => {
        setEditingId(member.id);
        setForm({ name: member.name, course: member.course, contact: member.contact, syllabusProgress: member.syllabusProgress });
        setModalOpen(true);
    };

    const handleSave = () => {
        if (!form.name.trim()) return;
        const payload = { ...form, name: form.name.trim(), syllabusProgress: Math.min(100, Math.max(0, form.syllabusProgress)) };
        if (editingId) updateFaculty(editingId, payload);
        else addFaculty(payload);
        setModalOpen(false);
    };

    const handleDelete = () => {
        if (deleteTarget) deleteFaculty(deleteTarget.id);
        setDeleteTarget(null);
    };

    return (
        <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary">Faculty Management</h2>
                <div className="w-full md:w-auto flex items-center gap-4">
                    <div className="relative w-full md:w-64">
                        <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search faculty..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={fieldClass}
                        />
                    </div>
                    {canEdit && (
                        <button onClick={openAdd} className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300 whitespace-nowrap">
                            + Add Faculty
                        </button>
                    )}
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-light-textSecondary dark:text-dark-textSecondary">
                    <thead className="text-xs uppercase bg-slate-50 dark:bg-dark-surface/50 text-slate-500 dark:text-slate-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Department</th>
                            <th scope="col" className="px-6 py-3">Contact</th>
                            <th scope="col" className="px-6 py-3">Syllabus Progress</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredFaculty.map(member => (
                            <tr key={member.id} className="border-b border-light-border dark:border-dark-border hover:bg-slate-50 dark:hover:bg-dark-surface/50">
                                <td className="px-6 py-4 font-medium text-light-textPrimary dark:text-dark-textPrimary">{member.name}</td>
                                <td className="px-6 py-4">{member.course}</td>
                                <td className="px-6 py-4">{member.contact}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2.5 mr-2">
                                            <div className={`${getProgressBarColor(member.syllabusProgress)} h-2.5 rounded-full`} style={{ width: `${member.syllabusProgress}%` }}></div>
                                        </div>
                                        <span>{member.syllabusProgress}%</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3">
                                        <button onClick={() => openEdit(member)} className="text-brand-orange hover:underline text-xs">Edit</button>
                                        {canDelete && (
                                            <button onClick={() => setDeleteTarget(member)} className="text-red-500 hover:underline text-xs">Delete</button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filteredFaculty.length === 0 && (
                            <tr><td colSpan={5} className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">No faculty found.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title={editingId ? 'Edit Faculty' : 'Add Faculty'}
                footer={
                    <>
                        <button onClick={() => setModalOpen(false)} className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition">Cancel</button>
                        <button onClick={handleSave} className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300">Save</button>
                    </>
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Full Name"><input className={fieldClass} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. Dr. Alok Nath" /></Field>
                    <Field label="Department">
                        <select className={fieldClass} value={form.course} onChange={e => setForm({ ...form, course: e.target.value })}>
                            {courses.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                        </select>
                    </Field>
                    <Field label="Contact"><input className={fieldClass} value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} placeholder="e.g. 555-0201" /></Field>
                    <Field label="Syllabus Progress (%)"><input type="number" min={0} max={100} className={fieldClass} value={form.syllabusProgress} onChange={e => setForm({ ...form, syllabusProgress: Number(e.target.value) })} /></Field>
                </div>
            </Modal>

            <ConfirmDialog
                open={!!deleteTarget}
                onClose={() => setDeleteTarget(null)}
                onConfirm={handleDelete}
                title="Delete Faculty"
                message={`Delete ${deleteTarget?.name ?? 'this faculty member'} permanently? This cannot be undone.`}
            />
        </div>
    );
};

export default FacultyManagement;
