import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { UserRole } from '../types';
import type { User, Student, Faculty, Fee, Notice, College, Course, Book, BookIssue, Result } from '../types';
import type { CrmData } from './db';
import { makeId } from './db';
import { adapter, seedData } from './index';
import { findUserByRole, toPublicUser, verifyCredentials } from './auth';

type FeeStatus = Student['feeStatus'];

/** Derive a student's overall fee status from their fee records. */
function deriveFeeStatus(fees: Fee[], studentId: string): FeeStatus {
    const mine = fees.filter((f) => f.studentId === studentId);
    if (mine.length === 0) return 'Pending';
    const totalFee = mine.reduce((s, f) => s + f.totalFee, 0);
    const paid = mine.reduce((s, f) => s + f.amountPaid, 0);
    if (totalFee <= 0 || paid >= totalFee) return 'Paid';
    if (paid <= 0) return 'Pending';
    return 'Partial';
}

/** Keep each course's studentCount in sync with the live student list. */
function syncCourseCounts(courses: Course[], students: Student[]): Course[] {
    return courses.map((c) => ({
        ...c,
        studentCount: students.filter((s) => s.course === c.name).length,
    }));
}

interface CrmContextValue {
    // raw collections
    data: CrmData;
    students: Student[];
    faculty: Faculty[];
    fees: Fee[];
    colleges: College[];
    courses: Course[];
    books: Book[];
    notices: Notice[];
    results: Result[];

    // auth
    currentUser: User | null;
    userRole: UserRole;
    login: (email: string, password: string) => boolean;
    loginAsRole: (role: UserRole) => boolean;
    logout: () => void;

    // students
    addStudent: (s: Omit<Student, 'id'>) => void;
    updateStudent: (id: string, patch: Partial<Student>) => void;
    deleteStudent: (id: string) => void;

    // faculty
    addFaculty: (f: Omit<Faculty, 'id'>) => void;
    updateFaculty: (id: string, patch: Partial<Faculty>) => void;
    deleteFaculty: (id: string) => void;

    // fees
    addFee: (f: Omit<Fee, 'id'>) => void;
    updateFee: (id: string, patch: Partial<Fee>) => void;
    deleteFee: (id: string) => void;

    // colleges
    addCollege: (c: Omit<College, 'id'>) => void;
    updateCollege: (id: string, patch: Partial<College>) => void;
    deleteCollege: (id: string) => void;

    // courses
    addCourse: (c: Omit<Course, 'id'>) => void;
    updateCourse: (id: string, patch: Partial<Course>) => void;
    deleteCourse: (id: string) => void;

    // books
    addBook: (b: Omit<Book, 'id'>) => void;
    updateBook: (id: string, patch: Partial<Book>) => void;
    deleteBook: (id: string) => void;

    // library issue / return (updates both the student and the book together)
    issueBook: (studentId: string, book: Book) => void;
    returnBook: (studentId: string, bookId: string) => void;

    // results / mark-sheet
    addResult: (r: Omit<Result, 'id'>) => void;
    updateResult: (id: string, patch: Partial<Result>) => void;
    deleteResult: (id: string) => void;
}

const CrmContext = createContext<CrmContextValue | undefined>(undefined);

