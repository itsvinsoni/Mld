import type { User } from '../types';
import type { CrmData, StorageAdapter, SessionStore } from './db';
import {
    MOCK_STUDENTS,
    MOCK_FACULTY,
    MOCK_FEES,
    MOCK_COLLEGES,
    MOCK_COURSES,
    MOCK_BOOKS,
    MOCK_NOTICES,
    MOCK_RESULTS,
} from '../constants';

/**
 * localStorage-backed implementation of the storage seam.
 *
 * The demo keeps its data in the browser so that the CRM is genuinely usable:
 * adds, edits and deletes persist and survive a page refresh, without any
 * backend. When Supabase lands, swap this out for `supabaseAdapter` in
 * `data/index.ts` — the rest of the app is unchanged.
 */

const DATA_KEY = 'mld-crm:data:v2';
const SESSION_KEY = 'mld-crm:session:v1';

export function seedData(): CrmData {
    return {
        students: MOCK_STUDENTS,
        faculty: MOCK_FACULTY,
        fees: MOCK_FEES,
        colleges: MOCK_COLLEGES,
        courses: MOCK_COURSES,
        books: MOCK_BOOKS,
        notices: MOCK_NOTICES,
        results: MOCK_RESULTS,
    };
}

export const localStorageAdapter: StorageAdapter & SessionStore = {
    load(): CrmData | null {
        try {
            const raw = localStorage.getItem(DATA_KEY);
            if (!raw) return null;
            const parsed = JSON.parse(raw) as Partial<CrmData>;
            // Guard against a stale/corrupt cache: fall back to seed data.
            if (!parsed || !Array.isArray(parsed.students) || !Array.isArray(parsed.faculty)) {
                return null;
            }
            return { ...seedData(), ...parsed } as CrmData;
        } catch {
            return null;
        }
    },

    save(data: CrmData): void {
        try {
            localStorage.setItem(DATA_KEY, JSON.stringify(data));
        } catch {
            // Storage full/unavailable in a private context — demo still works
            // in-memory for this session.
        }
    },

    loadSession(): User | null {
        try {
            const raw = localStorage.getItem(SESSION_KEY);
            return raw ? (JSON.parse(raw) as User) : null;
        } catch {
            return null;
        }
    },

    saveSession(user: User | null): void {
        try {
            if (user) {
                localStorage.setItem(SESSION_KEY, JSON.stringify(user));
            } else {
                localStorage.removeItem(SESSION_KEY);
            }
        } catch {
            /* ignore */
        }
    },
};
