import { Routes } from "@angular/router";
import { TasksContainerComponent } from "./tasks/tasks-container/tasks-container.component";

export const routes: Routes = [
  { path: 'tasks', component: TasksContainerComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];