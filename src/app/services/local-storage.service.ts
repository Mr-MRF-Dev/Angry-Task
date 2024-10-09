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

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
