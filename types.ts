export enum UserRole {
    ADMIN = 'Admin',
    MANAGER = 'Co-Owners',
    HEAD = 'College Head',
    FACULTY = 'Faculty',
    STUDENT = 'Student'
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