import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../core/services/loading.service';

@Component({
  selector: 'one-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  state = false;
  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.loadingService.state.subscribe((state: boolean) => {
      this.state = state;
    })
  }

}
