import { Component, inject, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { TaskList } from '../../models/task_list';
import { TaskListHandlerService } from '../../services/task-list-handler.service';
import { EditTaskHandlerService } from '../../services/edit-task-handler.service';
@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [PanelModule, FormsModule, ButtonModule, CheckboxModule, MenuModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent implements OnInit {
  private editTaskHandlerService = inject(EditTaskHandlerService);
  private taskListHandlerService = inject(TaskListHandlerService);

  @Input() task!: Task;
  @Input() taskListId!: TaskList['id'];

  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => {
          this.editTaskHandlerService.requestEditTask(
            this.taskListId,
            this.task,
          );
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
}
