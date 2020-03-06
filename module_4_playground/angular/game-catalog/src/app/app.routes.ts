import { Routes } from '@angular/router';
import { GameListComponent } from './games/game-list.component';
import { CreateGameComponent } from './games/create-game.component';

export const appRoutes: Routes = [
  { path: 'games', component: GameListComponent },
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games/new', component: CreateGameComponent },
];