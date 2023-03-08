import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksAddComponent } from './books-add/books-add.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksUpdateComponent } from './books-update/books-update.component';


const routes: Routes = [
  {
    path: '',    
    children: [      
      {path:"bookList", component:BooksListComponent},
      {path:"bookAdd", component:BooksAddComponent},
      {path:"bookUpdate/:id", component:BooksUpdateComponent},
      { path: '**', redirectTo: 'bookList' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
