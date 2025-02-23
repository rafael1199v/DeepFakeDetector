import { Injectable } from '@angular/core';
import { HttpClient, HttpParameterCodec } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url: string = 'localhost:3000/api/classify';
  constructor(private http: HttpClient) { }

  classifyImage(imageBuffer: any) : Observable<any> {
    const fullUrl: string = this.url + '/image';

    console.log(typeof imageBuffer);

    return this.http.post<any>(fullUrl, imageBuffer);
  }


  classifyByUrl(imageUrl: string) : Observable<any> {
    const fullUrl: string = this.url + '/url';
    
    console.log('Image url = ', imageUrl);
    return this.http.post(fullUrl, imageUrl);
  }
}
