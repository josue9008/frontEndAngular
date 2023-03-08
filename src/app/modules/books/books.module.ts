import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksAddComponent } from './books-add/books-add.component';
import { BooksUpdateComponent } from './books-update/books-update.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [BooksListComponent, BooksAddComponent, BooksUpdateComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MaterialModule
  ]
})
export class BooksModule { }
