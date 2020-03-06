import { Component, Input } from '@angular/core';
import { Seller } from '../models/seller.model';

@Component({
  selector: 'app-game-sellers',
  templateUrl: './game-sellers.component.html',
})
export class GameSellersComponent {
  @Input() sellers: Seller[];
  @Input() gameName: string;
}
