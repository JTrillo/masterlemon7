import { Component } from '@angular/core';
import { GameStockService } from "../services/game-stock.service";
import { Game } from '../models/game.model';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styles: [`
    em { color: red; }
  `]
})
export class CreateGameComponent {
  name: string;
  imageurl: string;
  daterelease: string;
  mouseover: boolean;

  constructor(private gameStockService: GameStockService) {}

  createGame(formValues: any){
    const game = this.map(formValues);
    this.gameStockService.addGame(game);
  }

  private map(formValues: any): Game {
    return new Game(formValues.name, formValues.daterelease, formValues.imageurl);
  }
}
