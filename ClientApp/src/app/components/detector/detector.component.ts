import { AfterViewInit, Component } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebSnapshotComponent } from '../web-snapshot/web-snapshot.component';
import { DonutChartComponent } from '../donut-chart/donut-chart.component';


@Component({
  selector: 'app-detector',
  standalone: true,
  imports: [ReactiveFormsModule, DonutChartComponent],
  providers: [ImageService],
  templateUrl: './detector.component.html',
  styleUrl: './detector.component.css'
})
export class DetectorComponent implements AfterViewInit{

  selectedFile: File | null = null;
  existsResult: boolean = false;
  resultClassification: any = null;
  charClassification: any[] = [];

  constructor(private imageService: ImageService, private formBuilder: FormBuilder) {
  }


  ngAfterViewInit(): void {
    
  }

  onFileSelected(event: any) : void{
    this.selectedFile = <File>event.target.files[0];
    console.log('Archivo seleccionado', this.selectedFile);
  }

  classifyImage(event: Event) : void {
    event.preventDefault();

    if(!this.selectedFile)
      return;
    
    const formData = new FormData();
    formData.append('Image', this.selectedFile);

    this.imageService.classifyImage(formData).subscribe(
      (result) => {
        this.existsResult = true;
        this.resultClassification = result;
  
        if (this.resultClassification.classificationResult[0].class == "Fake") {
          this.charClassification = [
            this.resultClassification.classificationResult[0],
            this.resultClassification.classificationResult[1]
          ];
        } else {
          this.charClassification = [
            this.resultClassification.classificationResult[1],
            this.resultClassification.classificationResult[0]
          ];
        }
  
        console.log("Resultado de la clasificación", this.resultClassification);
      },
      (error) => {
        console.error("Error en la clasificación de la imagen", error);
      }
    );
  

  }


}

