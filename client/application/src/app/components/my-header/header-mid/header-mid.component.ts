import { Component} from '@angular/core';
import { Links } from '../../../classes/links';
import { Couleur } from '../../../classes/couleur';

@Component({
  selector: 'header-mid',
  templateUrl: './header-mid.component.html',
  styleUrls: ['./header-mid.component.css']
})
export class HeaderMidComponent{

  private links = new Links();

  constructor(private colorSelector : Couleur) { }


}
