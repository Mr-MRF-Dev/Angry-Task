import { Component, inject, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TaskItemComponent } from '../task-item/task-item.component';
import { ButtonModule } from 'primeng/button';
import { TaskList } from '../../models/task_list';
import { NewTaskHandlerService } from '../../services/new-task-handler.service';
import { TaskListHandlerService } from '../../services/task-list-handler.service';

@Component({
  selector: 'app-task-list',
  imports: [CardModule, ButtonModule, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  @Input() self!: TaskList;
  private taskListHandlerService = inject(TaskListHandlerService);
  private newTaskHandlerService = inject(NewTaskHandlerService);

  createNewTask() {
    this.newTaskHandlerService.requestNewTask(this.self.id);
  }

  deleteTaskList() {
    this.taskListHandlerService.deleteTaskList(this.self.id);
  }
}
