import { Component, OnInit } from '@angular/core';
import { Services} from '../models/services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public title:string;
  public services:Array<Services>;
  constructor() {
    this.title="Aquests son el serveis que us puc oferir!!";
    this.services=[
      new Services('web','Web','Disseny web i programació FrontEnd'),
      new Services('disseny','Disseny','Logos, fliers, Díptics, posters, tota mena de grafisme...'),
      new Services('video','Video','Vídeos promocionals, animacions, simulacions espais')
    ];
   }

  ngOnInit() {
  }

}
