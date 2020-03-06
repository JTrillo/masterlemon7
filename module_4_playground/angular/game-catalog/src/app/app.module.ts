import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { GameStockService } from './services/game-stock.service';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { GameSummaryComponent } from './games/game-summary.component';
import { GameSellersComponent } from './games/game-sellers.component';
import { CreateGameComponent } from './games/create-game.component';
import { GameListComponent } from './games/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GameSummaryComponent,
    GameSellersComponent,
    CreateGameComponent,
    GameListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    GameStockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
