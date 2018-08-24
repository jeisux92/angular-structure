import { Directive, ElementRef, HostListener, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[oneOtp]'
})
export class OtpDirective {

  private static elements: ElementRef[] = [];
    constructor(private el: ElementRef) { }

    ngAfterViewInit(): void {
        OtpDirective.elements.push(this.el);
    }


    @HostListener('window:keypress', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if (this.el.nativeElement != event.target) {
            return;
        }
        if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105) {
            this.nextInput();
        }
    }


    @HostListener('window:keydown', ['$event'])
    keyPressEvent(event: KeyboardEvent) {
        if (this.el.nativeElement != event.target) {
            return;
        }
        if (event.key == "Backspace") {
            OtpDirective.elements[OtpDirective.elements.indexOf(this.el)].nativeElement.focus();
            this.previousInput();

        } else if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105) {
            return;
        } else {
            return false;
        }
    }

    private previousInput() {
        const index = OtpDirective.elements.indexOf(this.el);
        if (index <= 0) {
            return;
        }
        setTimeout(function () {
            OtpDirective.elements[index - 1].nativeElement.focus();
        }, 10);

    }

    private nextInput() {
        const index = OtpDirective.elements.indexOf(this.el);
        if (index >= (OtpDirective.elements.length - 1)) {
            return;
        }
        OtpDirective.elements[index + 1].nativeElement.focus();
    }

}
