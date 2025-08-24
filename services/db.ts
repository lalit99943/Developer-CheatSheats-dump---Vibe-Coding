
import { CheatSheet } from '../types';

const DB_NAME = 'DevDeckDB';
const DB_VERSION = 1;
const STORE_NAME = 'cheatsheets';

class IndexedDBService {
    private db: IDBDatabase | null = null;

    public init(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.db) {
                return resolve();
            }

            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onupgradeneeded = (event) => {
                const db = (event.target as IDBOpenDBRequest).result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
                    store.createIndex('category', 'category', { unique: false });
                    store.createIndex('tags', 'tags', { multiEntry: true });
                }
            };

            request.onsuccess = (event) => {
                this.db = (event.target as IDBOpenDBRequest).result;
                resolve();
            };

            request.onerror = (event) => {
                console.error('IndexedDB error:', (event.target as IDBOpenDBRequest).error);
                reject('Error opening IndexedDB');
            };
        });
    }

    public addCheatSheet(sheet: CheatSheet): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.db) return reject('DB not initialized');

            const transaction = this.db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.add(sheet);

            request.onsuccess = () => resolve();
            request.onerror = (event) => reject((event.target as IDBRequest).error);
        });
    }

    public bulkAddCheatSheets(sheets: CheatSheet[]): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.db) return reject('DB not initialized');
    
            const transaction = this.db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
    
            let count = 0;
            const putNext = () => {
                if (count < sheets.length) {
                    // Use put instead of add to upsert, preventing errors on duplicate IDs
                    const request = store.put(sheets[count]);
                    request.onsuccess = () => {
                        count++;
                        putNext();
                    };
                    request.onerror = (event) => {
                        // Don't reject the whole transaction, just log the error
                        console.error('Error adding item:', (event.target as IDBRequest).error);
                        count++;
                        putNext();
                    }
                } else {
                    resolve();
                }
            };
    
            putNext();

            transaction.oncomplete = () => {
                console.log('Bulk add transaction completed.');
            };

            transaction.onerror = (event) => {
                reject((event.target as IDBTransaction).error);
            };
        });
    }

    public getAllCheatSheets(): Promise<CheatSheet[]> {
        return new Promise((resolve, reject) => {
            if (!this.db) return reject('DB not initialized');

            const transaction = this.db.transaction([STORE_NAME], 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.getAll();

            request.onsuccess = (event) => {
                resolve((event.target as IDBRequest).result as CheatSheet[]);
            };
            request.onerror = (event) => reject((event.target as IDBRequest).error);
        });
    }
}

export const db = new IndexedDBService();