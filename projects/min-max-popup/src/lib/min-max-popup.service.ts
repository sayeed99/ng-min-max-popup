import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MinMaxPopupService {

  constructor() { }

  count: any[] = [];
  zIndex: any[] = [];
  indexer: any = 0;
  lastIndex: any = 900;

  public initModal() {
    let hasAdded: boolean = false;
    let counter: any = 0;
    for(let i = 0; i< this.count.length; i++) {
      if(this.count[i] == 0 && !hasAdded) {
        hasAdded = true;
        this.count[i] = 1;
        counter = i;
      }
    }
    if(!hasAdded) {
      this.count.push(1);
        counter = this.count.length;
    }
    this.lastIndex++;
    this.zIndex[counter] = this.lastIndex;
    return counter;
  }

  public getInitialIndex(counter: any) {
    return this.zIndex[counter];
  }

  public getNewIndex(counter: any) {
    let maxEle = this.zIndex[counter];
    let max = 0;
    this.zIndex.forEach(element => {
      if(element > max) {
        max = element;
      }
    });
    if(max > maxEle) {
      this.zIndex[counter] = max+1;
    }
    return this.zIndex[counter];
  }

  public destroyModal(counter: any) {
    this.count[counter] = 0;
  }
}
