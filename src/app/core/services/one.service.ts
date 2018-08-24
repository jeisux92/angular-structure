import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OneService {

  constructor(private http: HttpClient) { }

  enroll(user: any): Observable<any> {
    const paylaod = {
      UserId: user[2].description,
      IdentificationType: "CD",
      IdentificationNumber: user[3].description,
      ConfigId: "Veb2123123qweqProxy",
      CompanyNIT: "900.440.034",
      Form32Data: {
        FirstName: user[0].description,
        MiddleName: null,
        LastName: user[1].description,
        SecondLastName: null,
        IdentificationType: "CD",
        Identification: user[3].description
      }
    };

    return this.http.post(`${environment.url}enrollment/form`, JSON.stringify(paylaod));
  }
}
