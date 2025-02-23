import { Component } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detector',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './detector.component.html',
  styleUrl: './detector.component.css'
})
export class DetectorComponent {

  imageForm: FormGroup = this.formBuilder.group({
    image: [null, [Validators.required]]
  });

  urlForm: FormGroup = this.formBuilder.group({
    url: ['', [Validators.required]]
  });


  constructor(private imageService: ImageService, private formBuilder: FormBuilder){}

  classifyImage() : void {
    console.log(this.imageForm.value);
  }
}
