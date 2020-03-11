import { Routes } from "@angular/router";
import { PendingTasksComponent } from "./tasks/pending-tasks/pending-tasks.component";

export const routes: Routes = [
  { path: 'tasks/pending', component: PendingTasksComponent },
  { path: '', redirectTo: '/tasks/pending', pathMatch: 'full' }
];