export const CrmProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<CrmData>(() => adapter.load() ?? seedData());
    const [currentUser, setCurrentUser] = useState<User | null>(() => adapter.loadSession());

    /** Commit a new dataset to state and to the persistence backend. */
    const persist = useCallback((next: CrmData) => {
        setData(next);
        adapter.save(next);
    }, []);

    // `dataRef` keeps the latest dataset available to the stable callbacks below.
    const dataRef = React.useRef(data);
    dataRef.current = data;

    // ----------------------------- AUTH -----------------------------
    const login = useCallback((email: string, password: string): boolean => {
        const entry = verifyCredentials(email, password);
        if (!entry) return false;
        const user = toPublicUser(entry);
        setCurrentUser(user);
        adapter.saveSession(user);
        return true;
    }, []);

    const loginAsRole = useCallback((role: UserRole): boolean => {
        const entry = findUserByRole(role);
        if (!entry) return false;
        const user = toPublicUser(entry);
        setCurrentUser(user);
        adapter.saveSession(user);
        return true;
    }, []);

    const logout = useCallback(() => {
        setCurrentUser(null);
        adapter.saveSession(null);
    }, []);

    // ---------------------------- STUDENTS ---------------------------
    const addStudent = useCallback(
        (s: Omit<Student, 'id'>) => {
            const students = [...dataRef.current.students, { ...s, id: makeId('s') }];
            persist({
                ...dataRef.current,
                students,
                courses: syncCourseCounts(dataRef.current.courses, students),
            });
        },
        [persist]
    );

    const updateStudent = useCallback(
        (id: string, patch: Partial<Student>) => {
            const students = dataRef.current.students.map((s) => (s.id === id ? { ...s, ...patch } : s));
            persist({
                ...dataRef.current,
                students,
                courses: syncCourseCounts(dataRef.current.courses, students),
            });
        },
        [persist]
    );

    const deleteStudent = useCallback(
        (id: string) => {
            const students = dataRef.current.students.filter((s) => s.id !== id);
            persist({
                ...dataRef.current,
                students,
                courses: syncCourseCounts(dataRef.current.courses, students),
            });
        },
        [persist]
    );

    // ---------------------------- FACULTY ----------------------------
    const addFaculty = useCallback(
        (f: Omit<Faculty, 'id'>) => {
            persist({ ...dataRef.current, faculty: [...dataRef.current.faculty, { ...f, id: makeId('f') }] });
        },
        [persist]
    );

    const updateFaculty = useCallback(
        (id: string, patch: Partial<Faculty>) => {
            persist({
                ...dataRef.current,
                faculty: dataRef.current.faculty.map((f) => (f.id === id ? { ...f, ...patch } : f)),
            });
        },
        [persist]
    );

    const deleteFaculty = useCallback(
        (id: string) => {
            persist({ ...dataRef.current, faculty: dataRef.current.faculty.filter((f) => f.id !== id) });
        },
        [persist]
    );

    // ----------------------------- FEES ------------------------------
    const applyFees = useCallback(
        (fees: Fee[]) => {
            const students = dataRef.current.students.map((s) => ({
                ...s,
                feeStatus: deriveFeeStatus(fees, s.id),
            }));
            persist({ ...dataRef.current, fees, students });
        },
        [persist]
    );

    const addFee = useCallback(
        (f: Omit<Fee, 'id'>) => {
            applyFees([...dataRef.current.fees, { ...f, id: makeId('fee') }]);
        },
        [applyFees]
    );

    const updateFee = useCallback(
        (id: string, patch: Partial<Fee>) => {
            applyFees(dataRef.current.fees.map((fee) => (fee.id === id ? { ...fee, ...patch } : fee)));
        },
        [applyFees]
    );

    const deleteFee = useCallback(
        (id: string) => {
            applyFees(dataRef.current.fees.filter((fee) => fee.id !== id));
        },
        [applyFees]
    );

    // --------------------------- COLLEGES ----------------------------
    const addCollege = useCallback(
        (c: Omit<College, 'id'>) => {
            persist({ ...dataRef.current, colleges: [...dataRef.current.colleges, { ...c, id: makeId('c') }] });
        },
        [persist]
    );

    const updateCollege = useCallback(
        (id: string, patch: Partial<College>) => {
            persist({
                ...dataRef.current,
                colleges: dataRef.current.colleges.map((c) => (c.id === id ? { ...c, ...patch } : c)),
            });
        },
        [persist]
    );

    const deleteCollege = useCallback(
        (id: string) => {
            persist({ ...dataRef.current, colleges: dataRef.current.colleges.filter((c) => c.id !== id) });
        },
        [persist]
    );

    // ---------------------------- COURSES ----------------------------
    const addCourse = useCallback(
        (c: Omit<Course, 'id'>) => {
            persist({ ...dataRef.current, courses: [...dataRef.current.courses, { ...c, id: makeId('cr') }] });
        },
        [persist]
    );

    const updateCourse = useCallback(
        (id: string, patch: Partial<Course>) => {
            persist({
                ...dataRef.current,
                courses: dataRef.current.courses.map((c) => (c.id === id ? { ...c, ...patch } : c)),
            });
        },
        [persist]
    );

    const deleteCourse = useCallback(
        (id: string) => {
            persist({ ...dataRef.current, courses: dataRef.current.courses.filter((c) => c.id !== id) });
        },
        [persist]
    );

    // ----------------------------- BOOKS -----------------------------
    const addBook = useCallback(
        (b: Omit<Book, 'id'>) => {
            persist({ ...dataRef.current, books: [...dataRef.current.books, { ...b, id: makeId('b') }] });
        },
        [persist]
    );

    const updateBook = useCallback(
        (id: string, patch: Partial<Book>) => {
            persist({
                ...dataRef.current,
                books: dataRef.current.books.map((b) => (b.id === id ? { ...b, ...patch } : b)),
            });
        },
        [persist]
    );

    const deleteBook = useCallback(
        (id: string) => {
            persist({ ...dataRef.current, books: dataRef.current.books.filter((b) => b.id !== id) });
        },
        [persist]
    );

    // -------------------- LIBRARY ISSUE / RETURN --------------------
    const issueBook = useCallback(
        (studentId: string, book: Book) => {
            const { students, books } = dataRef.current;
            const issue: BookIssue = {
                bookId: book.id,
                bookName: book.title,
                issueDate: new Date().toISOString().slice(0, 10),
                studentId,
            };
            const nextStudents = students.map((s) =>
                s.id === studentId ? { ...s, booksIssued: [...s.booksIssued, issue] } : s
            );
            const nextBooks = books.map((b) =>
                b.id === book.id ? { ...b, availableCopies: Math.max(0, b.availableCopies - 1) } : b
            );
            persist({ ...dataRef.current, students: nextStudents, books: nextBooks });
        },
        [persist]
    );

    const returnBook = useCallback(
        (studentId: string, bookId: string) => {
            const { students, books } = dataRef.current;
            const nextStudents = students.map((s) =>
                s.id === studentId ? { ...s, booksIssued: s.booksIssued.filter((i) => i.bookId !== bookId) } : s
            );
            const nextBooks = books.map((b) =>
                b.id === bookId ? { ...b, availableCopies: Math.min(b.totalCopies, b.availableCopies + 1) } : b
            );
            persist({ ...dataRef.current, students: nextStudents, books: nextBooks });
        },
        [persist]
    );

    // -------------------------- RESULTS -----------------------------
    const addResult = useCallback(
        (r: Omit<Result, 'id'>) => {
            persist({ ...dataRef.current, results: [...dataRef.current.results, { ...r, id: makeId('r') }] });
        },
        [persist]
    );

    const updateResult = useCallback(
        (id: string, patch: Partial<Result>) => {
            persist({
                ...dataRef.current,
                results: dataRef.current.results.map((res) => (res.id === id ? { ...res, ...patch } : res)),
            });
        },
        [persist]
    );

    const deleteResult = useCallback(
        (id: string) => {
            persist({ ...dataRef.current, results: dataRef.current.results.filter((res) => res.id !== id) });
        },
        [persist]
    );

    const value = useMemo<CrmContextValue>(
        () => ({
            data,
            students: data.students,
            faculty: data.faculty,
            fees: data.fees,
            colleges: data.colleges,
            courses: data.courses,
            books: data.books,
            notices: data.notices,
            results: data.results,
            currentUser,
            userRole: currentUser?.role ?? UserRole.ADMIN,
            login,
            loginAsRole,
            logout,
            addStudent,
            updateStudent,
            deleteStudent,
            addFaculty,
            updateFaculty,
            deleteFaculty,
            addFee,
            updateFee,
            deleteFee,
            addCollege,
            updateCollege,
            deleteCollege,
            addCourse,
            updateCourse,
            deleteCourse,
            addBook,
            updateBook,
            deleteBook,
            issueBook,
            returnBook,
            addResult,
            updateResult,
            deleteResult,
        }),
        [
            data,
            currentUser,
            login,
            loginAsRole,
            logout,
            addStudent,
            updateStudent,
            deleteStudent,
            addFaculty,
            updateFaculty,
            deleteFaculty,
            addFee,
            updateFee,
            deleteFee,
            addCollege,
            updateCollege,
            deleteCollege,
            addCourse,
            updateCourse,
            deleteCourse,
            addBook,
            updateBook,
            deleteBook,
            issueBook,
            returnBook,
            addResult,
            updateResult,
            deleteResult,
        ]
    );

    return <CrmContext.Provider value={value}>{children}</CrmContext.Provider>;
};

/** Access the whole CRM store (data + auth + CRUD) from any component. */
export function useCrm(): CrmContextValue {
    const ctx = useContext(CrmContext);
    if (!ctx) throw new Error('useCrm must be used within a <CrmProvider>');
    return ctx;
}
