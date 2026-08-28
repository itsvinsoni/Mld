import type { CrmData, StorageAdapter, SessionStore } from './db';

/**
 * Supabase / Postgres adapter — PLANNED, not yet wired.
 *
 * The CRM data layer is written against the `StorageAdapter` + `SessionStore`
 * interface (`data/db.ts`). Today it uses `localStorageAdapter`. To move to a
 * real database, implement this file and flip the switch in `data/index.ts`.
 *
 * IMPORTANT: this file intentionally does NOT import the `@supabase/supabase-js`
 * SDK right now, so the demo build stays green with no extra dependency.
 * When you're ready:
 *   1. `npm install @supabase/supabase-js`
 *   2. Add a Supabase project + URL/anon-key (use env vars, never hard-code the
 *      service_role key). A `data/supabaseClient.ts` can create the client.
 *   3. Fill in `save`/`load`/`loadSession`/`saveSession` below against your
 *      Postgres tables (e.g. `students`, `faculty`, `fees`, `colleges`,
 *      `courses`, `books`, `notices`, `users`) and use Supabase Auth for the
 *      session slice.
 *   4. In `data/index.ts`, export `supabaseAdapter` instead of `localStorageAdapter`
 *
 * The views and the store never change — that's the value of the seam.
 */
export const supabaseAdapter: StorageAdapter & SessionStore = {
    load(): CrmData | null {
        throw new Error(
            'supabaseAdapter is not configured yet. Switch data/index.ts back to localStorageAdapter for the demo, or implement this adapter against Supabase/Postgres.'
        );
    },
    save(_data: CrmData): void {
        throw new Error('supabaseAdapter is not configured yet.');
    },
    loadSession(): never {
        throw new Error('supabaseAdapter is not configured yet.');
    },
    saveSession(_user: Parameters<SessionStore['saveSession']>[0]): void {
        throw new Error('supabaseAdapter is not configured yet.');
    },
};
