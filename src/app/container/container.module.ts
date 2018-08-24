import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { OtpComponent } from './otp/otp.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ReferenceComponent } from './reference/reference.component';
import { FinalComponent } from './final/final.component';
import { ReferenceReadOnlyComponent } from './reference-read-only/reference-read-only.component';
import { CreatePasswordComponent } from './create-password/create-password.component';

const ROUTES: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'reference', component: ReferenceComponent },
  { path: 'reference-read-only', component: ReferenceReadOnlyComponent },
  { path: 'createpassword', component: CreatePasswordComponent },
  { path: 'final', component: FinalComponent }
]



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    OtpComponent,
    AuthorizationComponent,
    ReferenceComponent,
    FinalComponent,
    ReferenceReadOnlyComponent,
    CreatePasswordComponent
  ]
})
export class ContainerModule { }

