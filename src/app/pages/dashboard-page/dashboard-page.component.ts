import { Component, inject, OnInit } from '@angular/core';
import { DashboardLayoutComponent } from '../../layouts/dashboard-layout/dashboard-layout.component';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { AddTaskListDialogComponent } from '../../components/add-task-list-dialog/add-task-list-dialog.component';
import { TaskList } from '../../models/task_list';
import { TaskListHandlerService } from '../../services/task-list-handler.service';
import { AddTaskDialogComponent } from '../../components/add-task-dialog/add-task-dialog.component';
import { EditTaskDialogComponent } from '../../components/edit-task-dialog/edit-task-dialog.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    DashboardLayoutComponent,
    TaskListComponent,
    AddTaskDialogComponent,
    EditTaskDialogComponent,
    AddTaskListDialogComponent,
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
})
export class DashboardPageComponent implements OnInit {
  private TaskListHandler = inject(TaskListHandlerService);
  protected taskLists: TaskList[] = [];

  ngOnInit() {
    this.TaskListHandler.getTaskLists().subscribe((taskLists) => {
      this.taskLists = taskLists;
    });
  }
}
