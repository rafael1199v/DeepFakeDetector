import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InformationComponent } from './components/information/information.component';
import { DetectorComponent } from './components/detector/detector.component';
import { QuizComponent } from './components/quiz/quiz.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: 'full'
    },
    {
        path: "home",
        title: "Home",
        component: HomeComponent
    },
    {
        path: "quiz",
        title: "Quiz",
        component: QuizComponent
    },
    {
        path: "detector",
        title: "Detector",
        component: DetectorComponent
    }
];
