import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../services/localstorage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private ls:LocalstorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = this.ls.getToken();
    if (authToken) {
      const authReq = request.clone({
        setHeaders: {
          authorization:`Bearer ${authToken}`
        }
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
