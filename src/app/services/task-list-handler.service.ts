import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TaskList } from '../models/task_list';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TaskListHandlerService {
  taskLists: TaskList[];
  TaskListsObs: BehaviorSubject<TaskList[]>;

  constructor(private localStorageService: LocalStorageService) {
    this.taskLists = this.localStorageService.load('taskLists');
    this.TaskListsObs = new BehaviorSubject<TaskList[]>(this.taskLists);

    this.getTaskLists().subscribe((taskLists) => {
      this.localStorageService.save('taskLists', taskLists);
    });
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
