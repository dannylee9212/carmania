import { Component, OnInit } from '@angular/core';
import { RequestService , Articles} from './../lib/requests.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  carouselArticles: Articles[];
  homeArticles: Articles[];
  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit() {
    this.requestService.getArticles({
      _sort:'id', _order:'desc', _start:0, _end:5
    }).subscribe(data => { this.carouselArticles = data;
    console.log(data)});


    // get articles 
    this.requestService.getArticles({
      _sort:'id', _order:'desc', _start: 5, _limit:6
    }).subscribe(data=>{
      this.homeArticles = data;
    })
  }

}
