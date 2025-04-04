import { Injectable } from '@angular/core';
import { HttpClient, HttpParameterCodec } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url: string = environment.API_URL_NET + '/classify';
  constructor(private http: HttpClient) { }

  classifyImage(imageBuffer: FormData) : Observable<any> {
    const fullUrl: string = this.url + '/image';
    return this.http.post<any>(fullUrl, imageBuffer);
  }


  classifyByUrl(imageUrl: string) : Observable<any> {
    const fullUrl: string = this.url + '/url';
    
    console.log('Image url = ', imageUrl);
    return this.http.post(fullUrl, imageUrl);
  }
}
