import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [PanelModule, FormsModule, ButtonModule, CheckboxModule, MenuModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Edit', icon: 'pi pi-pencil', command: () => this.editTask() },

      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => this.deleteTask(),
      },
    ];
  }

  editTask() {
    console.log('Edit Task');
  }

  deleteTask() {
    console.log('Delete Task');
  }
}
