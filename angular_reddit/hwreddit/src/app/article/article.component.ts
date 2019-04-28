import { Component, OnInit , Input, HostBinding
} from '@angular/core';
import {Article} from "./article.model";


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  @Input() article: Article;
 
  @HostBinding('attr.class') cssClass = 'row';

 
  constructor() {
  this.article = new Article("kkk","link  my");
 
    // so we don't need anything here
  }

 
  ngOnInit() {
  }

}
