import { Component, inject, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';
import { TaskList } from '../../models/task_list';
import { TaskListHandlerService } from '../../services/task-list-handler.service';
@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    PanelModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    MenuModule,
    EditTaskDialogComponent,
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;

  @Input() taskListId!: TaskList['id'];
  private taskListHandlerService = inject(TaskListHandlerService);

  showEditDialog = false;
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => {
          this.showEditDialog = true;
        },
      },

      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
          this.taskListHandlerService.deleteTask(this.taskListId, this.task.id);
        },
      },
    ];
  }

  editTaskHandler(task: Task) {
    this.task = task;
    this.taskListHandlerService.editTask(this.taskListId, this.task);
    this.showEditDialog = false;
  }
}
