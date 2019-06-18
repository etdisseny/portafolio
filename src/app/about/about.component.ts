import { Component, OnInit } from '@angular/core';
import { About } from '../models/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title:string;
  public about:Array<About>;

  constructor() { 
    this.title="Aquesta a estat la meva trajectoria professional...";
    this.about=[
      new About('2019-2017', 'Hexatech','Disseny Gràfic/Web i FrontEnd',1),
      new About('2013-2017','Open Camp','Brand Manager: disseny, vídeo, branding, renders...',2),
      new About('2011-2013', 'Dynam-iq','Disseny Gràfic/Web i FrontEnd',3),
      new About('2007-2010', 'Humet JHP','Disseny Gràfic/Web i FrontEnd',4),
      new About('2003-2007', 'Vídeo Orange','Disseny Gràfic imatge corporativa',5),
      new About('2002', 'Estudi Mariscal','Edició i Postproducció de vídeo',7),
      new About('1999-2001', 'Vídeo Comunicació','Edició i Postproducció de vídeo (CLUB TPH) - Edit Box',6),
      new About('1999-2000', 'Estudi Mariscal','Edició i Postproducció de vídeo (TWIPSY) - Edit Box',7),
      new About('1996-1999', 'Oframe','Postproducció de vídeo - Publicitat - Edit Box',8)
    ];
  }

  ngOnInit() {
  }

}
