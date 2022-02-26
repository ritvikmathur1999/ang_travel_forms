import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { AuthService } from './services/auth.service';


@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  constructor(public auth:AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const updatedReq = req.clone({
      headers:req.headers.set(this.auth.authKey,this.auth.authVal)
    })
    console.log("Before making an API Call...", updatedReq)
    return next.handle(updatedReq)
    .pipe(
      
      map(res=>{
        if(res instanceof HttpResponse){
          this.auth.tokenResponse(this.auth.authKey,updatedReq.headers.get(this.auth.authKey))
          return res.clone({body:[res.body,{auth:updatedReq.headers.get(this.auth.authKey)}]})
        }
        else
        return null
      }
      ),
      catchError((error)=>{
        return throwError(()=> new Error('response Error'))
      })
      )
  }
}
