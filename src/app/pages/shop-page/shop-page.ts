import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shops } from '../../services/shops';
import { Shop } from '../../interfaces/shop';

@Component({
  selector: 'shop-page',
  imports: [],
  templateUrl: './shop-page.html'
})
export class ShopPage implements OnInit {

  routeActited = inject(ActivatedRoute);
  shopService = inject(Shops);

  shop = signal<Shop | undefined>(undefined);

  ngOnInit(): void {
    const id = Number(this.routeActited.snapshot.paramMap.get('id'));
    this.shop.set(this.shopService.getShopById(id));
  }


}
