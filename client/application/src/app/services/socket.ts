import * as io from 'socket.io-client';
import { ServiceEvenements } from './evenements.service';
import { Injectable} from '@angular/core';

@Injectable()
export class Socket
{
    private url = "http://localhost:3002";
    private static socket : SocketIOClient.Socket;
    //Services
    private static serviceEvenements : ServiceEvenements;
    
    constructor()
    {
        //On s'assure qu'il existe seulement 1 seul connection
        if(Socket.socket === undefined) { 
            Socket.socket = io.connect(this.url);
            this.initialiserSocket();
        }
    }

    private initialiserSocket() : void
    {
        Socket.serviceEvenements = new ServiceEvenements(Socket.socket);
        console.log("Socket initialisé - Client");
    }

    public serviceEvenements() : ServiceEvenements { return Socket.serviceEvenements; }

    

}