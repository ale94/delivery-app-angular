import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topbar } from "./components/topbar/topbar";
import { SiteFooter } from "./components/site-footer/site-footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topbar, SiteFooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('delivery-app');
}
