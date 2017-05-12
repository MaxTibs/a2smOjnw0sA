import { Component, OnInit, Input } from '@angular/core';
import { Couleur } from "../../classes/couleur";
@Component({
  selector: 'my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent {

  @Input() color : string;
  constructor(private colorSelector : Couleur) {}
}
