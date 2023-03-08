import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionAddComponent } from './section-add/section-add.component';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionUpdateComponent } from './section-update/section-update.component';

const routes: Routes = [
  {
    path: '',    
    children: [      
      {path:"sectionList", component:SectionListComponent},
      {path:"sectionAdd", component:SectionAddComponent},
      {path:"sectionUpdate/:id", component:SectionUpdateComponent},
      { path: '**', redirectTo: 'sectionList' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
