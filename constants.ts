
import type { User, Student, Faculty, Fee, Notice } from './types';
import { UserRole } from './types';

export const MOCK_USERS: User[] = [
    { id: 'u1', name: 'Bade Bauji ❣️', email: 'badebauji@mld.com', role: UserRole.ADMIN, avatarUrl: 'https://picsum.photos/seed/bauji/100/100' },
    { id: 'u2', name: 'Avinash Ji Boss 🔥', email: 'avinash@mld.com', role: UserRole.MANAGER, avatarUrl: 'https://picsum.photos/seed/avinash/100/100' },
    { id: 'u3', name: 'Golu Ji Boss 🙈', email: 'golu@mld.com', role: UserRole.MANAGER, avatarUrl: 'https://picsum.photos/seed/golu/100/100' },
    { id: 'u4', name: 'Dr. Verma', email: 'head@mld.com', role: UserRole.HEAD, collegeId: 'c1', avatarUrl: 'https://picsum.photos/seed/verma/100/100' },
    { id: 'u5', name: 'Prof. Sharma', email: 'faculty@mld.com', role: UserRole.FACULTY, collegeId: 'c1', avatarUrl: 'https://picsum.photos/seed/sharma/100/100' },
    { id: 'u6', name: 'Rohan Kumar', email: 'student@mld.com', role: UserRole.STUDENT, collegeId: 'c1', avatarUrl: 'https://picsum.photos/seed/rohan/100/100' },
];

export const MOCK_STUDENTS: Student[] = [
    { id: 's1', name: 'Priya Sharma', rollNo: 'CS101', course: 'Computer Science', batch: '2024', admissionDate: '2024-01-15', feeStatus: 'Paid', attendancePercentage: 92, booksIssued: [{ bookName: 'Intro to Algorithms', issueDate: '2024-03-10' }], contact: '555-0101' },
    { id: 's2', name: 'Amit Singh', rollNo: 'ME202', course: 'Mechanical Eng.', batch: '2023', admissionDate: '2023-08-20', feeStatus: 'Pending', attendancePercentage: 78, booksIssued: [], contact: '555-0102' },
    { id: 's3', name: 'Sneha Gupta', rollNo: 'EE303', course: 'Electrical Eng.', batch: '2024', admissionDate: '2024-01-20', feeStatus: 'Partial', attendancePercentage: 85, booksIssued: [{ bookName: 'Circuit Analysis', issueDate: '2024-04-01' }], contact: '555-0103' },
    { id: 's4', name: 'Vikram Rathore', rollNo: 'CS102', course: 'Computer Science', batch: '2024', admissionDate: '2024-01-18', feeStatus: 'Paid', attendancePercentage: 95, booksIssued: [], contact: '555-0104' },
    { id: 's5', name: 'Anjali Mehta', rollNo: 'CE401', course: 'Civil Engineering', batch: '2022', admissionDate: '2022-09-01', feeStatus: 'Paid', attendancePercentage: 88, booksIssued: [{ bookName: 'Structural Design', issueDate: '2024-02-15' }], contact: '555-0105' },
    { id: 's6', name: 'Rajesh Kumar', rollNo: 'IT201', course: 'Information Tech.', batch: '2023', admissionDate: '2023-08-22', feeStatus: 'Paid', attendancePercentage: 91, booksIssued: [], contact: '555-0106' },
    { id: 's7', name: 'Kavita Joshi', rollNo: 'ME205', course: 'Mechanical Eng.', batch: '2023', admissionDate: '2023-08-21', feeStatus: 'Pending', attendancePercentage: 72, booksIssued: [{ bookName: 'Thermodynamics', issueDate: '2024-03-05' }], contact: '555-0107' },
    { id: 's8', name: 'Sandeep Verma', rollNo: 'CS105', course: 'Computer Science', batch: '2024', admissionDate: '2024-01-25', feeStatus: 'Partial', attendancePercentage: 89, booksIssued: [], contact: '555-0108' },
    { id: 's9', name: 'Pooja Desai', rollNo: 'EE308', course: 'Electrical Eng.', batch: '2024', admissionDate: '2024-01-22', feeStatus: 'Paid', attendancePercentage: 96, booksIssued: [{ bookName: 'Digital Electronics', issueDate: '2024-04-10' }], contact: '555-0109' },
    { id: 's10', name: 'Harish Nair', rollNo: 'CE404', course: 'Civil Engineering', batch: '2022', admissionDate: '2022-09-05', feeStatus: 'Paid', attendancePercentage: 84, booksIssued: [], contact: '555-0110' },
    { id: 's11', name: 'Ravi Kumar', rollNo: 'IT301', course: 'Information Tech.', batch: '2023', admissionDate: '2023-08-25', feeStatus: 'Paid', attendancePercentage: 85, booksIssued: [], contact: '555-0111' },
    { id: 's12', name: 'Sunita Sharma', rollNo: 'CS205', course: 'Computer Science', batch: '2023', admissionDate: '2023-08-26', feeStatus: 'Pending', attendancePercentage: 75, booksIssued: [{ bookName: 'Data Structures', issueDate: '2024-03-12' }], contact: '555-0112' },
    { id: 's13', name: 'Mohan Verma', rollNo: 'ME301', course: 'Mechanical Eng.', batch: '2022', admissionDate: '2022-09-10', feeStatus: 'Partial', attendancePercentage: 82, booksIssued: [], contact: '555-0113' },
    { id: 's14', name: 'Geeta Kumari', rollNo: 'EE402', course: 'Electrical Eng.', batch: '2022', admissionDate: '2022-09-12', feeStatus: 'Paid', attendancePercentage: 93, booksIssued: [], contact: '555-0114' },
    { id: 's15', name: 'Anil Kapoor', rollNo: 'CE101', course: 'Civil Engineering', batch: '2024', admissionDate: '2024-01-30', feeStatus: 'Pending', attendancePercentage: 88, booksIssued: [{ bookName: 'Building Materials', issueDate: '2024-04-15' }], contact: '555-0115' },
];

