import { Component, OnInit } from '@angular/core';
import { Socket } from '../../../services/socket';
import { google } from 'google-maps';
import {} from '@types/googlemaps';
@Component({
  moduleId: module.id,
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {

  private socket : Socket;
  private src;
  constructor()
  {
    this.socket = new Socket();
  }

  private initMap()
  {
    //GoogleMapsLoader.KEY = 'AIzaSyCi9qBdS38NgeC1YlwJ6w1r8Rg0S5YukHQ';
  }
  ngOnInit() 
  { 
    this.socket.serviceEvenements().obtenirEvenement();
    
  }
}
