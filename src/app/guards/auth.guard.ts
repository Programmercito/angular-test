import { CanActivateFn, Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  sesion: String;
  const router = new Router();
  const sesion = sessionStorage.getItem('iniciado');
  if (sesion != null) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
