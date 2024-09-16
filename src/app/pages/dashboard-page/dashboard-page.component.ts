import { Component, OnInit } from '@angular/core';
import { DashboardLayoutComponent } from '../../layouts/dashboard-layout/dashboard-layout.component';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { AddTaskListDialogComponent } from '../../components/add-task-list-dialog/add-task-list-dialog.component';
import { TaskList } from '../../models/list';

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
export class DashboardPageComponent implements OnInit {
  lists: TaskList[] = [];

  ngOnInit() {
    this.lists = [];
  }

  addNewListHandler(newList: TaskList) {
    this.lists.push(newList);
  }
}
