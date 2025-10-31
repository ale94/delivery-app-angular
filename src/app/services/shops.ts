import { inject, Injectable, signal } from '@angular/core';
import { Shop } from '../interfaces/shop';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Shops {

  http = inject(HttpClient);

  shops = signal<Shop[]>([]);
  url = "http://localhost:8080";

  constructor() {
    this.getShops();
  }

  getShops() {
    this.http.get<Shop[]>(`${this.url}/api/shops`).subscribe(resp => {
      this.shops.set(resp);
    }
    );
  }

  getShopsByTag(tag: string): Observable<Shop[]> {
    return this.http.get<Shop[]>(`${this.url}/api/shops/tag/${tag}`);
  }

  getShopById(id: number): Observable<Shop> {
    return this.http.get<Shop>(`${this.url}/api/shops/${id}`);
  }


}
