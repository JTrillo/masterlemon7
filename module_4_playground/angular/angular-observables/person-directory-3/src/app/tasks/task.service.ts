import { Injectable } from '@angular/core';
import { TaskModel } from './task.model';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";

let tasks: TaskModel[] = [
  { id: 1, title: 'baba', completed: false },
  { id: 2, title: 'nana', completed: true },
  { id: 3, title: 'tachan', completed: false },
];

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getPendingTasks(): Observable<TaskModel[]> {
    return of(tasks).pipe(
      map((tasks) => tasks.filter(t => !t.completed))
    );
  }

  getCompletedTasks(): Observable<TaskModel[]> {
    return of(tasks).pipe(
      map((tasks) => tasks.filter(t => t.completed))
    );
  }

  addTask(task: TaskModel) {
    task.id = tasks.length + 1;
    tasks = [...tasks, task];
  }

  updateTask(taskId, completed) {
    tasks = tasks.map((t) => {
      if(t.id === taskId) {
        t.completed = completed;
      }
      return t;
    });
  }
}
