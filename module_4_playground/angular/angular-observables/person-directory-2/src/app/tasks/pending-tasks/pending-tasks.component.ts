import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TaskModel } from '../task.model';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pending-tasks',
  template: `
    <h3>Pending Tasks</h3>
    <app-task-list (changeTaskEventEmitter)="onChangeTaskEvent($event)" [tasks]="$tasks | async"></app-task-list>
    <app-task-adder (newTaskEvent)="onNewTaskEvent($event)"></app-task-adder>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class PendingTasksComponent implements OnInit {
  $tasks: Observable<TaskModel[]>;

  constructor(private taskService: TaskService) { }

  onNewTaskEvent(taskTitle) {
    const newTask = this.createNewTask(taskTitle);
    this.taskService.addTask(newTask);
    this.$tasks = this.taskService.getPendingTasks();
  }

  private createNewTask = (taskTitle: string): TaskModel => ({
    id: 0,
    completed: false,
    title: taskTitle
  });

  onChangeTaskEvent(taskId) {
    this.taskService.updateTask(taskId, true);
    this.$tasks = this.taskService.getPendingTasks();
  }

  ngOnInit() {
    this.$tasks = this.taskService.getPendingTasks();
  }
}
