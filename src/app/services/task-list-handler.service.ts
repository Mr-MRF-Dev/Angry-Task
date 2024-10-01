import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TaskList } from '../models/task_list';

@Injectable({
  providedIn: 'root',
})
export class TaskListHandlerService {
  taskLists: TaskList[] = [];
  TaskListsObs: Subject<TaskList[]>;

  constructor() {
    this.TaskListsObs = new Subject<TaskList[]>();
  }

  getTaskLists(): Observable<TaskList[]> {
    return this.TaskListsObs.asObservable();
  }

  createTaskList(taskList: TaskList) {
    this.taskLists.push(taskList);
    this.TaskListsObs.next(this.taskLists);
  }

  removeTaskList(taskList: TaskList) {
    this.taskLists = this.taskLists.filter((t) => t.id !== taskList.id);
    this.TaskListsObs.next(this.taskLists);
  }
}
