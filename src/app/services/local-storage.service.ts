import { Injectable } from '@angular/core';
import { TaskList } from '../models/task_list';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  // constructor() {}

  save(key: string, value: TaskList[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  load(key: string): TaskList[] {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  }
}
