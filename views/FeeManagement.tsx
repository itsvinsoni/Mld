import React, { useState } from 'react';
import type { Fee } from '../types';
import { UserRole as Roles } from '../types';
import { Modal, ConfirmDialog, Field, fieldClass } from '../components/Modal';
import { useCrm } from '../data/CrmProvider';

const emptyForm = { studentId: '', amountPaid: 0, totalFee: 0, paymentType: 'Cash' as Fee['paymentType'], date: '' };

const FeeManagement: React.FC = () => {
    const { fees, students, userRole, addFee, updateFee, deleteFee } = useCrm();
    const [modalOpen, setModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [form, setForm] = useState({ ...emptyForm });
    const [deleteTarget, setDeleteTarget] = useState<Fee | null>(null);

    const canEdit = [Roles.ADMIN, Roles.MANAGER, Roles.HEAD].includes(userRole);
    const canDelete = [Roles.ADMIN, Roles.MANAGER].includes(userRole);

    const feeRecords = fees.map(fee => {
        const student = students.find(s => s.id === fee.studentId);
        return {
            ...fee,
            studentName: student?.name || 'N/A',
            rollNo: student?.rollNo || 'N/A',
        };
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const formatCurrency = (amount: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);

    const openAdd = () => {
        setEditingId(null);
        setForm({ ...emptyForm, studentId: students[0]?.id || '', date: new Date().toISOString().slice(0, 10) });
        setModalOpen(true);
    };

    const openEdit = (record: Fee) => {
        setEditingId(record.id);
        setForm({ studentId: record.studentId, amountPaid: record.amountPaid, totalFee: record.totalFee, paymentType: record.paymentType, date: record.date });
        setModalOpen(true);
    };

    const handleSave = () => {
        if (!form.studentId) return;
        const remainingDue = Math.max(0, form.totalFee - form.amountPaid);
        const payload = { ...form, remainingDue };
        if (editingId) updateFee(editingId, payload);
        else addFee(payload);
        setModalOpen(false);
    };

    const handleDelete = () => {
        if (deleteTarget) deleteFee(deleteTarget.id);
        setDeleteTarget(null);
    };

    return (
        <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-lg">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary">Fee Management</h2>
                {canEdit && (
                    <button onClick={openAdd} className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300">
                        + Add Fee Entry
                    </button>
                )}
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-light-textSecondary dark:text-dark-textSecondary">
                    <thead className="text-xs uppercase bg-slate-50 dark:bg-dark-surface/50 text-slate-500 dark:text-slate-400">
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
                            <tr key={record.id} className="border-b border-light-border dark:border-dark-border hover:bg-slate-50 dark:hover:bg-dark-surface/50">
                                <td className="px-6 py-4 font-medium text-light-textPrimary dark:text-dark-textPrimary">{record.studentName}</td>
                                <td className="px-6 py-4">{record.rollNo}</td>
                                <td className="px-6 py-4">{record.date}</td>
                                <td className="px-6 py-4 text-green-600 dark:text-green-400 font-medium">{formatCurrency(record.amountPaid)}</td>
                                <td className={`px-6 py-4 font-medium ${record.remainingDue > 0 ? 'text-red-500 dark:text-red-400' : 'text-slate-500 dark:text-slate-400'}`}>{formatCurrency(record.remainingDue)}</td>
                                <td className="px-6 py-4">{formatCurrency(record.totalFee)}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3">
                                        <button onClick={() => openEdit(record)} className="text-brand-orange hover:underline text-xs">Edit</button>
                                        {canDelete && (
                                            <button onClick={() => setDeleteTarget(record)} className="text-red-500 hover:underline text-xs">Delete</button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {feeRecords.length === 0 && (
                            <tr><td colSpan={7} className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">No fee records found.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title={editingId ? 'Edit Fee Entry' : 'Add Fee Entry'}
                footer={
                    <>
                        <button onClick={() => setModalOpen(false)} className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition">Cancel</button>
                        <button onClick={handleSave} className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300">Save</button>
                    </>
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Student">
                        <select className={fieldClass} value={form.studentId} onChange={e => setForm({ ...form, studentId: e.target.value })}>
                            {students.map(s => <option key={s.id} value={s.id}>{s.name} ({s.rollNo})</option>)}
                        </select>
                    </Field>
                    <Field label="Date"><input type="date" className={fieldClass} value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} /></Field>
                    <Field label="Total Fee (₹)"><input type="number" min={0} className={fieldClass} value={form.totalFee} onChange={e => setForm({ ...form, totalFee: Number(e.target.value) })} /></Field>
                    <Field label="Amount Paid (₹)"><input type="number" min={0} className={fieldClass} value={form.amountPaid} onChange={e => setForm({ ...form, amountPaid: Number(e.target.value) })} /></Field>
                    <Field label="Payment Type">
                        <select className={fieldClass} value={form.paymentType} onChange={e => setForm({ ...form, paymentType: e.target.value as Fee['paymentType'] })}>
                            <option value="Cash">Cash</option>
                            <option value="DD">DD</option>
                        </select>
                    </Field>
                    <Field label="Remaining Due (auto)"><input className={fieldClass} readOnly disabled value={formatCurrency(Math.max(0, form.totalFee - form.amountPaid))} /></Field>
                </div>
            </Modal>

            <ConfirmDialog
                open={!!deleteTarget}
                onClose={() => setDeleteTarget(null)}
                onConfirm={handleDelete}
                title="Delete Fee Entry"
                message={`Delete the fee entry for ${students.find(s => s.id === deleteTarget?.studentId)?.name ?? 'this student'}? This cannot be undone.`}
            />
        </div>
    );
};

export default FeeManagement;
