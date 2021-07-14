
# Min Max Angular 12 Popup

Min max popup is an angular 12 floating window modal.

## Installation

Use the node package manager [npm](https://www.npmjs.com/) to install minmax.

This package requires angular2-draggable.

```bash
npm i angular2-draggable
npm i min-max-popup
```

## Usage

```bash
In your app module : 
import { MinMaxPopupModule, MinMaxDirective } from 'min-max-popup';

Add MinMaxPopupModule to your imports array: 
  imports: [
    .....,
    MinMaxPopupModule,
    .....,
  ],

Add MinMaxDirective to your providers array: 
  providers: [
    .....,
    MinMaxDirective,
    .....,
  ],
```

```bash
In your app component.ts import ViewContainerRef from angular and add to constructor : 


  constructor(
    .....,
    public viewContainerRef: ViewContainerRef,
    ......
  ) {}
```

```bash
Create a component and wrap your components html with  //TestComponent
<lib-min-max-popup>......</lib-min-max-popup>
```
```bash
Add your newly created component to entryComponents array : 
  entryComponents: [
    ....,
    TestComponent
    ....,
  ],
```
```bash
In your new components ts file import Input from angular : //TestComponent
import { Input } from '@angular/core';
```
```bash
In your new components ts file add the following in your component class : //TestComponent
export class TestComponent implements OnInit {
  @Input() data: any = {}; //add this
  @Input() parentRef: any; //add this
  @Input() unique_key: any; //add this
```
```bash
In your new components class add the following function to close the modal : //TestComponent
  close() {
    this.parentRef.remove(this.unique_key)
  }
```
```bash
In the component from where you want to open modal do import your modal component (TestComponent) and MinMaxDirective :

import { MinMaxDirective } from 'min-max-popup';
import { TestComponent } from './test.component'


initialize minmaxdirective in constructor : 
  constructor(
    private minmaxservice: MinMaxDirective
  ) {}
```
```bash
To open modal call 
    this.minmaxservice.createComponent(TestComponent, data); //TestComponent is your modal component and data is the data you want to pass to modal.
```

```bash
Modal api reference 
```

API Referance | Default
------------- | -------------
headerColor   | #0072c6
titleColor    | #FFF
iconsColor    | #FFF
closeHoverColor    | #e81123
buttonHoverColor   | rgba(255, 255, 255, 0.1)
width    | 400px
height   | 500px
title    | New Window
initialX    | 200
initialY   | 200
contentBackgroundColor    | #FFF
allowOutOfBounds    | false


```bash
Full modal wrapper would look like : 
<lib-min-max-popup headerColor="#000" closeHoverColor="#FFF" buttonHoverColor="#fff" iconsColor="#FFF"  title="TEST" titleColor="#FFF" contentBackgroundColor="#FFF"  width="500px" height="600px" [initialX]="inX" [initialY]="inY">.......</lib-min-max-popup>

```


## Code scaffolding

Run `ng generate component component-name --project min-max-popup` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project min-max-popup`.
> Note: Don't forget to add `--project min-max-popup` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build min-max-popup` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build min-max-popup`, go to the dist folder `cd dist/min-max-popup` and run `npm publish`.

## Running unit tests

Run `ng test min-max-popup` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
