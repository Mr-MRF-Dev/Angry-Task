import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Task } from '../../models/task';
import { NgForOf } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgForOf, CardModule, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  tasks: Task[] = [
    { id: 1, title: 'Buy milk', completed: false, description: 'some info' },
    { id: 2, title: 'Buy bread', completed: true },
    { id: 3, title: 'Buy cheese', completed: false },
    { id: 4, title: 'Buy butter', completed: false },
    { id: 5, title: 'Buy eggs', completed: true },
    { id: 6, title: 'Buy jam', completed: true },
    { id: 7, title: 'Buy coffee', completed: false },
    { id: 8, title: 'Buy tea', completed: false },
    { id: 9, title: 'Buy sugar', completed: false },
    { id: 10, title: 'Buy honey', completed: false },
    { id: 11, title: 'Buy flour', completed: false },
    { id: 12, title: 'Buy rice', completed: true },
    { id: 13, title: 'Buy pasta', completed: false },
    { id: 14, title: 'Buy sauce', completed: true },
    { id: 15, title: 'Buy spices', completed: false },
    { id: 16, title: 'Buy nuts', completed: true },
    { id: 17, title: 'Buy seeds', completed: false },
    { id: 18, title: 'Buy chocolate', completed: true },
    { id: 19, title: 'Buy yogurt', completed: false },
    { id: 20, title: 'Buy ice cream', completed: true },
    { id: 21, title: 'Buy chips', completed: false },
    { id: 22, title: 'Buy cookies', completed: true },
    { id: 23, title: 'Buy cake mix', completed: false },
    { id: 24, title: 'Buy baking powder', completed: true },
    { id: 25, title: 'Buy vinegar', completed: false },
    { id: 26, title: 'Buy oil', completed: true },
    { id: 27, title: 'Buy ketchup', completed: false },
    { id: 28, title: 'Buy mustard', completed: true },
    { id: 29, title: 'Buy mayonnaise', completed: false },
    { id: 30, title: 'Buy salad dressing', completed: true },
    { id: 31, title: 'Buy pickles', completed: false },
    { id: 32, title: 'Buy olives', completed: true },
    { id: 33, title: 'Buy salsa', completed: false },
    { id: 34, title: 'Buy hummus', completed: true },
    { id: 35, title: 'Buy peanut butter', completed: false },
    { id: 36, title: 'Buy jelly', completed: true },
    { id: 37, title: 'Buy granola', completed: false },
    { id: 38, title: 'Buy cereal', completed: true },
    { id: 39, title: 'Buy oatmeal', completed: false },
    { id: 40, title: 'Buy tea bags', completed: true },
  ];

  deleteTaskHandler(id: Task['id']) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
