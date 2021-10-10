import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { BookComponent } from './book.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path:'',
    component: BookComponent,
    children:[
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'addbook',
        component: AddbookComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
