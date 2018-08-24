import { Injectable } from '@angular/core';
import { Subject } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbService {
  step:Subject<number> = new Subject<number>();
  constructor() { }
}
