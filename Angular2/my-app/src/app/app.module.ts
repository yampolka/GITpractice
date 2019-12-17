import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatRadioModule} from '@angular/material'; // added
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { RadioButtonListQuestionComponent } from './radio-button-list-question/radio-button-list-question.component';
import { TextQuestionComponent } from './text-question/text-question.component';
import {HttpClientModule}  from '@angular/common/http';
import {UsersForTestingComponent} from './usersfortesting.component';
import {RouterModule, Routes } from '@angular/router';
import {QuestionsComponent}  from './Questions/questions.component';


const appRoutes: Routes = [
  {path: 'GeogeUsers', component:UsersForTestingComponent },
  {path: 'Q', component:QuestionsComponent },

  
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    RadioButtonListQuestionComponent,
    TextQuestionComponent,
    UsersForTestingComponent
   
  ],
  
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
   ,
    BrowserModule,
    NoopAnimationsModule,
    MatRadioModule, //added
    FormsModule,
    HttpClientModule
  ],

  bootstrap: [AppComponent],
 
})

export class AppModule { }
