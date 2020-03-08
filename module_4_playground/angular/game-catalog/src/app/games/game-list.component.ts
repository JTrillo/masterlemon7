import { Component, OnInit } from '@angular/core';
import { GameStockService } from '../services/game-stock.service';
import { Game } from '../models/game.model';
import { Seller } from '../models/seller.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styles: []
})
export class GameListComponent implements OnInit {
  title = 'User Interactions Demo';
  games: Game[];
  selectedGameInfo: string;
  sellers: Seller[];

  constructor(private gameStockService: GameStockService) {}

  ngOnInit() {
    this.games = this.gameStockService.getGames();
  }
}
