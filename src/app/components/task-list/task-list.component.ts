import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Task } from '../../models/task';
import { ToastModule } from 'primeng/toast';
import { TaskItemComponent } from '../task-item/task-item.component';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';
import { TaskList } from '../../models/task_list';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    ToastModule,
    CardModule,
    ButtonModule,
    TaskItemComponent,
    AddTaskDialogComponent,
  ],
  providers: [MessageService],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  constructor(private messageService: MessageService) {}

  @Input() self!: TaskList;

  deleteTaskHandler(id: Task['id']) {
    const targetTask = this.self.tasks.find((task) => task.id === id);
    this.self.tasks = this.self.tasks.filter((task) => task.id !== id);
    this.messageService.add({
      severity: 'info',
      summary: 'Task Deleted',
      detail: `task '${targetTask?.title}' has been deleted`,
      life: 3000,
    });
  }

  newTaskHandler(task: Task) {
    this.self.tasks = [task, ...this.self.tasks];
    this.messageService.add({
      severity: 'success',
      summary: 'Task Added',
      detail: `task '${task.title}' has been added`,
      life: 3000,
    });
  }
}
