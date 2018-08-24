import { Component, OnInit, ViewChild, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'one-cam',
  templateUrl: './cam.component.html',
  styleUrls: ['./cam.component.scss']
})
export class CamComponent implements OnInit, OnDestroy {
  @ViewChild('video') videoElement: any;
  @Output() photo = new EventEmitter<any>();
  video: any;
  constructor() { }

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        this.video.srcObject = stream;
        this.video.play();
      });
    }
  }

  ngOnDestroy(): void {
    this.video.pause();
  }

  takePhoto() {
    let video = JSON.stringify(this.video);
    this.video.pause();
    this.photo.emit(JSON.parse(video));
  }

}
