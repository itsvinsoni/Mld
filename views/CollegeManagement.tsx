import React, { useState } from 'react';
import type { College } from '../types';
import { UserRole as Roles } from '../types';
import { SearchIcon } from '../components/icons';
import { Modal, ConfirmDialog, Field, fieldClass } from '../components/Modal';
import { useCrm } from '../data/CrmProvider';

const emptyForm = { name: '', location: '', principal: '', studentCount: 0, coursesOffered: 0 };

const CollegeManagement: React.FC = () => {
    const { colleges, userRole, addCollege, updateCollege, deleteCollege } = useCrm();
    const [searchTerm, setSearchTerm] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [form, setForm] = useState({ ...emptyForm });
    const [deleteTarget, setDeleteTarget] = useState<College | null>(null);

    const canEdit = [Roles.ADMIN, Roles.MANAGER, Roles.DIRECTOR].includes(userRole);
    const canDelete = [Roles.ADMIN, Roles.DIRECTOR].includes(userRole);

    const filteredColleges = colleges.filter(college =>
        college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const openAdd = () => {
        setEditingId(null);
        setForm({ ...emptyForm });
        setModalOpen(true);
    };

    const openEdit = (college: College) => {
        setEditingId(college.id);
        setForm({ name: college.name, location: college.location, principal: college.principal, studentCount: college.studentCount, coursesOffered: college.coursesOffered });
        setModalOpen(true);
    };

    const handleSave = () => {
        if (!form.name.trim()) return;
        const payload = { ...form, name: form.name.trim(), principal: form.principal.trim() };
        if (editingId) updateCollege(editingId, payload);
        else addCollege(payload);
        setModalOpen(false);
    };

    const handleDelete = () => {
        if (deleteTarget) deleteCollege(deleteTarget.id);
        setDeleteTarget(null);
    };

    return (
        <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary">College Management</h2>
                <div className="w-full md:w-auto flex items-center gap-4">
                    <div className="relative w-full md:w-64">
                        <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search colleges..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={fieldClass}
                        />
                    </div>
                    {canEdit && (
                        <button onClick={openAdd} className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300 whitespace-nowrap">
                            + Add College
                        </button>
                    )}
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-light-textSecondary dark:text-dark-textSecondary">
                    <thead className="text-xs uppercase bg-slate-50 dark:bg-dark-surface/50 text-slate-500 dark:text-slate-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">College Name</th>
                            <th scope="col" className="px-6 py-3">Location</th>
                            <th scope="col" className="px-6 py-3">Principal</th>
                            <th scope="col" className="px-6 py-3">Student Count</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredColleges.map(college => (
                            <tr key={college.id} className="border-b border-light-border dark:border-dark-border hover:bg-slate-50 dark:hover:bg-dark-surface/50">
                                <td className="px-6 py-4 font-medium text-light-textPrimary dark:text-dark-textPrimary">{college.name}</td>
                                <td className="px-6 py-4">{college.location}</td>
                                <td className="px-6 py-4">{college.principal}</td>
                                <td className="px-6 py-4">{college.studentCount}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3">
                                        <button onClick={() => openEdit(college)} className="text-brand-orange hover:underline text-xs">Edit</button>
                                        {canDelete && (
                                            <button onClick={() => setDeleteTarget(college)} className="text-red-500 hover:underline text-xs">Delete</button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filteredColleges.length === 0 && (
                            <tr><td colSpan={5} className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">No colleges found.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title={editingId ? 'Edit College' : 'Add College'}
                footer={
                    <>
                        <button onClick={() => setModalOpen(false)} className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition">Cancel</button>
                        <button onClick={handleSave} className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300">Save</button>
                    </>
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="College Name"><input className={fieldClass} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. MLD Institute of Technology" /></Field>
                    <Field label="Location"><input className={fieldClass} value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} placeholder="e.g. Kekri, Ajmer" /></Field>
                    <Field label="Principal"><input className={fieldClass} value={form.principal} onChange={e => setForm({ ...form, principal: e.target.value })} placeholder="e.g. Dr. R. K. Verma" /></Field>
                    <Field label="Student Count"><input type="number" min={0} className={fieldClass} value={form.studentCount} onChange={e => setForm({ ...form, studentCount: Number(e.target.value) })} /></Field>
                    <Field label="Courses Offered"><input type="number" min={0} className={fieldClass} value={form.coursesOffered} onChange={e => setForm({ ...form, coursesOffered: Number(e.target.value) })} /></Field>
                </div>
            </Modal>

            <ConfirmDialog
                open={!!deleteTarget}
                onClose={() => setDeleteTarget(null)}
                onConfirm={handleDelete}
                title="Delete College"
                message={`Delete ${deleteTarget?.name ?? 'this college'} permanently? This cannot be undone.`}
            />
        </div>
    );
};

export default CollegeManagement;
