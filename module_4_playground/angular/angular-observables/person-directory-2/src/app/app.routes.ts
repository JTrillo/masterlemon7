import { Routes } from "@angular/router";
import { PendingTasksComponent } from "./tasks/pending-tasks/pending-tasks.component";
import { CompletedTasksComponent } from './tasks/completed-tasks/completed-tasks.component';

export const routes: Routes = [
  { path: 'tasks/pending', component: PendingTasksComponent },
  { path: 'tasks/completed', component: CompletedTasksComponent },
  { path: '', redirectTo: '/tasks/pending', pathMatch: 'full' }
];