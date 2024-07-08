import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LocalstorageService } from '../services/localstorage.service';
import { Location } from '@angular/common';

export const loginGuard: CanActivateFn = (route, state) => {
  const ls=inject(LocalstorageService);
  const location=inject(Location);
  if(ls.getToken()){
      location.back();
      return false;
  }
  return true;
};
