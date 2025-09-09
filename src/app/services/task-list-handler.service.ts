import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TaskList } from '../models/task_list';
import { LocalStorageService } from './local-storage.service';
import { Task } from '../models/task';
import { TASK_LISTS_KEY } from '../configs/localStorageKeys';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskListHandlerService {
  private http = inject(HttpClient);
  private localStorageService = inject(LocalStorageService);
  taskLists: TaskList[];
  TaskListsObs: BehaviorSubject<TaskList[]>;

  constructor() {
    this.taskLists = this.localStorageService.loadArray(
      TASK_LISTS_KEY,
    ) as TaskList[];
    this.TaskListsObs = new BehaviorSubject<TaskList[]>(this.taskLists);

    this.getTaskLists().subscribe((taskLists) => {
      this.localStorageService.saveArray(TASK_LISTS_KEY, taskLists);
    });
  }

  getTaskLists(): Observable<TaskList[]> {
    return this.TaskListsObs.asObservable();
  }

  createTaskList(taskList: TaskList) {
    this.taskLists.push(taskList);
    this.TaskListsObs.next(this.taskLists);
  }

  deleteTaskList(taskListId: TaskList['id']) {
    this.taskLists = this.taskLists.filter((t) => t.id !== taskListId);
    this.TaskListsObs.next(this.taskLists);
  }

  createTask(taskListId: TaskList['id'], task: Task) {
    const targetTaskList = this.taskLists.find((t) => t.id === taskListId);
    targetTaskList?.tasks.push(task);
    this.TaskListsObs.next(this.taskLists);
  }

  deleteTask(taskListId: TaskList['id'], taskId: Task['id']) {
    const targetTaskList = this.taskLists.find((t) => t.id === taskListId);
    targetTaskList!.tasks = targetTaskList!.tasks.filter(
      (t) => t.id !== taskId,
    );
    this.TaskListsObs.next(this.taskLists);
  }

  editTask(taskListId: TaskList['id'], task: Task) {
    const targetTaskList = this.taskLists.find((t) => t.id === taskListId);
    const taskIndex = targetTaskList!.tasks.findIndex((t) => t.id === task.id);
    if (taskIndex !== -1) {
      targetTaskList!.tasks[taskIndex] = task;
    }
    this.TaskListsObs.next(this.taskLists);
  }
}
