export enum UserRole {
    ADMIN = 'Admin',
    MANAGER = 'Co-Owners',
    HEAD = 'College Head',
    FACULTY = 'Faculty',
    STUDENT = 'Student',
    ACCOUNTANT = 'Accountant',
    DIRECTOR = 'Director'
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    collegeId?: string;
    avatarUrl: string;
}

export interface Student {
    id: string;
    name: string;
    rollNo: string;
    course: string;
    batch: string;
    admissionDate: string;
    feeStatus: 'Paid' | 'Pending' | 'Partial';
    attendancePercentage: number;
    booksIssued: BookIssue[];
    contact: string;
}

export interface Faculty {
    id: string;
    name: string;
    course: string;
    contact: string;
    syllabusProgress: number;
}

export interface Fee {
    id: string;
    studentId: string;
    amountPaid: number;
    totalFee: number;
    paymentType: 'Cash' | 'DD';
    date: string;
    remainingDue: number;
}

export interface BookIssue {
    bookId: string;
    bookName: string;
    issueDate: string;
    returnDate?: string;
    studentId: string;
}

export interface Notice {
    id: string;
    title: string;
    content: string;
    date: string;
    visibleTo: UserRole[];
}

export interface College {
    id: string;
    name: string;
    location: string;
    principal: string;
    studentCount: number;
    coursesOffered: number;
}

export interface Course {
    id: string;
    name: string;
    code: string;
    durationYears: number;
    department: string;
    studentCount: number;
}

export interface Book {
    id: string;
    title: string;
    author: string;
    isbn: string;
    availableCopies: number;
    totalCopies: number;
}

/** A single subject's marks inside a result/mark-sheet. */
export interface SubjectMark {
    subject: string;
    maxMarks: number;
    obtained: number;
}

/** A student's exam result / mark-sheet entry. Percentage & grade are derived. */
export interface Result {
    id: string;
    studentId: string;
    examName: string;     // e.g. "Term 1", "Semester 1", "Annual"
    year: string;         // e.g. "2024"
    subjects: SubjectMark[];
    // Derived on the fly: totalObtained, totalMax, percentage, grade
}
