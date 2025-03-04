import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from '../../models/quiz';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [],
  providers: [QuizService],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  quiz: Quiz | undefined;
  play: boolean = false;

  constructor(private quizService: QuizService){}

  ngOnInit() : void {
    this.getQuiz();
  }

  getQuiz() : void {
    this.quizService.getQuiz().subscribe(
      (result: any) => {
        this.quiz = result;
        console.log(this.quiz);
      },
      (error: Error) => {
        console.error(error);
      }
    );

  }


  playQuiz() : void {
    this.play = true;
  }

}
