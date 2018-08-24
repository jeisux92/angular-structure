import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../../core/services/chatbot.service';
import { OneService } from '../../core/services/one.service';
import swal from 'sweetalert2'
import { BreadCrumbService } from '../../core/services/bread-crumb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'one-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  steps = [];
  state: boolean = false;
  step: number = 0;
  question: any;
  answers = [];
  constructor(private chatbotService: ChatbotService, private oneService: OneService,
    private breadCrumbService: BreadCrumbService, private router: Router) { }

  ngOnInit() {
    this.getSteps();
  }

  private getSteps() {
    this.breadCrumbService.step.next(1);
    this.chatbotService.getSteps().subscribe((steps: number[]) => {
      this.steps = steps;
      this.getStep();
    });
  }

  getStep() {
    this.chatbotService.getStep(this.steps[this.step]).subscribe((question: any) => {
      this.question = question;
      if (question.isTemplate) {
        this.question.answer = this.answers[0];
      }
      this.step++;
    });
  }

  saveAnswwer(answer) {
    this.answers.push(answer);
    if (this.steps[this.step] === true) {
      this.oneService.enroll(this.answers).subscribe(x => {
        swal({
          type: x.isValid ? 'success' : 'error',
          title: x.isValid ? 'Registro éxitoso' : 'Error en el registro',
          text: x.message == 'Ya existe una persona vinculada o en proceso de vinculación con el documento CC 654' ?
            'Por favor ingresa con tu usuario registrado a Banlinea One' : x.message
        }).then(() => {
          if (!x.isValid) {
            this.resetProcess();
            if (x.message == 'Ya existe una persona vinculada o en proceso de vinculación con el documento CC 654') {
              this.state = true;
            }
          }
          else {
            this.router.navigate(['one/reference']);
          }
        }).catch(() => {
          debugger;
          this.resetProcess()
        })
      });
    }
    else {
      this.getStep();
    }
  }
  private resetProcess() {
    this.answers = [];
    this.getSteps();
    this.step = 0;
  }

  switch(state) {
    this.state = state;
  }

}
