import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  saveArray(key: string, value: unknown[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  loadArray(key: string): unknown[] {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  }

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
