import { Component, Input } from '@angular/core';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-game-summary',
  templateUrl: './game-summary.component.html',
  styles: []
})
export class GameSummaryComponent {
  @Input() game: Game;
}
