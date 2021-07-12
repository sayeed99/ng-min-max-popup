import { Component, OnInit, Input, HostListener } from '@angular/core';
import { MinMaxPopupService } from './min-max-popup.service';
import { MinMaxDirective } from './min-max.directive';

@Component({
  selector: 'lib-min-max-popup',
  templateUrl: './min-max-popup.component.html',
  styleUrls: ['./min-max-popup.component.scss'],
  host: {
    "(window:resize)": "onResize($event)"
  }
})
export class MinMaxPopupComponent implements OnInit {

  @Input() headerColor: string = '#0072c6';
  @Input() titleColor: string = '#FFF';
  @Input() iconsColor: string = '#FFF';
  @Input() closeHoverColor: string = '#e81123';
  @Input() buttonHoverColor: string = 'rgba(255, 255, 255, 0.1)';
  @Input() width: string = '400px';
  @Input() height: string = '500px';
  @Input() title: string = 'New Window';
  @Input() initialX: number = 0;
  @Input() initialY: number = 0;
  @Input() contentBackgroundColor: string = '#FFF';
  @Input() dockStartX: number = 0;
  @Input() dockStartY: number = 0;
  @Input() allowOutOfBounds: boolean = false;

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
  marginLeft: any = '0px';
  marginTop: any = '0px';
  maxBoundT: any = 0;
  maxBoundL: any = 0;
  maxBoundB: any = 0;
  maxBoundR: any = 0;
  popupWidth: any = 0;
  popupHeight: any = 0;
  screenHeight: number = 0;
  screenWidth: number = 0;
  oldH: any = '';
  oldW: any = '';

  constructor(public popupservice: MinMaxPopupService, public minMaxDirective: MinMaxDirective) {}

  ngOnInit(): void {
    this.onResize(1)
    this.currentInstance = this.popupservice.initModal();
    this.currentZ = this.popupservice.getInitialIndex(this.currentInstance);
    if (this.currentInstance != 1) {
      this.leftPlacementValue =
        (this.currentInstance - 1) * 200 + (this.currentInstance - 1) * 2;
    } else {
      this.leftPlacementValue = 0;
    }
    this.leftPlacement = this.leftPlacementValue + 'px';
    this.popupWidth = this.width.replace(/[^0-9]/g,'');
    this.popupHeight = this.height.replace(/[^0-9]/g,'');
    this.marginLeft = -(this.popupWidth/2) + 'px';
    this.marginTop = -(this.popupHeight/2) + 'px';
    this.oldW = this.width;
    this.oldH = this.height;
    if(!this.allowOutOfBounds) {
      this.maxBounds();
    }
  }

  onResize(event: any) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if(event == 1) {
      return;
    }
    if(this.popupWidth > this.screenWidth) {
      this.resizePopup(1);
    }
    if(this.popupHeight > this.screenHeight) {
      this.resizePopup(-1);
    }
    if(this.popupWidth < this.screenWidth && this.popupHeight < this.screenHeight) {
      this.resetPopup();
    }
    if(!this.allowOutOfBounds) {
      this.maxBounds();
    }
  }

  resetPopup() {
    this.width = this.oldW;
    this.height = this.oldH;
    this.popupWidth = this.width.replace(/[^0-9]/g,'');
    this.popupHeight = this.height.replace(/[^0-9]/g,'');
    this.marginLeft = -(this.popupWidth/2) + 'px';
    this.marginTop = -(this.popupHeight/2) + 'px';
    if(!this.allowOutOfBounds) {
      this.maxBounds();
    }
  }

  resizePopup(dir: any) {
    if(dir == -1) {
      this.height = (this.screenHeight - 10) + 'px';
      this.popupWidth = this.width.replace(/[^0-9]/g,'');
      this.popupHeight = this.height.replace(/[^0-9]/g,'');
      this.marginLeft = -(this.popupWidth/2) + 'px';
      this.marginTop = -(this.popupHeight/2) + 'px';
    } else {
      this.width = (this.screenWidth - 10) + 'px';
      this.popupWidth = this.width.replace(/[^0-9]/g,'');
      this.popupHeight = this.height.replace(/[^0-9]/g,'');
      this.marginLeft = -(this.popupWidth/2) + 'px';
      this.marginTop = -(this.popupHeight/2) + 'px';
    }
  }

  maxBounds() {
    this.maxBoundL = ((this.screenWidth - this.popupWidth)/2) * -1;
    this.maxBoundR = ((this.screenWidth - this.popupWidth)/2) * 1;
    this.maxBoundT = ((this.screenHeight - this.popupHeight)/2) * -1;
    this.maxBoundB = (((this.screenHeight)/2) * 1) - 36;
  }

  minimise() {
    this.isMinimised = !this.isMinimised;
    if(!this.isMinimised) {
      this.currentZ = this.popupservice.getNewIndex(this.currentInstance);
      this.minMaxDirective.undockComponent(this.currentInstance);
    } else {
      this.minMaxDirective.dockComponent(this.currentInstance)
    }
  }

  mouseup(event: any) {}

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
    if(this.allowOutOfBounds) {
      return;
    }
    if(event.x > this.maxBoundR) {
      this.initialX = this.maxBoundR;
    }
    if(event.x < this.maxBoundL) {
      this.initialX = this.maxBoundL;
    }
    if(event.y > this.maxBoundB) {
      this.initialY = this.maxBoundB;
    }
    if(event.y < this.maxBoundT) {
      this.initialY = this.maxBoundT;
    }
  }

  remove_me() {
    // this.popupservice.destroyModal(this.currentInstance);
    this.minMaxDirective.undockComponent(this.currentInstance);
    this.minMaxDirective.remove(this.currentInstance);
  }
}
