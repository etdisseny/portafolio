import { Component, OnInit } from '@angular/core';
import { Modal } from '../models/modal';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['../portfoli/portfoli.component.css']
})
export class ModalsComponent implements OnInit {
 public modal:Array<Modal>;
  constructor() {
    this.modal=[
      new Modal(1,'Concurs Cartell', 'Proposta de cartell per al concurs de la festa major Hostafranchs','Aquesta va ser la proposta de cartell que vaig presentar per el concurs de cartells del 2019, amb temàtica lliure','maig 2018', 'Ajuntament de Barcelona', 'Ilustració'),
      new Modal(2,'Flier promoció','Cursa dels Bombers', 'Aquest es el flier promocional que es va fer per a Open Camp amb motiu de la Cursa dels Bombers de Barcelona','Maig 2017','Open Camp','Disseny Gràfic'),
      new Modal(3,'Logotip','Logotip per a Vivolindo','Logo i imatge corporativa per a blog de decoració i reciclatge decoratiu','Gener 2017','Vivolindo','Identitat'),
      new Modal(4,'Brandig','Branding parc temàtic Open Camp', 'Branderització del Estadi Olimpic per al Parc temàtic de Open Camp','2014','Open Camp','Branding'),
      new Modal(5, 'Web', 'Web empresa Hexatech','Disseny i maquetació de la web per a Hexatech','2017','Hexatech','Web'),
      new Modal(6,'Twipsy', 'Serie de dibuixos animats', 'Edició de la serie de dibuixos animats Twipsy que va realitzar Estudi Mariscal','1999','Estudi Mariscal','Vídeo')
    ]
   }

  ngOnInit() {
  }

}
