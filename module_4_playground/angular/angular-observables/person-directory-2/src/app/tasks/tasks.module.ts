import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAdderComponent } from './task-adder/task-adder.component';
import { PendingTasksComponent } from './pending-tasks/pending-tasks.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';

@NgModule({
  declarations: [TaskListComponent, TaskAdderComponent, PendingTasksComponent, CompletedTasksComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TasksModule { }
