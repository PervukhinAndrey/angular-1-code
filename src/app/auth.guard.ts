import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authDataJson = localStorage.getItem('auth');
  let isLoggedIn = false;
  if (authDataJson) {
    const authData = JSON.parse(authDataJson);
    isLoggedIn =
      authData?.timestamp && Date.now() - authData?.timestamp < 900000;
  }

  if (isLoggedIn) {
    return true;
  }
  router.navigate(['/auth/login']);
  return false;
};
