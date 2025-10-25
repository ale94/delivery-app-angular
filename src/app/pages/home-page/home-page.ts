import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { Filters } from "../../components/filters/filters";
import { CardList } from "../../components/card-list/card-list";

@Component({
  selector: 'app-home-page',
  imports: [Hero, Filters, CardList,],
  templateUrl: './home-page.html'
})
export class HomePage {

}
