import { Component, OnInit } from '@angular/core';
import { Couleur } from '../../classes/couleur';

@Component({
  selector: 'colorChart',
  templateUrl: './colorChart.component.html',
  styleUrls: ['./colorChart.component.css']
})
export class ColorChart {

  private colorSelector : Couleur;
  private colors : Array<string> = [
    "light-blue",
    "soft-blue",
    "blue",
    "dark-blue",
    "red",
    "light-red",
    "soft-red",
    "dark-red",
    "pink-orange",
    "light-pink",
    "yellow",
    "green",
    "soft-green",
    "orange",
    "full-black",
    "black",
    "full-white",
    "white",
    "gray",
    "light-gray"
    
  ];

  constructor() 
  { 
    this.colorSelector = new Couleur(); 
    console.log(this.colors);
  }


}
