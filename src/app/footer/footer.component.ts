import { Component, OnInit } from '@angular/core';
import { NavService, Nav } from '../lib/nav.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  routes: Nav[];
  constructor(
    private navService: NavService
  ) { }

  ngOnInit() {
    this.routes = this.navService.routes;
  }

}
