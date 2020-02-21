import { Component, OnInit } from '@angular/core';
import { RequestService, Articles } from 'src/app/lib/requests.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-articles-home',
  templateUrl: './articles-home.component.html',
  styles: []
})
export class ArticlesHomeComponent implements OnInit {
  articles: Articles[]=[];
  start: number = 0;
  articleEnd: boolean;
  showSpinner = false;
  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit() {
    this.getArticle();

  }
  getArticle() {
    this.showSpinner = true;
    this.requestService.getArticles({
      _sort:"id", _order: "desc", _limit: 6, _start: this.start
    }).pipe().subscribe(data => {
      console.log(data);
      this.articles = [...this.articles, ...data];
      // why is it changed from data to this?
      this.start = this.start + 6;
      this.handleNoreMoreArticles(data);
      this.showSpinner = false;
    })
  }

  handleNoreMoreArticles(data: Articles[]) {
    if(data.length === 0) {
      this.articleEnd = true;
    }
  }

  onScroll() {
    this.getArticle();
  }
}
