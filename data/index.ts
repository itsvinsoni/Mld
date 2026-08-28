import { localStorageAdapter } from './localStorageAdapter';
import type { StorageAdapter, SessionStore } from './db';

/**
 * Active persistence backend for the demo.
 *
 * ⚠️ Live switch for the future database:
 *   const adapter = localStorageAdapter;                       // demo (now)
 *   const adapter = supabaseAdapter;                           // after Supabase lands
 *
 * Both implement the same `StorageAdapter & SessionStore` interface, so the
 * store and every view keep working untouched.
 */
export const adapter: StorageAdapter & SessionStore = localStorageAdapter;

export * from './db';
export { localStorageAdapter } from './localStorageAdapter';
export { seedData } from './localStorageAdapter';
export { verifyCredentials, findUserByRole, toPublicUser, AUTH_CREDENTIALS } from './auth';
export { supabaseAdapter } from './supabaseAdapter';
