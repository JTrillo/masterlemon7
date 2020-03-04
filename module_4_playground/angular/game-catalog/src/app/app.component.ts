import { Component, OnInit } from '@angular/core';
import { Game } from "./models/game.model";
import { GameStockService } from './services/game-stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'User Interactions Demo';
  games: Game[];
  show = true;

  constructor(private gameStockService: GameStockService) {}

  ngOnInit() {
    this.games = this.gameStockService.getGames();
  }
}
