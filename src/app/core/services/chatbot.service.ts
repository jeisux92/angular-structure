import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor(private http: HttpClient) { }


  getSteps() {
    return this.http.get('assets/forms/questions.json')
  }

  getStep(step: number): Observable<any> {
    return this.http.get(`/assets/forms/question${step}.json`);
  }
}
