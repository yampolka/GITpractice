export class  Doctor {
 // ? neskol'ko klassov opisannyx v  одном файле??    tipa skonstruirovat; klass  композитный 
 
email: string;
id: number;
name: string;
phone: string;
username:  string;
website: string ;
votes: number;
   
 constructor (obj :any)

     {
       this.email = obj.email;
       this.name = obj.name;
       this.id = obj.id;
       this.username = obj.username;
     }

  }
  

  