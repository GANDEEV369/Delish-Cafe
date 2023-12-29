// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from './user.service';

export const authGuard: CanActivateFn = (route, state) => {  
  let service = inject(UserService);
  return service.getLoginStatus();
  
};