/* eslint-disable @typescript-eslint/no-explicit-any */
import { FakeStorage } from './fake.storage';
import { Storage } from './storage';

export enum StorageType {
  Local = 'localStorage',
}

export const hasWindow = (): boolean => typeof window !== 'undefined';

export function getStorage(): Storage {
  const storage = getWindowStorage();
  return makeStorage(storage);
}

function getWindowStorage() {
  try {
    if (
      !hasWindow() ||
      (typeof localStorage === 'undefined')
    ) {
      return new FakeStorage();
    }

    return window[StorageType.Local];
  } catch (error) {
    console.warn("Error: storage.provider.ts:26 ~ getWindowStorage ~ error:", error)
    return new FakeStorage();
  }
}

function makeStorage(storage: any): Storage {
  return {
    get(key: string) {
      try {
        return JSON.parse(storage.getItem(key));
      } catch (err) {
        return null;
      }
    },

    put(key: string, value: any) {
      const data = JSON.stringify(value);
      storage.setItem(key, data);
    },

    remove(key: string) {
      storage.removeItem(key);
    },
  };
}
