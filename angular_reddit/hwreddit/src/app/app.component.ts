import { Component,Input } from '@angular/core';
import { Article } from './article/article.model'; // <-- import '
/* here assigning specialstyle to variable*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  
  articles :Article[]; 
  articleSelected: Article;
 
  constructor()
  {
        this.articles =[];
        this.articleSelected=new Article("","");


}

 addArticle( ttitle :HTMLInputElement , link :HTMLInputElement) : boolean
  {
    console.log(`Adding article title: ${ttitle.value} and link: ${link.value}`);
     this.articles.push(new Article (ttitle.value,link.value,0) );
     return  false; // ???
  }

/* artTable parametr passed from ang selector directive class=retfromFunction */
  ifChosen(artTable: Article) : string
  {
    
    console.log( "selected :"+ artTable.link);
    if (artTable.link==this.articleSelected.link)
    {return "chosen";}
    else
    {return "";}
    
  }

  /* voteUp(article: Article):boolean
  {
    
    return  false;
  } */

  selectArticle(artTable :Article):void
  {
    this.articleSelected = artTable;

  }
  sortedArticles(): Article[] {
     return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
     }
    
}
