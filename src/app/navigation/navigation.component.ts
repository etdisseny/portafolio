import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  menu1:string;
  menu2:string;
  menu3:string;
  menu4:string;


  constructor() { 
    this.menu1="SERVEIS";
    this.menu2="PORTFOLI";
    this.menu3="TRAJECTORIA";
    this.menu4="CONTACTE";
  }

  ngOnInit() {
  }

}
