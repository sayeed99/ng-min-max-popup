import {
  Injectable,
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  Component,
  ViewRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MinMaxPopupOpenService {
  child_unique_key: number = 0;
  componentsReferences = Array<ComponentRef<any>>();

  constructor(
    private CFR: ComponentFactoryResolver,
    private viewContainerReff: ViewContainerRef
  ) {}

  createComponent(componentRender: any) {
    let componentFactory = this.CFR.resolveComponentFactory(componentRender);
    const containerRef = this.viewContainerReff;
    let childComponentRef = containerRef.createComponent(componentFactory);

    let childComponent:any = childComponentRef.instance;
    childComponent.unique_key = ++this.child_unique_key;
    childComponent.parentRef = this;

    // add reference for newly created component
    this.componentsReferences.push(childComponentRef);
  }

  remove(key: number) {
    const containerRef = this.viewContainerReff;

    if (containerRef.length < 1) return;

    let componentRef = this.componentsReferences.filter(
      (x) => x.instance.unique_key == key
    )[0];

    let vcrIndex: number = containerRef.indexOf(componentRef as any);

    // removing component from container
    containerRef.remove(vcrIndex);

    // removing component from the list
    this.componentsReferences = this.componentsReferences.filter(
      (x) => x.instance.unique_key !== key
    );
  }
}
