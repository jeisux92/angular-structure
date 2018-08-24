import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { OtpService } from '../../core/services/otp.service';
import swal from 'sweetalert2';
import { StorageService } from '../../core/services/storage.service';
import { Router } from '@angular/router';
import { BreadCrumbService } from '../../core/services/bread-crumb.service';

@Component({
  selector: 'one-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  number = [0, 0, 0, 0];
  validate: string;
  aux = 0;
  modelForm: FormGroup;
  payload: any;
  private requestCode0: number;
  private requestCode1: number;
  private requestCode2: number;
  private requestCode3: number;

  constructor(private formBuilder: FormBuilder, private otpService: OtpService,
    private storageService: StorageService, private router: Router, private breadCrumbService: BreadCrumbService) {
    this.breadCrumbService.step.next(2);
    this.modelForm = this.formBuilder.group({
      requestCode1: '',
      requestCode2: '',
      requestCode3: '',
      requestCode4: ''
    });

  }

  ngOnInit() {
    this.sendOtp();
  }


  private sendOtp() {
    this.payload = {
      IdConfig: "EB50E9DF-7E30-421A-99B7-E1EA49E3A1AB",
      To: this.storageService.get('otp')
    };
    this.otpService.sendCodeOtp(this.payload).subscribe(success => {
      console.log("Esto es success" + success);
    }, error => {
      console.log("Esto es error" + error);
    });
  }

  keyup(e) {
    if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105) {
      if (+e.key == 0 || +e.key) {
        this[`requestCode${+e.target.id}`] = e.key;
        if (+this.aux >= 0 && +this.aux < 4) {
          this.number[+e.target.id] = (this[`requestCode${+e.target.id}`]);
          this.aux++;
        }

        if (+this.aux == 4) {
          this.number[e.target.id] = +e.key;
        }
        let tempString = this.number.join();
        tempString = tempString.replace(/,/g, '');

        this.validate = tempString;
        if (+this.aux == 4) {
          this.payload = {
            IdConfig: "EB50E9DF-7E30-421A-99B7-E1EA49E3A1AB",
            To: this.storageService.get('otp'),
            Code: tempString
          }
          this.otpService.validateOtp(this.payload).subscribe(
            (response: any) => {
              swal({
                type: response.isValid ? 'success' : 'error',
                title: response.isValid ? 'Código válidado' : 'Código érroneo',
                text: response.message
              }).then(x => {
                if (response.isValid) {
                  this.router.navigate(['one/authorization']);
                }
              })
            }
          )

        }

        return true;
      }
    }
    return false;
  }


  sendCode(e) {
    if (!this.validate || +this.validate.length != 4) {
      return false;
    }
    return;
  }

  backspace(e) {

    if (e.keyCode == 8 && this.aux > 0) {
      this.aux = this.aux - 1;
      console.log(this.aux);
    }
  }

}
