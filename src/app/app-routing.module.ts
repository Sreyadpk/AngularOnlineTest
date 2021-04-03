import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { QuizComponent } from "./quiz/quiz.component";


export const applicationRoutes : Routes = [
    //{ path : '',component : HomeComponent },
     { path : '',redirectTo : 'main' ,pathMatch:'full' },
     { path : 'main',component : MainComponent },
     { path : 'quiz',component : QuizComponent },
     { path : '**',component : PageNotFoundComponent }

]