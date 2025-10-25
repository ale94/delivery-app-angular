import { Component } from '@angular/core';
import { Topbar } from "../../components/topbar/topbar";
import { Hero } from "../../components/hero/hero";
import { Filters } from "../../components/filters/filters";
import { CardList } from "../../components/card-list/card-list";
import { SiteFooter } from "../../components/site-footer/site-footer";

@Component({
  selector: 'app-home-page',
  imports: [Topbar, Hero, Filters, CardList, SiteFooter],
  templateUrl: './home-page.html'
})
export class HomePage {

}
