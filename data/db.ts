import type { Student, Faculty, Fee, Notice, College, Course, Book, User } from '../types';

/**
 * CrmData
 * --------
 * The canonical shape of every CRM collection that flows through the app.
 * The store holds one `CrmData` object in state and all mutations return a
 * new copy of it (immutable updates) before persisting through an adapter.
 */
export interface CrmData {
    students: Student[];
    faculty: Faculty[];
    fees: Fee[];
    colleges: College[];
    courses: Course[];
    books: Book[];
    notices: Notice[];
}

/**
 * StorageAdapter
 * --------------
 * The ONE seam between the store and whatever persistence backend is used.
 *
 * Today the demo ships `localStorageAdapter` (browser-local persistence), so
 * Add/Edit/Delete actually work and survive a page refresh.
 *
 * Later, when you want a real database, implement this same interface with a
 * Firebase/Firestore adapter (`data/firebaseAdapter.ts`) and choose it in
 * `data/index.ts`. Nothing else in the app needs to change, which is the whole
 * point of building the seam now rather than hard-wiring localStorage.
 *
 * Both methods are intentionally SYNCHRONOUS. If the future Firebase adapter
 * needs async reads, we can lift the initial load into an effect inside the
 * provider without touching the views — the views never talk to the adapter.
 */
export interface StorageAdapter {
    /** Read the previously persisted full dataset, or null if none exists yet. */
    load(): CrmData | null;
    /** Persist the full dataset. Called after every successful mutation. */
    save(data: CrmData): void;
}

/**
 * SessionAdapter (auth-focused slice of the same seam)
 * ----------------------------------------------------
 * Keeps the logged-in user across refreshes. A future Firebase adapter can
 * back this with Firestore/Auth persistence instead of localStorage.
 */
export interface SessionStore {
    loadSession(): User | null;
    saveSession(user: User | null): void;
}

/** Auth credentials for demo login (kept out of the display-only `User`). */
export interface AuthEntry extends User {
    password: string;
}

/** Small ID helper so new records never collide. */
export function makeId(prefix: string): string {
    const rand =
        typeof crypto !== 'undefined' && 'randomUUID' in crypto
            ? crypto.randomUUID().slice(0, 8)
            : Math.random().toString(36).slice(2, 10);
    return `${prefix}-${rand}`;
}
