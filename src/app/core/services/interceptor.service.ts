import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoadingService } from './loading.service';
import { finalize, tap } from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private loadingService: LoadingService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    this.loadingService.state.next(true);
    const authReq = req.clone({
      setHeaders: {
        'Authorization': environment.jwt,
        'Content-Type': "application/json"
      }
    });
    return next.handle(authReq).pipe(
      tap(
        event =>{},
        error => {
          swal({
            type: 'error',
            title: 'Error',
            text: error.error.message
          })
        }
      ),
      finalize(() =>
        this.loadingService.state.next(false)
      )
    );
  }
}
