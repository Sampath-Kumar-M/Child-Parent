import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { ListComponent } from './list/list.component';
import { BookDetailComponent } from './details/book-detail.component';
import { BookComponent } from './book.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListComponent, BookDetailComponent, BookComponent, AddbookComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BookRoutingModule
  ]
})
export class BookModule { }
