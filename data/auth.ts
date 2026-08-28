import { UserRole } from '../types';
import type { AuthEntry } from './db';

/**
 * Demo authentication credentials.
 *
 * IMPORTANT: This is a DEMO. Passwords are stored in plaintext here so the
 * login form actually validates them (the previous code ignored the password
 * entirely — a release-blocking bug). In production, never ship plaintext
 * credentials: move auth to Supabase Auth (or any identity provider) and keep
 * only the token/session client-side. When the Firebase adapter lands, this
 * module is replaced by Firebase Auth; nothing else changes.
 */
export const AUTH_CREDENTIALS: AuthEntry[] = [
    { id: 'u1', name: 'Bade Bauji ❣️', email: 'badebauji@mld.com', role: UserRole.ADMIN, avatarUrl: 'https://picsum.photos/seed/bauji/100/100', password: 'demo123' },
    { id: 'u2', name: 'Avinash Ji Boss 🔥', email: 'avinash@mld.com', role: UserRole.MANAGER, avatarUrl: 'https://picsum.photos/seed/avinash/100/100', password: 'demo123' },
    { id: 'u3', name: 'Golu Ji Boss 🙈', email: 'golu@mld.com', role: UserRole.MANAGER, avatarUrl: 'https://picsum.photos/seed/golu/100/100', password: 'demo123' },
    { id: 'u4', name: 'Dr. Verma', email: 'head@mld.com', role: UserRole.HEAD, collegeId: 'c1', avatarUrl: 'https://picsum.photos/seed/verma/100/100', password: 'demo123' },
    { id: 'u5', name: 'Prof. Sharma', email: 'faculty@mld.com', role: UserRole.FACULTY, collegeId: 'c1', avatarUrl: 'https://picsum.photos/seed/sharma/100/100', password: 'demo123' },
    { id: 'u6', name: 'Rohan Kumar', email: 'student@mld.com', role: UserRole.STUDENT, collegeId: 'c1', avatarUrl: 'https://picsum.photos/seed/rohan/100/100', password: 'demo123' },
];

/**
 * Validate an email + password against the demo credentials.
 * Returns the matching user (without the password) on success, else null.
 */
export function verifyCredentials(email: string, password: string): AuthEntry | null {
    const entry = AUTH_CREDENTIALS.find((u) => u.email.toLowerCase() === email.trim().toLowerCase());
    if (!entry) return null;
    if (entry.password !== password) return null;
    return entry;
}

/** Look up a demo user by role (used by the "log in as …" demo buttons). */
export function findUserByRole(role: UserRole): AuthEntry | null {
    return AUTH_CREDENTIALS.find((u) => u.role === role) ?? null;
}

/** Strip credentials before exposing the user app-wide. */
export function toPublicUser(entry: AuthEntry): Omit<AuthEntry, 'password'> {
    const { password: _password, ...user } = entry;
    return user;
}
