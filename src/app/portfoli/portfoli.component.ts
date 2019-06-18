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
      new Portfoli('Cartell Concurs','Ilustració','../assets/01-thumbnail.jpg','#portfolioModal1'),
      new Portfoli('Flier Promoció','Disseny Gràfic','../assets/02-thumbnail.jpg','#portfolioModal2'),
      new Portfoli('Logotip','Identitat','../assets/03-thumbnail.jpg','#portfolioModal3'),
      new Portfoli('Branding Estadi','Branding','../assets/04-thumbnail.jpg','#portfolioModal4'),
      new Portfoli('Web','Front End','../assets/05-thumbnail.jpg','#portfolioModal5'),
      new Portfoli('Serie Twipsy','Vídeo','../assets/06-thumbnail.jpg','#portfolioModal6')
    ];
   }

  ngOnInit() {
    console.log(this.portfoli);
  }

}
