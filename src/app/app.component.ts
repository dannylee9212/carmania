import { Component, OnInit } from '@angular/core';
import { NavService } from './lib/nav.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  opened: boolean = true;
  constructor(
    private navService: NavService
  ) {

  }
  ngOnInit() {
    this.navService.sidenavStatus.subscribe((data)=> {
      this.opened = data
    })
  }

  updateNav(event: boolean) {
    this.navService.sidenavStatus.next(event);
  }
}
