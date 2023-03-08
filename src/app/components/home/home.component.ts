import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { SectionsService } from '../../services/sections.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  public executeSelectedChange = (event) => {
    console.log(event);
  }

}
