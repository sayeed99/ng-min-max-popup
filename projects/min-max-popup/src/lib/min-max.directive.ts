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

@Directive({
  selector: '[libMinMax]'
})

export class MinMaxDirective {

  child_unique_key: number = 0;
  componentsReferences: any[] = [];
  dockPosition: any[] = [];

  constructor(
    private CFR: ComponentFactoryResolver,
    private viewContainerReff: ViewContainerRef
  ) {}

  createComponent(componentRender: any, data: any) {
    let componentFactory = this.CFR.resolveComponentFactory(componentRender);
    const containerRef = this.viewContainerReff;
    let childComponentRef = containerRef.createComponent(componentFactory);
    let childComponent:any = childComponentRef.instance;
    childComponent.unique_key = ++this.child_unique_key;
    childComponent.parentRef = this;
    childComponent.data = data;
    this.componentsReferences.push(childComponentRef);
  }

  dockComponent(key: any) {
    let data: any[] = [];
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

    containerRef.remove(vcr);

    let newData: any[] = [];
    for(i = 0; i < this.componentsReferences.length; i++) {
      if(this.componentsReferences[i].instance.unique_key != key) {
        newData.push(this.componentsReferences[i]);
      }
    }
    this.componentsReferences = newData;
  }
}