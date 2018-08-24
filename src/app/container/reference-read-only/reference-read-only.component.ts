import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'one-reference-read-only',
  templateUrl: './reference-read-only.component.html',
  styleUrls: ['./reference-read-only.component.scss']
})
export class ReferenceReadOnlyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  toPassword() {
    this.router.navigate(['one/createpassword']);
  }
}
