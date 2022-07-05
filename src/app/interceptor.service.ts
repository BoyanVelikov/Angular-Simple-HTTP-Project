import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class Interceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler){
        console.log('Request is intercepted!');
        return next.handle(req);      
    }
}