export const MOCK_FACULTY: Faculty[] = [
    { id: 'f1', name: 'Dr. Alok Nath', course: 'Computer Science', contact: '555-0201', syllabusProgress: 75 },
    { id: 'f2', name: 'Dr. Sunita Reddy', course: 'Mechanical Eng.', contact: '555-0202', syllabusProgress: 60 },
    { id: 'f3', name: 'Dr. Rajesh Gupta', course: 'Electrical Eng.', contact: '555-0203', syllabusProgress: 85 },
    { id: 'f4', name: 'Prof. Meena Iyer', course: 'Civil Engineering', contact: '555-0204', syllabusProgress: 90 },
    { id: 'f5', name: 'Prof. Suresh Patil', course: 'Information Tech.', contact: '555-0205', syllabusProgress: 70 },
];

export const MOCK_FEES: Fee[] = [
    { id: 'fee1', studentId: 's1', amountPaid: 50000, totalFee: 50000, paymentType: 'Cash', date: '2024-01-15', remainingDue: 0 },
    { id: 'fee2', studentId: 's2', amountPaid: 0, totalFee: 45000, paymentType: 'Cash', date: '2023-08-20', remainingDue: 45000 },
    { id: 'fee3', studentId: 's3', amountPaid: 25000, totalFee: 60000, paymentType: 'DD', date: '2024-01-20', remainingDue: 35000 },
    { id: 'fee4', studentId: 's4', amountPaid: 50000, totalFee: 50000, paymentType: 'Cash', date: '2024-01-18', remainingDue: 0 },
    { id: 'fee5', studentId: 's5', amountPaid: 40000, totalFee: 40000, paymentType: 'Cash', date: '2022-09-01', remainingDue: 0 },
    { id: 'fee6', studentId: 's6', amountPaid: 48000, totalFee: 48000, paymentType: 'DD', date: '2023-08-22', remainingDue: 0 },
    { id: 'fee7', studentId: 's7', amountPaid: 10000, totalFee: 45000, paymentType: 'Cash', date: '2023-08-21', remainingDue: 35000 },
    { id: 'fee8', studentId: 's8', amountPaid: 25000, totalFee: 50000, paymentType: 'Cash', date: '2024-01-25', remainingDue: 25000 },
    { id: 'fee9', studentId: 's9', amountPaid: 60000, totalFee: 60000, paymentType: 'DD', date: '2024-01-22', remainingDue: 0 },
    { id: 'fee10', studentId: 's10', amountPaid: 40000, totalFee: 40000, paymentType: 'Cash', date: '2022-09-05', remainingDue: 0 },
    { id: 'fee11', studentId: 's11', amountPaid: 48000, totalFee: 48000, paymentType: 'DD', date: '2023-08-25', remainingDue: 0 },
    { id: 'fee12', studentId: 's12', amountPaid: 0, totalFee: 50000, paymentType: 'Cash', date: '2023-08-26', remainingDue: 50000 },
    { id: 'fee13', studentId: 's13', amountPaid: 22000, totalFee: 45000, paymentType: 'Cash', date: '2022-09-10', remainingDue: 23000 },
    { id: 'fee14', studentId: 's14', amountPaid: 60000, totalFee: 60000, paymentType: 'DD', date: '2022-09-12', remainingDue: 0 },
    { id: 'fee15', studentId: 's15', amountPaid: 10000, totalFee: 40000, paymentType: 'Cash', date: '2024-01-30', remainingDue: 30000 },
];

export const MOCK_NOTICES: Notice[] = [
    { id: 'n1', title: 'Mid-term Exams Schedule', content: 'The mid-term examinations for all departments will commence from the 15th of next month.', date: '2024-05-10', visibleTo: [UserRole.STUDENT, UserRole.FACULTY, UserRole.HEAD] },
    { id: 'n2', title: 'Management Meeting', content: 'A mandatory meeting for all management and heads is scheduled for this Friday at 3 PM. Agenda will be shared by Avinash Ji.', date: '2024-05-08', visibleTo: [UserRole.FACULTY, UserRole.HEAD, UserRole.MANAGER, UserRole.ADMIN] },
    { id: 'n3', title: 'Fee Payment Deadline Extended', content: 'As per Bade Bauji\'s instructions, the deadline for fee payment has been extended to the 25th of this month.', date: '2024-05-05', visibleTo: [UserRole.STUDENT, UserRole.HEAD, UserRole.MANAGER] },
];
