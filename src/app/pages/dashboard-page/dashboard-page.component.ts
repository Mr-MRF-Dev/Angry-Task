import { Component } from '@angular/core';
import { DashboardLayoutComponent } from '../../layouts/dashboard-layout/dashboard-layout.component';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { AddTaskListDialogComponent } from '../../components/add-task-list-dialog/add-task-list-dialog.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    DashboardLayoutComponent,
    TaskListComponent,
    AddTaskListDialogComponent,
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
})
export class DashboardPageComponent {}
