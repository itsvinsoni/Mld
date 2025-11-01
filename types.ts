
export enum UserRole {
    ADMIN = 'Admin',
    MANAGER = 'Manager',
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
    bookName: string;
    issueDate: string;
    returnDate?: string;
}

export interface Notice {
    id: string;
    title: string;
    content: string;
    date: string;
    visibleTo: UserRole[];
}
