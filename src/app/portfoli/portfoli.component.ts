import { Component, OnInit } from '@angular/core';
import { Portfoli } from '../models/portfoli';

@Component({
  selector: 'app-portfoli',
  templateUrl: './portfoli.component.html',
  styleUrls: ['./portfoli.component.css']
})
export class PortfoliComponent implements OnInit {
  public title:string;
  public portfoli:Array<Portfoli>;


  constructor() {
    this.title= "Aquestes són algunes de les meves feines";
    this.portfoli=[
      new Portfoli('Cartell Concurs','Ilustració',1),
      new Portfoli('Flier Promoció','Disseny Gràfic',2),
      new Portfoli('Logotip','Identitat',3),
      new Portfoli('Branding Estadi','Branding',4),
      new Portfoli('Web','Front End',5),
      new Portfoli('Serie Twipsy','Vídeo',6)
    ];
   }

  ngOnInit() {
    console.log(this.portfoli);
  }

}
