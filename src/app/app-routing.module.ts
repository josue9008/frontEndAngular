import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"books", loadChildren: () => import('./modules/books/books.module').then( b => b.BooksModule )},  
  {path:"sections", loadChildren: () => import('./modules/section/section.module').then( s => s.SectionModule )},  
  { path: "**", redirectTo: "/home", pathMatch:'full'}
];
//import('../heroes/heroes.module')

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
