import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../core/services/loading.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { StorageService } from '../../core/services/storage.service';

@Component({
  selector: 'one-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router, private loadingService: LoadingService,
    private fb: FormBuilder, private storageService: StorageService) {
    this.loginForm = this.fb.group({
      cellphone: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {

  }

  toOtp() {
    setTimeout(() => {
      const otp = this.loginForm.get('cellphone');
      this.storageService.set('otp', otp.value);
      this.loadingService.state.next(true);
      this.router.navigate(['one/otp']);
      this.loadingService.state.next(false);
    }, 500);
  }
}
