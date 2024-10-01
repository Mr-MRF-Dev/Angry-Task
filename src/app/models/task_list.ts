import { Task } from './task';

export interface TaskList {
  id: number;
  title: string;
  description?: string;
  tasks: Task[];
}
