import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../material/material.module';


import { SectionRoutingModule } from './section-routing.module';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionAddComponent } from './section-add/section-add.component';
import { SectionUpdateComponent } from './section-update/section-update.component';



@NgModule({
  declarations: [SectionListComponent, SectionAddComponent, SectionUpdateComponent],
  imports: [
    CommonModule,
    SectionRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SectionModule { }
