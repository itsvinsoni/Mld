import type { CrmData, StorageAdapter, SessionStore } from './db';

/**
 * Firebase / Firestore adapter — PLANNED, not yet wired.
 *
 * The CRM data layer is written against the `StorageAdapter` + `SessionStore`
 * interface (`data/db.ts`). Today it uses `localStorageAdapter`. To move to a
 * real database, implement this file and flip the switch in `data/index.ts`.
 *
 * IMPORTANT: this file intentionally does NOT import the `firebase` SDK right
 * now, so the demo build stays green with no extra dependency. When you're
 * ready:
 *   1. `npm install firebase`
 *   2. Add a Firebase project + config in `data/firebase.ts`
 *   3. Fill in `save`/`load`/`loadSession`/`saveSession` below against Firestore
 *      (and optionally use `onSnapshot` for real-time sync)
 *   4. In `data/index.ts`, export `firebaseAdapter` instead of `localStorageAdapter`
 *
 * The views and the store never change — that's the value of the seam.
 */
export const firebaseAdapter: StorageAdapter & SessionStore = {
    load(): CrmData | null {
        throw new Error(
            'firebaseAdapter is not configured yet. Switch data/index.ts back to localStorageAdapter for the demo, or implement this adapter against Firestore.'
        );
    },
    save(_data: CrmData): void {
        throw new Error('firebaseAdapter is not configured yet.');
    },
    loadSession(): never {
        throw new Error('firebaseAdapter is not configured yet.');
    },
    saveSession(_user: Parameters<SessionStore['saveSession']>[0]): void {
        throw new Error('firebaseAdapter is not configured yet.');
    },
};
