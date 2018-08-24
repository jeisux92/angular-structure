import { Component, OnInit } from '@angular/core';
import { BreadCrumbService } from '../../core/services/bread-crumb.service';

@Component({
  selector: 'one-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {

  constructor(private breadCrumbService: BreadCrumbService) { }
  step: number;
  ngOnInit() {
    this.breadCrumbService.step.subscribe(step => this.step = step);
  }

}
