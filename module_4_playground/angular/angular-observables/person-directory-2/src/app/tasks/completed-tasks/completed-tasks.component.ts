import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TaskModel } from '../task.model';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-completed-tasks',
  template: `
    <h3>Completed Tasks</h3>
    <app-task-list (changeTaskEventEmitter)="onChangeTaskEvent($event)" [tasks]="$tasks | async"></app-task-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class CompletedTasksComponent implements OnInit {
  $tasks: Observable<TaskModel[]>;

  constructor(private taskService: TaskService) { }

  onChangeTaskEvent(taskId) {
    this.taskService.updateTask(taskId, false);
    this.$tasks = this.taskService.getCompletedTasks();
  }

  ngOnInit() {
    this.$tasks = this.taskService.getCompletedTasks();
  }

}
