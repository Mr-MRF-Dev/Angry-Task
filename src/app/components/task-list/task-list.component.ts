import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Task } from '../../models/task';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgForOf, CardModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  tasks: Task[] = [
    { id: 1, title: 'Buy milk', completed: false },
    { id: 2, title: 'Buy bread', completed: true },
    { id: 3, title: 'Buy cheese', completed: false },
    { id: 4, title: 'Buy butter', completed: false },
    { id: 5, title: 'Buy eggs', completed: true },
    { id: 6, title: 'Buy jam', completed: true },
    { id: 7, title: 'Buy coffee', completed: false },
  ];
}
