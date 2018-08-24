import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  private root = environment.notify;

  constructor(private http: HttpClient) { }

  sendEmailConfirmation(payload){
    const body = JSON.stringify(payload);
    return this.http.post(this.root, body);
  }


  sendEmailReference(payload){
    const body = JSON.stringify(payload);
    return this.http.post(this.root, body);
  }

}
