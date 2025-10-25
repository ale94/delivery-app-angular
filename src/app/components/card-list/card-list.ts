import { Component, inject } from '@angular/core';
import { CardItem } from "../card-item/card-item";
import { Shops } from '../../services/shops';

@Component({
  selector: 'card-list',
  imports: [CardItem],
  templateUrl: './card-list.html'
})
export class CardList {

  shopService = inject(Shops);

}
