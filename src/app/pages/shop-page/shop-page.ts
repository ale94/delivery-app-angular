import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shops } from '../../services/shops';
import { Shop } from '../../interfaces/shop';

@Component({
  selector: 'shop-page',
  imports: [],
  templateUrl: './shop-page.html'
})
export class ShopPage {

  routeActited = inject(ActivatedRoute);
  shopService = inject(Shops);

  shop = signal<Shop | null>(null);

  ngOnInit(): void {
    const id = Number(this.routeActited.snapshot.paramMap.get('id'));
    this.shopService.getShopById(id).subscribe(resp => {
      this.shop.set(resp);
    });
  }


}
