import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WebcamComponent, WebcamImage, WebcamModule, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-web-snapshot',
  standalone: true,
  imports: [WebcamModule],
  templateUrl: './web-snapshot.component.html',
  styleUrl: './web-snapshot.component.css'
})
export class WebSnapshotComponent implements AfterViewInit, OnInit {

  cameraAvailable: boolean = false;
  trigger: Subject<void> = new Subject();

  get $trigger(): Observable<void> {
    return this.trigger.asObservable();
  }

  @ViewChild('webcamVideo')
  public webcam!: ElementRef;

  ngAfterViewInit(): void {
    //this.activateCamera();
  }

  ngOnInit() : void {
    // WebcamUtil.getAvailableVideoInputs()
    //   .then((mediaDevices: MediaDeviceInfo[]) => {
    //     this.cameraAvailable = mediaDevices && mediaDevices.length > 0;
    //   });
  }

  capture() : void {
    this.trigger.next();
  }

  snapshot(event: WebcamImage) {
    console.log(event);
  }

  activateCamera() : void {
    if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error('Hubo un error al inicializar la camara');
      return;
    }

    const constraints = {
      video: {
        width: 300,
        height: 200,
        facingMode: 'environment'
      }
    }

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        this.webcam.nativeElement.srcObject = stream;
        this.webcam.nativeElement.play();
      }) 
      .catch((error) => {
        console.error(error);
      })
  }


  enableCamera() : void {
    this.cameraAvailable = !this.cameraAvailable;
  }
}


