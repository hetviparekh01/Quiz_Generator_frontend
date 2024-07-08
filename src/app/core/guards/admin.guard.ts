import { CanActivateFn } from '@angular/router';
import { LocalstorageService } from '../services/localstorage.service';
import { inject } from '@angular/core';
import { Location } from '@angular/common';

export const adminGuard: CanActivateFn = (route, state) => {
  const ls=inject(LocalstorageService);
  const location=inject(Location);
  if(ls.getRole()!=='admin'){
      location.back();
      return false;
  }
  return true;
};
