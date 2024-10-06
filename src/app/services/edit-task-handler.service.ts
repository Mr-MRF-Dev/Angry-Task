import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TaskList } from '../models/task_list';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class EditTaskHandlerService {
  private obs!: Subject<[TaskList['id'], Task]>;

  constructor() {
    this.obs = new Subject<[TaskList['id'], Task]>();
  }

  getObservable() {
    return this.obs.asObservable();
  }

  requestEditTask(taskListId: TaskList['id'], task: Task) {
    this.obs.next([taskListId, task]);
  }
}
