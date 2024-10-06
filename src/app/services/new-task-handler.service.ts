import { Injectable } from '@angular/core';
import { TaskList } from '../models/task_list';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewTaskHandlerService {
  private obs!: Subject<TaskList['id']>;

  constructor() {
    this.obs = new Subject<TaskList['id']>();
  }

  getObservable() {
    return this.obs.asObservable();
  }

  requestNewTask(taskListId: TaskList['id']) {
    this.obs.next(taskListId);
  }
}
