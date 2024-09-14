import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    ConfirmDialogModule,
    PanelModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    MenuModule,
  ],
  providers: [ConfirmationService],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  items: MenuItem[] | undefined;

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit() {
    this.items = [
      { label: 'Edit', icon: 'pi pi-pencil', command: () => this.editTask() },

      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => this.deleteTaskConfirm(),
      },
    ];
  }

  protected deleteTaskConfirm() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this task?',
      header: 'Danger Zone',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Cancel',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Delete',
        severity: 'danger',
      },

      accept: () => {
        this.deleteTask();
      },
    });
  }

  editTask() {
    console.log('Edit Task');
  }

  deleteTask() {
    console.log('Delete Task');
  }
}
