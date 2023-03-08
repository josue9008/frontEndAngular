import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Seccion } from 'src/app/interfaces/seccion';
import { SectionsService } from 'src/app/services/sections.service';

@Component({
  selector: 'app-section-update',
  templateUrl: './section-update.component.html',
  styleUrls: ['./section-update.component.css']
})
export class SectionUpdateComponent implements OnInit {

  public formGroup: FormGroup; 

  constructor( private formBuilder: FormBuilder, private sectionService: SectionsService, private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]            
    });
    let id = this.route.snapshot.params['id'];
    this.getSeccionById(id);
    
  }

  getSeccionById(id) {    
    this.sectionService.seccionGetById(id).subscribe( data =>{
      console.log(data.seccionGetById);
      this.formGroup.setValue({
        'nombre': data.seccionGetById.nombre,
        'descripcion': data.seccionGetById.descripcion        
      },
    );
    })

  }

  onUpdate(){    
   console.log(this.formGroup.value);
   this.sectionService.seccionUpdateById(this.route.snapshot.params['id'], this.formGroup.value).subscribe( data =>{
    this.router.navigateByUrl('sections/sectionList');  
   })

  }

}
