import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../../node_modules/@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'one-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent implements OnInit {

  password: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.password = this.fb.group({
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  toFinal() {
    this.router.navigate(['/one/final']);

  }
}
