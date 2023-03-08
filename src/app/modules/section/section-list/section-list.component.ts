import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import {MatSort, Sort} from '@angular/material/sort';
import { SectionsService } from '../../../services/sections.service';
import { Seccion } from '../../../interfaces/seccion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit, AfterViewInit {
  
  public secciones: Seccion[] = [];
  
  dataSource = new MatTableDataSource<Seccion>();
 

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['nombre', 'descripcion', "detalle"];

 
  public cargando: boolean = true;

  constructor( private sectionsService: SectionsService, private router: Router ) { }

  ngOnInit() {
    this.cargarSecciones();
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  cargarSecciones() {
    this.cargando = true;   
    this.sectionsService.seccionGetAll().subscribe( sections => {      
      this.dataSource.data = sections.seccionesGetAll;      
      this.cargando = false;
    });
  }

  public redirectToDetail = (id: string) => {
    this.router.navigate([`/sections/sectionUpdate/${id}`]);
 }

  public filtrar = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  


}
