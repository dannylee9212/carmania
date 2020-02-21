import { Component, OnInit } from '@angular/core';
import { RequestService, Articles } from 'src/app/lib/requests.service';
import { ActivatedRoute, Params} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styles: []
})
export class ArticleComponent implements OnInit {
  article: Articles;
  latestArticles: Articles[];
  content: string;
  constructor(
    private requestService: RequestService,
    private activatedRoute : ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    // get the post data
    this.getArticleData(this.activatedRoute.snapshot.params)
    console.log(this.activatedRoute.snapshot.params);


    // why i need to do this?
    this.activatedRoute.params.subscribe((params: Params)=> {
      console.log(params);
      this.getArticleData(this.activatedRoute.snapshot.params)
    }) 

    // get the lastest post
    this.requestService.getArticles({
      _sort: 'id', _order: 'desc', _limit:5
    }).subscribe(
      articles => {
        this.latestArticles = articles;
      }
    )
  };
  getArticleData(params) {
    this.requestService.getArticle(params).subscribe(
      article => {
        this.article = article;
        this.content = this.sanitizer.sanitize(1, article.content);
      }
    )
  };
}
