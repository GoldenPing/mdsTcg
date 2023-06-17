import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class MainSeptorInterceptor implements HttpInterceptor {

  constructor(private auth : AuthService, private router : Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let ok : string;
    const started = Date.now();

    const authToken = this.auth.getToken();

    if(authToken === ''){
      this.router.navigateByUrl('/auth')
    }
    const authReq = request.clone({setHeaders : {Authorizaotion : authToken}})
    return next.handle(authReq).pipe(
      tap({
          next: (event) =>(ok = event instanceof HttpResponse ? 'succeeded' : '' ),
          error: (error) => (ok = 'failed ' + error.error.message)
      }),
      finalize(() =>{
        const elapsed = Date.now() - started;
        const msg = `${authReq.method} "${authReq.urlWithParams}"
           ${ok} in ${elapsed} ms.`;
        console.log(msg);
      })
    );
  }
}
