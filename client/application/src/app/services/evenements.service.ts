import { evenement } from './evenement.interface';

export class ServiceEvenements
{
    private socket : SocketIOClient.Socket;
    public evenement : Array<evenement> = [];
    constructor(socket : SocketIOClient.Socket)
    {
        this.initialiserSocket(socket);
    }

    private initialiserSocket(socket : SocketIOClient.Socket)
    {
        this.socket = socket;

        this.socket.on('liste_evenements', (response) => 
        {
            console.log(response);
        });
        this.socket.on('obtenir_evenement', (response) =>
        {
            console.log(response);
            this.evenement = response;
        });
    }

    public ajouterEvenement()
    {
        console.log("Ajout d'événement");
        this.socket.emit('Ajout_evenement', { 
                                                titre : "titre" + this.evenement.length,
                                                organisation : "organisation" + this.evenement.length,
                                                date : new Date(),
                                                desciption : "Desc" + this.evenement.length,
                                                endroit : "Endroit" + this.evenement.length,
                                                adresse : "Adresse" + this.evenement.length,
                                                codePostal : "CodePostal" + this.evenement.length,
                                                latitude : this.evenement.length,
                                                longitude : this.evenement.length});
        this.obtenirEvenement();
    }

    public obtenirEvenement()
    {
        this.socket.emit('obtenir_evenement');
    }
}