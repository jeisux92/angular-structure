import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadCrumbService } from '../../core/services/bread-crumb.service';

@Component({
  selector: 'one-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  constructor(private router: Router, private breadCrumbService: BreadCrumbService) { }

  ngOnInit() {
    this.breadCrumbService.step.next(2);
  }
  toFinal() {
    this.router.navigate(['/one/final']);
  }
}
