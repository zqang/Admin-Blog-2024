import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('auth_token');

  if (token) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next(authReq).pipe(catchError(handleError));
  }

  return next(req);
};

export const handleError = (error: any): Observable<never> => {
  if (error instanceof HttpErrorResponse) {
    if (error.status === 401) {
      // Handle unauthorized error (e.g., navigate to login)
      console.error('Unauthorized access!');
      // Handle error based on your application logic (e.g., redirect, logout)
    } else if (error.error) {
      // Extract error message from body or status text
      const errorMessage = error.error.message || error.statusText;
      console.error(errorMessage);
    } else {
      console.error('HTTP error: ', error);
    }
  } else {
    console.log('An error occurred:', error);
  }
  return throwError(() => error);
};
