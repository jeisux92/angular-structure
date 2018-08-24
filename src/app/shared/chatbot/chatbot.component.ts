import {
  Component,
  OnInit,
  AfterContentChecked,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
}
  from '@angular/core';
import { ReferenceService } from '../../core/services/reference.service';


@Component({
  selector: 'one-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})

export class ChatbotComponent implements OnInit, AfterContentChecked, OnChanges {

  @Input() question: any;
  @Output() answered = new EventEmitter<any>();
  video: boolean = false;
  oldAnswer: string;
  messages = [];
  constructor(private referenceService: ReferenceService) { }
  message: string = '';
  ngOnInit() {
  }

  ngAfterContentChecked(): void {
    document.querySelector('.chatbot .message-container').scrollTo(0, document.querySelector('.chatbot .message-container').scrollHeight);
  }

  send(isSender) {
    this.answered.emit({ id: this.question.id, description: this.message })
    if (this.question.type && this.question.type == 'password') {
      this.message = "&#8226;".repeat(this.message.length);
    }
    this.sendMessage(this.message, isSender);
  }

  private sendMessage(message, isSender) {

    this.messages.push({ message: message, sender: isSender ? 'sent' : 'received' });
    this.message = '';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.question) {
      if (this.question.isTemplate) {
        this.oldAnswer = this.question.answer.description;
        this.question.question = this.question.question.replace('{0}', this.oldAnswer)
      }
      else if (this.question.type === 'photo') {
        this.video = true;
      }
      this.sendMessage((this.question.question), false);
      this.ngAfterContentChecked();
    }
  }

  putPhoto(photo) {
    this.message = "Foto cargada exitosamente";
    this.send(true);
    this.video = false;
  }
  emailService() {
    let payload = {
      Type: "Email",
      Content: "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'><html xmlns='http://www.w3.org/1999/xhtml'><head>    <meta http-equiv='Content-Type' content='text/html; charset=utf-8'>    <title>Bienvenido</title>    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700'></head><body yahoo style='font-family: 'Open Sans', sans-serif;margin: 0;padding: 0;min-width: 100%!important;'>    <!--[if (gte mso 9)|(IE)]>        <table width='100%' bgcolor='#f6f8f1' border='0' cellpadding='0' cellspacing='0'>            <tr>                <td>                    <![endif]-->    <table class='content' align='center' cellpadding='0' cellspacing='0' border='0' style='width: 100%;max-width: 500px;'>        <!-- Header don't touch -->        <tr class='header'>            <td>                <div class='header-div' style='height: 243px;width: 100%;background: url(https://storage.googleapis.com/banlinea-qa.appspot.com/one/foto_correo.png);background-repeat: no-repeat;'>                    <table width='100%' align='center' border='0' cellpadding='0' cellspacing='0' class='header-table' style='table-layout: fixed;height: 244px;width: 100%;'>                        <tr>                            <td height='100%' style='padding-top: 84px;'>                                <table width='80%' align='center' border='0' cellpadding='0' cellspacing='0' bgcolor='#FFFFFF' style='padding: 6px 0 0 0;height: 159px;'>                                    <tr>                                        <td height='100%' style='padding: 0 0 0 0;height: 124px;' align='center' class='img-container'>                                            <img src='https://storage.googleapis.com/banlinea-qa.appspot.com/one/logo_accendo_banco.png' alt=''>                                        </td>                                    </tr>                                </table>                            </td>                        </tr>                    </table>                </div>            </td>        </tr>        <!-- Body -->        <tr>            <td class='body'>                <table width='80%' align='center' border='0' cellpadding='0' cellspacing='0' bgcolor='#FFFFFF' style='box-shadow: 0px 6px 11px #bba5a5;'>                    <tr>                        <td height='100%'>                            <table width='90%' align='center' border='0' cellpadding='0' cellspacing='0'>                                <tr>                                    <td height='100%' style='padding: 0 0 0 0;color: #2A9BAA;font-weight: bolder;font-size: 1.4em;' align='center' class='title'>                                        <label> Hola, Andrés Ramirez</label>                                        <br>                                    </td>                                </tr>                            </table>                        </td>                    </tr>                    <tr>                        <td height='100%' style='padding: 5px 0 20px 0;'>                            <table width='80%' align='center' border='0' cellpadding='0' cellspacing='0'>                                <tr>                                    <td height='100%' style='padding: 0 0 0 0;color: #2A9BAA;' align='center' class='body-text'>                                        <strong>Estás realizando la siguiente solicitud:</strong>                                    </td>                                </tr>                            </table>                        </td>                    </tr>                    <tr>                        <td height='100%' style='padding: 15px 0 20px 0;'>                            <table width='80%' align='center' border='0' cellpadding='0' cellspacing='0'>                                <tr>                                    <td height='100%' style='padding: 0 0 0 0;color: #9B9B9B; font-size: 18px;font-weight: 400;line-height: 22px;width: 259px;' align='center' class='body-text'>                                        Para confirmar tu dirección de correo electrónico y continuar con el proceso, haz clic en el botón de <strong>Confirmar Correo.</strong>                                    </td>                                </tr>                            </table>                        </td>                    </tr>                    <tr>                        <td height='100%' style='padding: 15px 0 25px 0;'>                            <table width='100%' border='0' cellpadding='0' cellspacing='0'>                                <tr>                                    <td height='100%' align='center'>                                        <a href='#' style='padding: 4px 6px; background-color: #2D9BA9;color: #FFF;width: 32%;border: 1px solid #2D9BA9;border-radius: 6px;height: 40px;font-size: 1.2em;text-decoration: none'>Confirmar correo</a>                                    </td>                                </tr>                            </table>                        </td>                    </tr>                </table>            </td>        </tr>        <!-- Footer don't touch -->        <tr>            <td class='footer'>                <table width='80%' align='center' border='0' cellpadding='0' cellspacing='0'>                    <tr>                        <td height='100%' style='padding: 5px 20px 20px 0;'>                            <table width='90%' align='center' border='0' cellpadding='0' cellspacing='0'>                                <tr>                                    <td aling='right' style='padding-top: 15px;padding-left: 80px;' >                                        <p style='color: #005DB9;font-size: 0.6em;'>                                            Power by                                        </p>                                    </td>                                    <td align='left' style='padding-top: 15px;' >                                        <img src='https://storage.googleapis.com/banlinea-qa.appspot.com/one/Banlinea_Logo-1.png' style='width: 100px;height: 40px;'>                                    </td>                                </tr>                            </table>                        </td>                    </tr>                </table>            </td>        </tr>    </table>    <!--[if (gte mso 9)|(IE)]>                </td>            </tr>        </table>        <![endif]--></body></html>",
      Subject: "Confirmación de correo eléctronico - solicitud Accendo Banco",
      EmailBox: "andres.ramirez@banlinea.com", // AQUI VA EL CORREO QUE DEBES CAPTURAR DEL CHATBOT
      ApplicationId: "a9928400-17d7-4860-8e40-580f5f9fd424",
      SmtpConfigId: "11F81B84-4848-443C-B576-FC7D985B0BCC"
    }

    this.referenceService.sendEmailConfirmation(payload).subscribe(
      response => {
        console.log(response);
      }
    )
  }

}
