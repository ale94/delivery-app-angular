import { Component, inject, input } from '@angular/core';
import { Shop } from '../../interfaces/shop';
import { Router } from '@angular/router';

@Component({
  selector: 'card-item',
  imports: [],
  templateUrl: './card-item.html'
})
export class CardItem {

  router = inject(Router);

  shop = input.required<Shop>();

  goToShop(id: number) {
    this.router.navigate(['/comercio', id]);
  }

}
