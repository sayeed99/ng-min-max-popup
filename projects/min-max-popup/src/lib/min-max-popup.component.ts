import { Component, OnInit, Input } from '@angular/core';
import { MinMaxPopupService } from './min-max-popup.service'

@Component({
  selector: 'lib-min-max-popup',
  templateUrl: './min-max-popup.component.html',
  styleUrls: ['./min-max-popup.component.scss']

})
export class MinMaxPopupComponent implements OnInit {

  @Input() headerColor: string = "#0072c6";
  @Input() titleColor: string = "#FFF";
  @Input() iconsColor: string = "#FFF";
  @Input() closeHoverColor: string = "#e81123";
  @Input() buttonHoverColor: string = "rgba(255, 255, 255, 0.1)";
  @Input() width: string = "400px";
  @Input() height: string = "500px";
  @Input() title: string = "New Window";
  @Input() initialX: number = 200;
  @Input() initialY: number = 200;
  @Input() contentBackgroundColor: string = "#FFF";
  
  hover: boolean = false;
  hoverMax: boolean = false;
  hoverMin: boolean = false;
  currentInstance: any = 0;
  leftPlacementValue: any = 0;
  leftPlacement: any = 0;
  isMinimised: boolean = false;
  initialLeft: any = '50%';
  initialTop: any = '50%';
  currentZ: any = 0;

  constructor(public popupservice: MinMaxPopupService) { }

  ngOnInit(): void {
    this.currentInstance = this.popupservice.initModal();
    this.currentZ = this.popupservice.getInitialIndex(this.currentInstance);
    if(this.currentInstance != 1) {
      this.leftPlacementValue = ((this.currentInstance-1)*200) + ((this.currentInstance-1)*2);
    } else {
      this.leftPlacementValue = 0;
    }
    this.leftPlacement = this.leftPlacementValue + 'px';
  }

  minimise() {
    this.isMinimised = !this.isMinimised;
  }

  mouseup(event: any) {
  }

  mousedown(event: any) {
    this.initialLeft = event.clientX + 'px';
    this.initialTop = event.clientY + 'px';
  }

  onDragBegin(event: any) {
    this.currentZ = this.popupservice.getNewIndex(this.currentInstance);
  }

  endOffset(event: any) {
    this.initialX = event.x;
    this.initialY = event.y;
  }

}