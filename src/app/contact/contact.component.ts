import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public subtitle:string;
  constructor() { 
    this.subtitle="Pots contactar amb mi a traves d'aquest formulari";
  }

  ngOnInit() {
  }

}
