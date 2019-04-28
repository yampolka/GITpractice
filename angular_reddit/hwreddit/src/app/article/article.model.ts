export class Article 
{

    title: string;
    link: string;
    votes: number;
   

// why we need it????
//podozrenie inache by ne coxranqlis;

  constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
      }
    
    voteUP (): boolean
    {
        this.votes+=1;
        return false;
    }
    
    voteDown (): boolean
    {
        this.votes -=1;
        return false;
    }


}