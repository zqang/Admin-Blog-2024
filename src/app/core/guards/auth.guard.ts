import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export const AuthGuard: CanActivateFn = () => {
  const jwtHelper = inject(JwtHelperService);
  const router = inject(Router);

  //get the jwt token which are present in the local storage
  const token = localStorage.getItem('jwt');

  //Check if the token is expired or not and if token is expired then redirect to login page and return false
  if (token && !jwtHelper.isTokenExpired(token)) {
    return true;
  }
  router.navigate(['auth/login']);
  return false;
};
