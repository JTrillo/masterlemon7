import { Routes } from '@angular/router';
import { GameListComponent } from './games/game-list.component';
import { CreateGameComponent } from './games/create-game.component';
import { CreateSellerComponent } from './sellers/create-seller.component';
import { GameSellersComponent } from './games/game-sellers.component';
import { ErrorMessageComponent } from './errors/error-message.component';
import { GameRouterActivatorService } from './services/game-router-activator.service';

export const appRoutes: Routes = [
  { path: 'games', component: GameListComponent },
  { path: 'games/new', component: CreateGameComponent },
  { path: 'games/:id', component: GameSellersComponent, canActivate: [GameRouterActivatorService] },
  { path: 'sellers/new', component: CreateSellerComponent },
  { path: '404', component: ErrorMessageComponent },
  { path: '', redirectTo: '/games', pathMatch: 'full' },
];