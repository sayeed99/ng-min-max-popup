import {
  Directive,
  Injectable,
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  Component,
  ViewRef,
} from '@angular/core';
import { MinMaxNavigateComponent } from './min-max-navigate.component'

@Directive({
  selector: '[libMinMax]'
})

export class MinMaxDirective {

  child_unique_key: number = 0;
  componentsReferences: any[] = [];
  dockPosition: DockedElement[] = [];
  navigatorAdded: number = 0;
  moveVal: number = 0;
  navigatorReferences: any[] = [];

  constructor(
    private CFR: ComponentFactoryResolver,
    private viewContainerReff: ViewContainerRef
  ) {}

  createComponent(componentRender: any, data: any) {
    if(!this.navigatorAdded) {
      this.createNavigator();
    }
    let componentFactory = this.CFR.resolveComponentFactory(componentRender);
    const containerRef = this.viewContainerReff;
    let childComponentRef = containerRef.createComponent(componentFactory);
    let childComponent:any = childComponentRef.instance;
    childComponent.unique_key = ++this.child_unique_key;
    childComponent.parentRef = this;
    childComponent.data = data;
    this.componentsReferences.push(childComponentRef);
  }

  createNavigator() {
    this.navigatorAdded = 1;
    let componentFactory = this.CFR.resolveComponentFactory(MinMaxNavigateComponent);
    const containerRef = this.viewContainerReff;
    let childComponentRef = containerRef.createComponent(componentFactory);
    let childComponent:any = childComponentRef.instance;
    childComponent.unique_key = -1;
    childComponent.parentRef = this;
    this.navigatorReferences.push(childComponentRef);
  }

  dockComponent(key: any) {
    let len = this.dockPosition.length + 1;
    let docEle = {key: key, position: len};
    this.dockPosition.push(docEle);
    let leftPlacementValue = 0;
    if (this.dockPosition.length != 1) {
      leftPlacementValue = (this.dockPosition.length - 1) * 200 + ((this.dockPosition.length - 1) * 2) + 32;
    } else {
      leftPlacementValue = 32;
    }
    return leftPlacementValue;
  }

  undockComponent(key: any) {
    let newData: DockedElement[] = [];
    let startChange = 0;
    let newPos = 0;
    for(let i = 0; i < this.dockPosition.length; i++) {
      if(this.dockPosition[i].key == key) {
        startChange = 0;
      } else {
        if(startChange == 1) {
          let newPos = this.dockPosition[i].position - 1;
          newData.push({key: key, position: newPos})
        } else {
          newData.push(this.dockPosition[i]);
        }
      }
    }
    this.dockPosition = newData;
  }

  moveDockerComponent(direction: any) {
    if(direction == 1) {
      this.moveVal = this.moveVal + 100;
    } else {
      if(this.moveVal > 0)
        this.moveVal = this.moveVal - 100;
    }
  }

  getDockX(key: any) {
    let dockedPos = 1;
    let leftPlacementValue = 0;
    for(let i = 0; i < this.dockPosition.length; i++) {
      if(this.dockPosition[i].key == key) {
        dockedPos = i + 1;
      }
    }
    if (dockedPos != 1) {
      leftPlacementValue = (dockedPos - 1) * (200 + (dockedPos - 1) * 2) + 32 + this.moveVal;
    } else {
      leftPlacementValue = 32 + this.moveVal;
    }
    return leftPlacementValue  + 'px';
  }

  remove(key: number) {
    const containerRef = this.viewContainerReff;

    if (containerRef.length < 1) return;

    let i = 0; 
    let found = 0;
    let vcr = 0;
    let componentRef: any;
    for(i = 0; i < this.componentsReferences.length; i++) {
      if(this.componentsReferences[i].instance.unique_key == key) {
        componentRef = this.componentsReferences[i];
        vcr = i;
        found = 1;
      }
    }

    let index = this.viewContainerReff.indexOf(componentRef.hostView)
    containerRef.remove(index);

    let newData: any[] = [];
    for(i = 0; i < this.componentsReferences.length; i++) {
      if(this.componentsReferences[i].instance.unique_key != key) {
        newData.push(this.componentsReferences[i]);
      }
    }
    this.componentsReferences = newData;

    if(this.componentsReferences.length < 1) {
      let navRef: any = this.navigatorReferences[0];
      let index2 = this.viewContainerReff.indexOf(navRef.hostView)
      this.viewContainerReff.remove(index2);
      this.navigatorAdded = 0;
      this.navigatorReferences.pop();
    }
  }
}

export interface DockedElement {
  key: any;
  position: number;
}