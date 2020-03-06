import { Component, OnInit } from '@angular/core';
import { Game } from "./models/game.model";
import { GameStockService } from './services/game-stock.service';
import { Seller } from './models/seller.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'User Interactions Demo';
  // games: Game[];
  // show = true;
  // selectedGameInfo: string;
  // sellers: Seller[];

  // constructor(private gameStockService: GameStockService) {}

  // gameChangeHandler($event: any) {
  //   this.sellers = this.gameStockService.getGameSellers($event);
  //   const game = this.gameStockService.getGame($event);
  //   this.selectedGameInfo = `${game.name}, Age: ${game.getYearsFromRelease()}`;
  // }

  // createGameHandler($event: any) {
  //   this.gameStockService.addGame(this.map($event));
  // }

  // private map(formValues: any): Game {
  //   return new Game(formValues.name, formValues.daterelease, formValues.imageurl);
  // }

  // ngOnInit() {
  //   this.games = this.gameStockService.getGames();
  // }
}
