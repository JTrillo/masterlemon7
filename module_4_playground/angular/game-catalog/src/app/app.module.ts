import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { GameStockService } from './services/game-stock.service';
import { SellerCategoryService } from "./services/seller-category.service";
import { GameRouterActivatorService } from './services/game-router-activator.service';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { GameSummaryComponent } from './games/game-summary.component';
import { GameSellersComponent } from './games/game-sellers.component';
import { CreateGameComponent } from './games/create-game.component';
import { GameListComponent } from './games/game-list.component';
import { CreateSellerComponent } from './sellers/create-seller.component';
import { NavbarComponent } from './home/navbar.component';
import { ErrorMessageComponent } from './errors/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    GameSummaryComponent,
    GameSellersComponent,
    CreateGameComponent,
    GameListComponent,
    CreateSellerComponent,
    NavbarComponent,
    ErrorMessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    GameStockService,
    SellerCategoryService,
    GameRouterActivatorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
