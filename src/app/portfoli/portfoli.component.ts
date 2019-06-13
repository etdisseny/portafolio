import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfoli',
  templateUrl: './portfoli.component.html',
  styleUrls: ['./portfoli.component.css']
})
export class PortfoliComponent implements OnInit {
  title:string;
  constructor() {
    this.title= "Aquestes són algunes de les meves feines";
   }

  ngOnInit() {
  }

}
