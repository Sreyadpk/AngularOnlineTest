import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Quiz } from '../models/quiz';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  alert : boolean = false;
  matchCount : number = 0;
  quizzes : any;
  data : any;
  quiz : Quiz = new Quiz();

  length : number;
  selectedAns : string[];
  answer : string[];

  constructor(private _httpClient : HttpClient) { }

  ngOnInit(): void {
    //  Get quiz Questions and options from quiz.json
    this._httpClient.get("http://localhost:3000/quiz").subscribe((result) => {
      this.quizzes = result;
      this.length = this.quizzes.length;
      console.log(result);},
      (errors) => {console.log("There are some errors" + errors);}
    );
    //  Get answers from answers.json
    this._httpClient.get("http://localhost:3001/answers").subscribe((result) => {
      this.answer=<string[]>result;
      console.log(this.answer);
      },
      (errors) => {console.log("There are some errors" + errors);}
    );
  }
  onSubmit(subForm : NgForm) {
    this.data = subForm.value;
    console.log("------------------");
     this.selectedAns = [this.data.selected1,this.data.selected2,this.data.selected3,this.data.selected4];
     console.log(this.selectedAns);
     console.log("------------------");
     console.log(this.answer);
    console.log("------------------"); 
    for (var i=0;i<this.length;i++) {
      if(this.answer[i] == this.selectedAns[i]){
        console.log("match found");
        this.matchCount++;
      }
    }
    console.log("matchCount" + this.matchCount);
    this.alert = true;
    subForm.form.reset(); 
   // for(var n=1;n<=this.length;n++){
   //   console.log("data selected" + data.selected[n]);
    //}
  }
  closeAlert(){
    this.alert = false;
  }
}  