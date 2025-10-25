import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { SearchPage } from './pages/search-page/search-page';

export const routes: Routes = [
  {
    path: "home",
    component: HomePage
  },
  {
    path: "search/:food",
    component: SearchPage
  }

];
