import * as http from 'http';
import * as sock from 'socket.io';
import { ServiceEvenements } from './evenements.service';

export class Socket
{
    private static connectedSocket : Array<SocketIO.Socket> = [];
    private static serverSocket: SocketIO.Server;

    //Services
    private static serviceEvenements : ServiceEvenements;

    constructor(server : http.Server)
    {
        Socket.serverSocket = sock.listen(server);
        this.initialiserSocket();
    }

    private initialiserSocket() : void
    {
        Socket.serviceEvenements = new ServiceEvenements();
        Socket.serverSocket.on('connection', (socket : SocketIO.Socket) => 
        { 
            console.log("Nouvelle connection établie") 
            Socket.connectedSocket.push(socket);
            console.log('Nombre de socket connecté : ' + Socket.connectedSocket.length);
            new ServiceEvenements(socket);

            Socket.serverSocket.on('disconnect', () =>
            {
                console.log("Un utilisateur s'est déconnecté");
                for( let i = 0; i < Socket.connectedSocket.length; i++)
                {
                    if(Socket.connectedSocket[i] === socket)
                    {
                        
                        Socket.connectedSocket[i] = Socket.connectedSocket[Socket.connectedSocket.length];
                        Socket.connectedSocket[Socket.connectedSocket.length] = null;
                        break;
                    }
                }
                console.log('Nombre de socket connecté : ' + Socket.connectedSocket.length);
            }); 
        });  
             
        
        console.log("Socket initialisé - Serveur");
    }

    public serviceEvenements() : ServiceEvenements { return Socket.serviceEvenements; }

}
