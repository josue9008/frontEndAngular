import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import {MatSort, Sort} from '@angular/material/sort';
import { Router } from '@angular/router';

import { BooksService } from 'src/app/services/books.service';
import { Libro } from '../../../interfaces/libro';



@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})




export class BooksListComponent implements OnInit, AfterViewInit {  

  libro: Libro[] = [];

  dataSource = new MatTableDataSource<Libro>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['titulo', 'autor', 'cantidad_ejemplares', 'fecha_publicacion', 'detalle' ];

  //displayedColumns: string[] = ['titulo'];

 
  public cargando: boolean = true;

  constructor( private bookService: BooksService, private router: Router ) {
    
   }

  ngOnInit() {
    this.cargarLibros();
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  cargarLibros() {
    
    this.bookService.bookGetAll().subscribe( books => {              
      this.dataSource.data = books.librosGetAll;       
      
    });     
  
  }

  public redirectToDetail = (id: string) => {
     console.log('id', id);
     this.router.navigate([`/books/bookUpdate/${id}`]);
  }

  public filtrar = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
