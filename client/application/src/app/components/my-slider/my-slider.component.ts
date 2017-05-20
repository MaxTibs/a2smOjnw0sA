import { Component, Input, NgModule, OnInit } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition } from '@angular/animations';

//Animation angular2
/*https://angular.io/docs/ts/latest/guide/animations.html*/
@Component({
  selector: 'my-slider',
  templateUrl: './my-slider.component.html',
  styleUrls: ['./my-slider.component.css'],
  animations: [
    trigger('slider', [ //Il suffit de faire des état autant qu'il y a d'image.
      state('1' , style({ left: '0%' })),
      state('2', style({ left: '-100%' })),
      state('3', style({ left: '-200%' })),
      state('4', style({ left: '-300%' })),
      state('5', style({ left: '-400%' })),
      state('6', style({ left: '-500%' })),
      state('7', style({ left: '-600%' })),
      state('8', style({ left: '-700%' })),
      state('9', style({ left: '-800%' })),
      state('10', style({ left: '-900%' })),
      transition('* <=> *', animate('1s ease-out'))
    ])
  ]
})
export class MySliderComponent implements OnInit {
/*The animation is in the CSS file*/
  private path = "./src/app/components/my-slider/images/";
  private images : Image[] = 
  [
    { url : this.path + "1.jpg", title:"Titre1", description: "Description1", link: "link1" },
    { url : this.path + "2.jpg", title:"Titre2", description: "Description2", link: "link2" },
    { url : this.path + "3.jpg", title:"Titre3", description: "Description3", link: "link3" },
    { url : this.path + "4.jpg", title:"Titre4", description: "Description4", link: "link4" }
  ];
  private position = 0;
  private timeout;

  ngOnInit() 
  { 
      this.animate();
  }

  private animate()
  {
    this.next();
  }

  private next()
  {
      clearTimeout(this.timeout);
      if (this.position === this.images.length) { this.position = 1;}
      else { this.position++; }
      this.timeout = setTimeout(() => this.animate(), 6000);
  }
  private previous()
  {
    clearTimeout(this.timeout);
    if (this.position === 1) { this.position = this.images.length;}
    else { this.position--; }
    this.timeout = setTimeout(() => this.animate(), 6000);
  }

}
export interface Image
{
    title : string,
    description: string;
    link : string,
    url: string;
}
