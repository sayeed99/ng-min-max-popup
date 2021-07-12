import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';

const routes: Routes = [
  {
    path: '',
    component: Test3Component
  },
  {
    path: 'r',
    component: Test4Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
