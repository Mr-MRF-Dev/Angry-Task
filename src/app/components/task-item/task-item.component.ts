import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../models/task';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';
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
  @Output() deleteTask = new EventEmitter<Task['id']>();

  showEditDialog: boolean = false;
  items: MenuItem[] | undefined;

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
          this.deleteTask.emit(this.task.id);
        },
      },
    ];
  }
}
