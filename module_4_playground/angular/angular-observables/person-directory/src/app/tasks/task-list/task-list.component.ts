import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskModel } from '../task.model';

@Component({
  selector: 'app-task-list',
  template: `
    <div *ngFor="let task of tasks">
      <span>{{task.title}}</span>
      <input (change)="onChange(task.id)" [checked]="task.completed" type="checkbox">
    </div>
  `,
  styles: []
})
export class TaskListComponent {
  @Input() tasks: TaskModel[];
  @Output()
  changeTaskEventEmitter: EventEmitter<number> = new EventEmitter<number>();

  onChange(taskId) {
    this.changeTaskEventEmitter.emit(taskId);
  }
}
