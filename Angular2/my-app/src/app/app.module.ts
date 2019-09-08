import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {QuestionComponent} from "./components/question.component";
import {SelectComponent} from "./components/QuestionTypeComponents/select/select.component";

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
