import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAdderComponent } from './task-adder/task-adder.component';
import { PendingTasksComponent } from './pending-tasks/pending-tasks.component';

@NgModule({
  declarations: [TaskListComponent, TaskAdderComponent, PendingTasksComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TasksModule { }
