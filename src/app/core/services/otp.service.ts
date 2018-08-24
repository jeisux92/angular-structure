import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OtpService {

  private root = environment.otpUalet;
  private root2 = environment.validateOtp;
  constructor(private http: HttpClient) { }


  sendCodeOtp(payload) {
    const body = JSON.stringify(payload);
    return this.http.post(this.root, body);
  }

  validateOtp(payload){
    const body = JSON.stringify(payload);
    return this.http.post(this.root2, body);
  }

}
