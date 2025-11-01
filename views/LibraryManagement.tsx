import React, { useState, useMemo } from 'react';
import type { Book, Student, UserRole, BookIssue } from '../types';
import { UserRole as Roles } from '../types';

interface LibraryManagementProps {
    books: Book[];
    students: Student[];
    userRole: UserRole;
}

const LibraryManagement: React.FC<LibraryManagementProps> = ({ books, students, userRole }) => {
    const [activeTab, setActiveTab] = useState('catalog');
    const [searchTerm, setSearchTerm] = useState('');

    const canEdit = [Roles.ADMIN, Roles.HEAD, Roles.FACULTY].includes(userRole);

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

    return (
        <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-lg space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <h2 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary">Library Management</h2>
                {canEdit && (
                    <button className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-orange-dark transition duration-300 whitespace-nowrap">
                        + Add New Book
                    </button>
                )}
            </div>

            <div>
                <div className="flex border-b border-light-border dark:border-dark-border">
                    <button onClick={() => setActiveTab('catalog')} className={`py-2 px-4 text-sm font-medium ${activeTab === 'catalog' ? 'border-b-2 border-brand-orange text-brand-orange' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50'}`}>
                        Book Catalog
                    </button>
                    <button onClick={() => setActiveTab('issued')} className={`py-2 px-4 text-sm font-medium ${activeTab === 'issued' ? 'border-b-2 border-brand-orange text-brand-orange' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50'}`}>
                        Issued Books
                    </button>
                </div>
            </div>

            {activeTab === 'catalog' && (
                <div>
                    <input type="text" placeholder="Search in catalog..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full mb-4 px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-light-border dark:border-dark-border text-light-textPrimary dark:text-dark-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange" />
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-light-textSecondary dark:text-dark-textSecondary">
                            <thead className="text-xs uppercase bg-slate-50 dark:bg-dark-surface/50 text-slate-500 dark:text-slate-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Title</th>
                                    <th scope="col" className="px-6 py-3">Author</th>
                                    <th scope="col" className="px-6 py-3">ISBN</th>
                                    <th scope="col" className="px-6 py-3">Available / Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBooks.map(book => (
                                    <tr key={book.id} className="border-b border-light-border dark:border-dark-border hover:bg-slate-50 dark:hover:bg-dark-surface/50">
                                        <td className="px-6 py-4 font-medium text-light-textPrimary dark:text-dark-textPrimary">{book.title}</td>
                                        <td className="px-6 py-4">{book.author}</td>
                                        <td className="px-6 py-4">{book.isbn}</td>
                                        <td className="px-6 py-4">{book.availableCopies} / {book.totalCopies}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            
            {activeTab === 'issued' && (
                <div>
                    <input type="text" placeholder="Search issued books..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full mb-4 px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-light-border dark:border-dark-border text-light-textPrimary dark:text-dark-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange" />
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-light-textSecondary dark:text-dark-textSecondary">
                            <thead className="text-xs uppercase bg-slate-50 dark:bg-dark-surface/50 text-slate-500 dark:text-slate-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Book Title</th>
                                    <th scope="col" className="px-6 py-3">Student Name</th>
                                    <th scope="col" className="px-6 py-3">Roll No</th>
                                    <th scope="col" className="px-6 py-3">Issue Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredIssuedBooks.map(issue => (
                                    <tr key={`${issue.studentId}-${issue.bookId}`} className="border-b border-light-border dark:border-dark-border hover:bg-slate-50 dark:hover:bg-dark-surface/50">
                                        <td className="px-6 py-4 font-medium text-light-textPrimary dark:text-dark-textPrimary">{issue.bookName}</td>
                                        <td className="px-6 py-4">{issue.studentName}</td>
                                        <td className="px-6 py-4">{issue.rollNo}</td>
                                        <td className="px-6 py-4">{issue.issueDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LibraryManagement;