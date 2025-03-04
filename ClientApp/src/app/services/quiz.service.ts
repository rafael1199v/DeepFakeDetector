import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Quiz } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  url: string = environment.API_URL + '/quiz';
  constructor(private http: HttpClient) { }

  getQuiz() : Observable<Quiz> {
    return this.http.get<Quiz>(this.url);
  }
}
