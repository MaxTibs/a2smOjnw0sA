import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-slider',
  templateUrl: './my-slider.component.html',
  styleUrls: ['./my-slider.component.css']
})
export class MySliderComponent implements OnInit {

  private images : string[] = 
  [
    "./1.png",
    "./2.png",
    "./3.png",
  ];
  private currentImage : number = 1;
  constructor() { }

  ngOnInit() { this.rotateImage(); }
  
  private rotateImage()
  {
    setTimeout(() => this.rotateImage, 3000);
    
  }
 

}
