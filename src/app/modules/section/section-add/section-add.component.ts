import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Seccion } from 'src/app/interfaces/seccion';
import { SectionsService } from 'src/app/services/sections.service';


@Component({
  selector: 'app-section-add',
  templateUrl: './section-add.component.html',
  styleUrls: ['./section-add.component.css']
})
export class SectionAddComponent implements OnInit {
  public formGroup: FormGroup; 

  constructor( private formBuilder: FormBuilder, private sectionService: SectionsService, private router: Router ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]            
    });

   
  }

  onSubmit(){    
    this.sectionService.seccionAdd(this.formGroup.value).subscribe(
      data => {       
        this.router.navigateByUrl('sections/sectionList');      
      },
      error => console.log(error));;

  }

}
