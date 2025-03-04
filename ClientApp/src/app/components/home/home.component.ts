import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InformationComponent } from '../information/information.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InformationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router){}
  
  goToQuizz() : void {
    this.router.navigate(['/quiz']);
  }

  goToDetector() : void {
    this.router.navigate(['/detector']);
  }
}
