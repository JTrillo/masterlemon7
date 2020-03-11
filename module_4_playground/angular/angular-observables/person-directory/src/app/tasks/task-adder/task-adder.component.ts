import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-adder',
  template: `
    <input type="text" [(ngModel)]="taskInput">
    <button (click)="onAddTask()" [disabled]="!taskInput">+</button>
  `,
  styles: []
})
export class TaskAdderComponent {
  taskInput = '';
  @Output()
  newTaskEvent: EventEmitter<string> = new EventEmitter<string>();

  onAddTask() {
    this.newTaskEvent.emit(this.taskInput);
    this.taskInput = '';
  }
}
