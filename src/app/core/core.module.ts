import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '../../../node_modules/@angular/common/http';
import { ChatbotService } from './services/chatbot.service';
import { OtpService } from './services/otp.service';
import { OneService } from './services/one.service';
import { InterceptorService } from './services/interceptor.service';
import { LoadingService } from './services/loading.service';
import { StorageService } from './services/storage.service';
import { BreadCrumbService } from './services/bread-crumb.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ChatbotService,
    OneService,
    LoadingService,
    OtpService,
    StorageService,
    BreadCrumbService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],

})
export class CoreModule { }
