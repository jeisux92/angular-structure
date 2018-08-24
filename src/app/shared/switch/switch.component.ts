import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'one-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit, OnChanges {
  @Output() state = new EventEmitter<boolean>();
  @Input() stateI: boolean;
  switchState: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  change(toggle = false) {
    if (toggle) {
      this.switchState = !this.switchState;
    }
    this.state.emit(this.switchState);
  }
  ngOnChanges() {
    this.switchState =this.stateI;
  }
}
