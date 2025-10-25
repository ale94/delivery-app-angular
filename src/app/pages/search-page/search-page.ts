import { Component, inject, OnInit, signal } from '@angular/core';
import { Shop } from '../../interfaces/shop';
import { ActivatedRoute } from '@angular/router';
import { Shops } from '../../services/shops';
import { CardItem } from "../../components/card-item/card-item";

@Component({
  selector: 'search-page',
  imports: [CardItem],
  templateUrl: './search-page.html'
})
export class SearchPage implements OnInit {

  shops = signal<Shop[]>([]);

  routeActivated = inject(ActivatedRoute)
  shopService = inject(Shops)

  ngOnInit(): void {
    this.routeActivated.paramMap.subscribe(params => {
      const type = params.get('food') ?? 'all';
      this.shops.set(this.shopService.getShopsByType(type));
    });
  }
}
