import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAdderComponent } from './task-adder/task-adder.component';
import { TasksContainerComponent } from './tasks-container/tasks-container.component';

@NgModule({
  declarations: [TaskListComponent, TaskAdderComponent, TasksContainerComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TasksModule { }
