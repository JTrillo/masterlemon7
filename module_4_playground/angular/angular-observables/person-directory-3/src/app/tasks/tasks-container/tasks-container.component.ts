import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TaskModel } from '../task.model';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pending-tasks',
  template: `
    <table>
      <tr>
        <th><h3>Pending Tasks</h3></th>
        <th><h3>Completed Tasks</h3></th>
      </tr>
      <tr>
        <td>
          <app-task-list (changeTaskEventEmitter)="onChangeTaskToCompletedEvent($event)" [tasks]="$pendingTasks | async"></app-task-list>
          <app-task-adder (newTaskEvent)="onNewTaskEvent($event)"></app-task-adder>
        </td>
        <td>
          <app-task-list (changeTaskEventEmitter)="onChangeTaskToPendingEvent($event)" [tasks]="$completedTasks | async"></app-task-list>
        </td>
      </tr>
    </table>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class TasksContainerComponent implements OnInit {
  $pendingTasks: Observable<TaskModel[]>;
  $completedTasks: Observable<TaskModel[]>;

  constructor(private taskService: TaskService) { }

  onNewTaskEvent(taskTitle) {
    const newTask = this.createNewTask(taskTitle);
    this.taskService.addTask(newTask);
    this.$pendingTasks = this.taskService.getPendingTasks();
  }

  private createNewTask = (taskTitle: string): TaskModel => ({
    id: 0,
    completed: false,
    title: taskTitle
  });

  onChangeTaskToCompletedEvent(taskId) {
    this.taskService.updateTask(taskId, true);
    this.$pendingTasks = this.taskService.getPendingTasks();
    this.$completedTasks = this.taskService.getCompletedTasks();
  }

  onChangeTaskToPendingEvent(taskId) {
    this.taskService.updateTask(taskId, false);
    this.$pendingTasks = this.taskService.getPendingTasks();
    this.$completedTasks = this.taskService.getCompletedTasks();
  }

  ngOnInit() {
    this.$pendingTasks = this.taskService.getPendingTasks();
    this.$completedTasks = this.taskService.getCompletedTasks();
  }
}
