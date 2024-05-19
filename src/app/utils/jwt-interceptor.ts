import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddBodyToGetInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'GET' && req.url.includes('book/')) {
      const clonedRequest = req.clone({
        headers: req.headers.set('Content-Type', 'application/json'),
        body: { userId: '11' }
      });
      return next.handle(clonedRequest);
    }
    return next.handle(req);
  }
}
