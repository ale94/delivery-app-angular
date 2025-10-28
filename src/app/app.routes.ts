import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { SearchPage } from './pages/search-page/search-page';
import { ShopPage } from './pages/shop-page/shop-page';

export const routes: Routes = [
  {
    path: "inicio",
    component: HomePage,
  },
  {
    path: "buscar/:comida",
    component: SearchPage
  },
  {
    path: "comercio/:id",
    component: ShopPage
  },
  {
    path: "**",
    redirectTo: "inicio",
  }

];
