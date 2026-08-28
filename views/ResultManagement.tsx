import React, { useMemo, useState } from 'react';
import type { Result, SubjectMark } from '../types';
import { UserRole as Roles } from '../types';
import { SearchIcon } from '../components/icons';
import { Modal, ConfirmDialog, Field, fieldClass } from '../components/Modal';
import { useCrm } from '../data/CrmProvider';

type SubjectRow = { subject: string; maxMarks: number; obtained: number };

const emptyForm = { studentId: '', examName: '', year: '', subjects: [{ subject: '', maxMarks: 100, obtained: 0 }] as SubjectRow[] };

function totals(subjects: SubjectMark[]) {
    const totalMax = subjects.reduce((s, m) => s + (Number(m.maxMarks) || 0), 0);
    const obtained = subjects.reduce((s, m) => s + (Number(m.obtained) || 0), 0);
    const percentage = totalMax > 0 ? Math.round((obtained / totalMax) * 100) : 0;
    return { totalMax, obtained, percentage };
}

function gradeOf(percentage: number): string {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C';
    if (percentage >= 40) return 'D';
    return 'F';
}

const gradeColor: Record<string, string> = {
    'A+': 'bg-green-500/20 text-green-600 dark:text-green-300',
    A: 'bg-green-500/20 text-green-600 dark:text-green-300',
    'B+': 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-300',
    B: 'bg-blue-500/20 text-blue-600 dark:text-blue-300',
    C: 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-300',
    D: 'bg-orange-500/20 text-orange-600 dark:text-orange-300',
    F: 'bg-red-500/20 text-red-600 dark:text-red-300',
};

