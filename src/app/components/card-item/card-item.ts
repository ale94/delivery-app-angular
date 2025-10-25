import { Component, input } from '@angular/core';
import { Shop } from '../../interfaces/shop';

@Component({
  selector: 'card-item',
  imports: [],
  templateUrl: './card-item.html'
})
export class CardItem {

  shop = input.required<Shop>();

}
