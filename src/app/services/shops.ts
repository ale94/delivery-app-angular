import { Injectable, signal } from '@angular/core';
import { Shop } from '../interfaces/shop';

@Injectable({
  providedIn: 'root'
})
export class Shops {
  data: Shop[] = [
    {
      name: 'Pizzería Don Mario',
      type: 'pizza',
      description: 'Pizzas artesanales con masa madre y horno a leña 🍕',
      address: 'Av. San Martín 123',
      hours: '19:00 - 00:00',
      delivery: true,
      img: 'https://italiayotraspasiones.com/wp-content/uploads/2025/03/milan-lombardia-italia-comida-berbere-pizza.jpg',
      link: 'detalle.html?restaurante=donmario'
    },
    {
      name: 'Burger Town',
      type: 'hamburguesas',
      description: 'Hamburguesas gourmet con papas caseras 🍔',
      address: 'Calle Falsa 456',
      hours: '12:00 - 23:00',
      delivery: true,
      img: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
      link: 'detalle.html?restaurante=burgertown'
    },
    {
      name: 'Sushi Master',
      type: 'sushi',
      description: 'Sushi fresco y creativo 🍣',
      address: 'Av. Libertador 789',
      hours: '18:00 - 23:30',
      delivery: false,
      img: 'https://images.unsplash.com/photo-1553621042-f6e147245754',
      link: 'detalle.html?restaurante=sushimaster'
    },
    {
      name: 'Empanadas La 123',
      type: 'empanadas',
      description: 'Empanadas caseras de carne, pollo y jamón y queso 🥟',
      address: 'Calle Córdoba 321',
      hours: '11:00 - 22:00',
      delivery: true,
      img: 'https://assets.unileversolutions.com/recipes-v2/209726.jpg',
      link: 'detalle.html?restaurante=empanadas123'
    },
    {
      name: 'Dulce Tentación',
      type: 'postres',
      description: 'Pasteles, tartas y postres artesanales 🍰',
      address: 'Av. Rivadavia 654',
      hours: '10:00 - 20:00',
      delivery: false,
      img: 'https://mandolina.co/wp-content/uploads/2023/06/postre-de-maracuya.png',
      link: 'detalle.html?restaurante=dulcetentacion'
    }
  ];

  shops = signal<Shop[]>([]);

  constructor() {
    this.getShops();
  }

  getShops() {
    this.shops.set(this.data);
  }

  getShopsByType(type: string): Shop[] {
    if (!type || type === 'all') return this.shops();
    return this.shops().filter(shop => shop.type === type);
  }


}
