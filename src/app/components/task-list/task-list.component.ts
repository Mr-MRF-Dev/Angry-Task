import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Task } from '../../models/task';
import { TaskItemComponent } from '../task-item/task-item.component';
import { ButtonModule } from 'primeng/button';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';
import { TaskList } from '../../models/task_list';
import { TaskListHandlerService } from '../../services/task-list-handler.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    TaskItemComponent,
    AddTaskDialogComponent,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  constructor(private taskListHandlerService: TaskListHandlerService) {}

  @Input() self!: TaskList;

  deleteTaskHandler(id: Task['id']) {
    this.taskListHandlerService.deleteTask(this.self.id, id);
  }

  newTaskHandler(task: Task) {
    this.taskListHandlerService.createTask(this.self.id, task);
  }
}