const ResultManagement: React.FC = () => {
    const { results, students, userRole, addResult, updateResult, deleteResult } = useCrm();
    const [searchTerm, setSearchTerm] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [form, setForm] = useState({ ...emptyForm, subjects: [{ subject: '', maxMarks: 100, obtained: 0 }] as SubjectRow[] });
    const [deleteTarget, setDeleteTarget] = useState<Result | null>(null);

    const canEdit = [Roles.ADMIN, Roles.MANAGER, Roles.HEAD, Roles.FACULTY, Roles.DIRECTOR].includes(userRole);
    const canDelete = [Roles.ADMIN, Roles.DIRECTOR].includes(userRole);

    const rows = useMemo(() => {
        return results.map(r => {
            const student = students.find(s => s.id === r.studentId);
            const t = totals(r.subjects);
            return { ...r, studentName: student?.name || 'N/A', rollNo: student?.rollNo || 'N/A', ...t, grade: gradeOf(t.percentage) };
        }).filter(r =>
            r.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            r.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            r.examName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            r.year.toLowerCase().includes(searchTerm.toLowerCase())
        ).sort((a, b) => new Date(`${b.year}-01-01`).getTime() - new Date(`${a.year}-01-01`).getTime());
    }, [results, students, searchTerm]);

    const openAdd = () => {
        setEditingId(null);
        setForm({ ...emptyForm, studentId: students[0]?.id || '', subjects: [{ subject: '', maxMarks: 100, obtained: 0 }] });
        setModalOpen(true);
    };

    const openEdit = (r: Result) => {
        setEditingId(r.id);
        setForm({
            studentId: r.studentId,
            examName: r.examName,
            year: r.year,
            subjects: r.subjects.map(s => ({ ...s })),
        });
        setModalOpen(true);
    };

    const setSubject = (index: number, patch: Partial<SubjectRow>) => {
        setForm(f => {
            const subjects = f.subjects.map((s, i) => (i === index ? { ...s, ...patch } : s));
            return { ...f, subjects };
        });
    };

    const handleSave = () => {
        if (!form.studentId || !form.examName.trim()) return;
        const subjects = form.subjects
            .filter(s => s.subject.trim())
            .map(s => ({ subject: s.subject.trim(), maxMarks: Number(s.maxMarks), obtained: Number(s.obtained) }));
        if (subjects.length === 0) return;
        const payload = { studentId: form.studentId, examName: form.examName.trim(), year: form.year.trim(), subjects };
        if (editingId) updateResult(editingId, payload);
        else addResult(payload);
        setModalOpen(false);
    };

    const handleDelete = () => {
        if (deleteTarget) deleteResult(deleteTarget.id);
        setDeleteTarget(null);
    };

    return (
        <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary">Mark Sheet / Results</h2>
                <div className="w-full md:w-auto flex items-center gap-4">
                    <div className="relative w-full md:w-64">
                        <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search by student, exam, year..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={fieldClass}
                        />
                    </div>
                    {canEdit && (
                        <button onClick={openAdd} className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300 whitespace-nowrap">
                            + Add Result
                        </button>
                    )}
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-light-textSecondary dark:text-dark-textSecondary">
                    <thead className="text-xs uppercase bg-slate-50 dark:bg-dark-surface/50 text-slate-500 dark:text-slate-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Student</th>
                            <th scope="col" className="px-6 py-3">Roll No</th>
                            <th scope="col" className="px-6 py-3">Exam</th>
                            <th scope="col" className="px-6 py-3">Year</th>
                            <th scope="col" className="px-6 py-3">Score</th>
                            <th scope="col" className="px-6 py-3">Grade</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(r => (
                            <tr key={r.id} className="border-b border-light-border dark:border-dark-border hover:bg-slate-50 dark:hover:bg-dark-surface/50">
                                <td className="px-6 py-4 font-medium text-light-textPrimary dark:text-dark-textPrimary">{r.studentName}</td>
                                <td className="px-6 py-4">{r.rollNo}</td>
                                <td className="px-6 py-4">{r.examName}</td>
                                <td className="px-6 py-4">{r.year}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-24 bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                                            <div className={`h-2 rounded-full ${r.percentage >= 60 ? 'bg-green-500' : r.percentage >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${Math.min(100, r.percentage)}%` }}></div>
                                        </div>
                                        <span className="font-medium">{r.percentage}%</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${gradeColor[r.grade] || 'bg-slate-500/20 text-slate-600'}`}>{r.grade}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3">
                                        {canEdit && <button onClick={() => openEdit(r)} className="text-brand-orange hover:underline text-xs">Edit</button>}
                                        {canDelete && <button onClick={() => setDeleteTarget(r)} className="text-red-500 hover:underline text-xs">Delete</button>}
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {rows.length === 0 && (
                            <tr><td colSpan={7} className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">No results found.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title={editingId ? 'Edit Result' : 'Add Result'}
                maxWidth="max-w-2xl"
                footer={
                    <>
                        <button onClick={() => setModalOpen(false)} className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition">Cancel</button>
                        <button onClick={handleSave} className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300">Save</button>
                    </>
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <Field label="Student">
                        <select className={fieldClass} value={form.studentId} onChange={e => setForm({ ...form, studentId: e.target.value })}>
                            {students.map(s => <option key={s.id} value={s.id}>{s.name} ({s.rollNo})</option>)}
                        </select>
                    </Field>
                    <Field label="Exam Name"><input className={fieldClass} value={form.examName} onChange={e => setForm({ ...form, examName: e.target.value })} placeholder="e.g. Term 1" /></Field>
                    <Field label="Year"><input className={fieldClass} value={form.year} onChange={e => setForm({ ...form, year: e.target.value })} placeholder="e.g. 2024" /></Field>
                </div>

                <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary">Subjects & Marks</span>
                    <button
                        onClick={() => setForm(f => ({ ...f, subjects: [...f.subjects, { subject: '', maxMarks: 100, obtained: 0 }] }))}
                        className="text-xs font-medium text-brand-orange hover:underline"
                    >
                        + Add Subject
                    </button>
                </div>
                <div className="space-y-2">
                    {form.subjects.map((s, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <input className={`${fieldClass} flex-1`} placeholder="Subject" value={s.subject} onChange={e => setSubject(i, { subject: e.target.value })} />
                            <input className={`${fieldClass} w-20`} type="number" placeholder="Max" value={s.maxMarks} onChange={e => setSubject(i, { maxMarks: Number(e.target.value) })} />
                            <input className={`${fieldClass} w-20`} type="number" placeholder="Obtained" value={s.obtained} onChange={e => setSubject(i, { obtained: Number(e.target.value) })} />
                            <button
                                onClick={() => setForm(f => ({ ...f, subjects: f.subjects.filter((_, idx) => idx !== i) }))}
                                className="p-2 text-red-500 hover:bg-red-500/10 rounded"
                                aria-label="Remove subject"
                            >
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                            </button>
                        </div>
                    ))}
                </div>
            </Modal>

            <ConfirmDialog
                open={!!deleteTarget}
                onClose={() => setDeleteTarget(null)}
                onConfirm={handleDelete}
                title="Delete Result"
                message={`Delete this result for ${students.find(s => s.id === deleteTarget?.studentId)?.name ?? 'this student'}? This cannot be undone.`}
            />
        </div>
    );
};

export default ResultManagement;
