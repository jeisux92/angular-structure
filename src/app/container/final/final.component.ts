import { Component, OnInit } from '@angular/core';
import { BreadCrumbService } from '../../core/services/bread-crumb.service';

@Component({
  selector: 'one-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {

  constructor(private breadCrumbService: BreadCrumbService) { }

  ngOnInit() {
    this.breadCrumbService.step.next(4);

  }

}
