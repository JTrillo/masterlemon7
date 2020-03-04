import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameSummaryComponent } from './games/game-summary.component';
import { GameStockService } from './services/game-stock.service';

@NgModule({
  declarations: [
    AppComponent,
    GameSummaryComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GameStockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
