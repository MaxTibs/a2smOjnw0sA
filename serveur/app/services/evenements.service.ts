import * as mongo from 'mongodb';
import * as assert from 'assert';
import { evenement } from './evenement.interface';
import { Database } from './database';

export class ServiceEvenements
{
    private socket : SocketIO.Socket;
    private db : Database;

    constructor(socket? : SocketIO.Socket) 
    { 
        if(socket != null)
        {
            this.socket = socket; 
            this.init(socket);
        }
        this.db = new Database("mongodb://localhost:27017/test");
    }

    private init(socket : SocketIO.Socket)
    {
        this.socket.on('Ajout_evenement', (data : any) =>
        {
            console.log("Reception d'évènement");
            console.log(data);
            this.ajouterEvenement(data);
        });
        this.socket.on('obtenir_evenement', () => 
        {
            this.getEvents();
        });
        console.log("Complétion des services d'événement");
    }

    private getEvents() : void
    {
        let collection = this.db.getDb().collection('evenements');
        collection.find().toArray().then( (result) => { this.socket.emit('obtenir_evenement', result);});
    }

    public ajouterEvenement(evenement : evenement)
    {
        let collection = this.db.getDb().collection('evenements');
        collection.insert(evenement);
    }
}