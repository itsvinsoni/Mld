import React, { useMemo, useState } from 'react';
import type { Book } from '../types';
import { UserRole as Roles } from '../types';
import { Modal, ConfirmDialog, Field, fieldClass } from '../components/Modal';
import { useCrm } from '../data/CrmProvider';

const emptyForm = { title: '', author: '', isbn: '', totalCopies: 1, availableCopies: 1 };

const LibraryManagement: React.FC = () => {
    const { books, students, userRole, addBook, updateBook, deleteBook, issueBook, returnBook } = useCrm();
    const [activeTab, setActiveTab] = useState<'catalog' | 'issued'>('catalog');
    const [searchTerm, setSearchTerm] = useState('');

    const [bookModalOpen, setBookModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [form, setForm] = useState({ ...emptyForm });

    const [issueTarget, setIssueTarget] = useState<Book | null>(null);
    const [issueStudentId, setIssueStudentId] = useState('');
    const [deleteTarget, setDeleteTarget] = useState<Book | null>(null);
    const [returnTarget, setReturnTarget] = useState<{ studentId: string; bookId: string; bookName: string; studentName: string } | null>(null);

    const canManage = [Roles.ADMIN, Roles.HEAD, Roles.FACULTY].includes(userRole);
    const canDelete = [Roles.ADMIN].includes(userRole);

    const issuedBooks = useMemo(() => {
        return students.flatMap(student =>
            student.booksIssued.map(issue => ({
                ...issue,
                studentName: student.name,
                rollNo: student.rollNo,
            }))
        );
    }, [students]);

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.isbn.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredIssuedBooks = issuedBooks.filter(issue =>
        issue.bookName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        issue.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        issue.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const openAddBook = () => {
        setEditingId(null);
        setForm({ ...emptyForm });
        setBookModalOpen(true);
    };

    const openEditBook = (book: Book) => {
        setEditingId(book.id);
        setForm({ title: book.title, author: book.author, isbn: book.isbn, totalCopies: book.totalCopies, availableCopies: book.availableCopies });
        setBookModalOpen(true);
    };

    const handleSaveBook = () => {
        if (!form.title.trim()) return;
        const payload = { ...form, title: form.title.trim(), author: form.author.trim(), totalCopies: Math.max(1, form.totalCopies) };
        if (editingId) updateBook(editingId, payload);
        else addBook({ ...payload, availableCopies: Math.min(payload.totalCopies, payload.availableCopies) });
        setBookModalOpen(false);
    };

    const openIssue = (book: Book) => {
        setIssueTarget(book);
        setIssueStudentId(students[0]?.id || '');
    };

    const handleIssue = () => {
        if (issueTarget && issueStudentId) issueBook(issueStudentId, issueTarget);
        setIssueTarget(null);
    };

    const handleReturn = () => {
        if (returnTarget) returnBook(returnTarget.studentId, returnTarget.bookId);
        setReturnTarget(null);
    };

    const handleDelete = () => {
        if (deleteTarget) deleteBook(deleteTarget.id);
        setDeleteTarget(null);
    };

    return (
        <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-lg space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <h2 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary">Library Management</h2>
                {canManage && (
                    <button onClick={openAddBook} className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300 whitespace-nowrap">
                        + Add New Book
                    </button>
                )}
            </div>

            <div className="flex border-b border-light-border dark:border-dark-border">
                <button onClick={() => setActiveTab('catalog')} className={`py-2 px-4 text-sm font-medium ${activeTab === 'catalog' ? 'border-b-2 border-brand-orange text-brand-orange' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50'}`}>
                    Book Catalog
                </button>
                <button onClick={() => setActiveTab('issued')} className={`py-2 px-4 text-sm font-medium ${activeTab === 'issued' ? 'border-b-2 border-brand-orange text-brand-orange' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50'}`}>
                    Issued Books
                </button>
            </div>

            <input type="text" placeholder="Search library..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className={`${fieldClass} mb-4`} />

            {activeTab === 'catalog' && (
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-light-textSecondary dark:text-dark-textSecondary">
                        <thead className="text-xs uppercase bg-slate-50 dark:bg-dark-surface/50 text-slate-500 dark:text-slate-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Title</th>
                                <th scope="col" className="px-6 py-3">Author</th>
                                <th scope="col" className="px-6 py-3">ISBN</th>
                                <th scope="col" className="px-6 py-3">Available / Total</th>
                                <th scope="col" className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBooks.map(book => (
                                <tr key={book.id} className="border-b border-light-border dark:border-dark-border hover:bg-slate-50 dark:hover:bg-dark-surface/50">
                                    <td className="px-6 py-4 font-medium text-light-textPrimary dark:text-dark-textPrimary">{book.title}</td>
                                    <td className="px-6 py-4">{book.author}</td>
                                    <td className="px-6 py-4">{book.isbn}</td>
                                    <td className="px-6 py-4">{book.availableCopies} / {book.totalCopies}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-3">
                                            {canManage && book.availableCopies > 0 && (
                                                <button onClick={() => openIssue(book)} className="text-emerald-600 hover:underline text-xs">Issue</button>
                                            )}
                                            {canManage && <button onClick={() => openEditBook(book)} className="text-brand-orange hover:underline text-xs">Edit</button>}
                                            {canDelete && <button onClick={() => setDeleteTarget(book)} className="text-red-500 hover:underline text-xs">Delete</button>}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredBooks.length === 0 && (
                                <tr><td colSpan={5} className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">No books in the catalog.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'issued' && (
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-light-textSecondary dark:text-dark-textSecondary">
                        <thead className="text-xs uppercase bg-slate-50 dark:bg-dark-surface/50 text-slate-500 dark:text-slate-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Book Title</th>
                                <th scope="col" className="px-6 py-3">Student Name</th>
                                <th scope="col" className="px-6 py-3">Roll No</th>
                                <th scope="col" className="px-6 py-3">Issue Date</th>
                                <th scope="col" className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredIssuedBooks.map(issue => (
                                <tr key={`${issue.studentId}-${issue.bookId}`} className="border-b border-light-border dark:border-dark-border hover:bg-slate-50 dark:hover:bg-dark-surface/50">
                                    <td className="px-6 py-4 font-medium text-light-textPrimary dark:text-dark-textPrimary">{issue.bookName}</td>
                                    <td className="px-6 py-4">{issue.studentName}</td>
                                    <td className="px-6 py-4">{issue.rollNo}</td>
                                    <td className="px-6 py-4">{issue.issueDate}</td>
                                    <td className="px-6 py-4">
                                        {canManage && (
                                            <button
                                                onClick={() => setReturnTarget({ studentId: issue.studentId, bookId: issue.bookId, bookName: issue.bookName, studentName: issue.studentName })}
                                                className="text-brand-orange hover:underline text-xs"
                                            >
                                                Return
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            {filteredIssuedBooks.length === 0 && (
                                <tr><td colSpan={5} className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">No books currently issued.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Add/Edit Book */}
            <Modal
                open={bookModalOpen}
                onClose={() => setBookModalOpen(false)}
                title={editingId ? 'Edit Book' : 'Add New Book'}
                footer={
                    <>
                        <button onClick={() => setBookModalOpen(false)} className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition">Cancel</button>
                        <button onClick={handleSaveBook} className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300">Save</button>
                    </>
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Title"><input className={fieldClass} value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="e.g. Intro to Algorithms" /></Field>
                    <Field label="Author"><input className={fieldClass} value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} placeholder="e.g. Thomas H. Cormen" /></Field>
                    <Field label="ISBN"><input className={fieldClass} value={form.isbn} onChange={e => setForm({ ...form, isbn: e.target.value })} placeholder="e.g. 978-0262033848" /></Field>
                    <Field label="Total Copies"><input type="number" min={1} className={fieldClass} value={form.totalCopies} onChange={e => setForm({ ...form, totalCopies: Number(e.target.value) })} /></Field>
                    {editingId && (
                        <Field label="Available Copies"><input type="number" min={0} className={fieldClass} value={form.availableCopies} onChange={e => setForm({ ...form, availableCopies: Number(e.target.value) })} /></Field>
                    )}
                </div>
            </Modal>

            {/* Issue Book */}
            <Modal
                open={!!issueTarget}
                onClose={() => setIssueTarget(null)}
                title={`Issue: ${issueTarget?.title ?? ''}`}
                maxWidth="max-w-md"
                footer={
                    <>
                        <button onClick={() => setIssueTarget(null)} className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition">Cancel</button>
                        <button onClick={handleIssue} className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300">Issue Book</button>
                    </>
                }
            >
                <Field label="Student">
                    <select className={fieldClass} value={issueStudentId} onChange={e => setIssueStudentId(e.target.value)}>
                        {students.map(s => <option key={s.id} value={s.id}>{s.name} ({s.rollNo})</option>)}
                    </select>
                </Field>
            </Modal>

            {/* Confirm delete book */}
            <ConfirmDialog
                open={!!deleteTarget}
                onClose={() => setDeleteTarget(null)}
                onConfirm={handleDelete}
                title="Delete Book"
                message={`Delete "${deleteTarget?.title ?? 'this book'}" from the catalog? This cannot be undone.`}
            />

            {/* Confirm return */}
            <ConfirmDialog
                open={!!returnTarget}
                onClose={() => setReturnTarget(null)}
                onConfirm={handleReturn}
                title="Return Book"
                confirmLabel="Return"
                danger={false}
                message={`Return "${returnTarget?.bookName ?? 'this book'}" from ${returnTarget?.studentName ?? 'this student'}?`}
            />
        </div>
    );
};

export default LibraryManagement;
