import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  set(key: string, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    return JSON.parse(sessionStorage[key]);
  }
}
