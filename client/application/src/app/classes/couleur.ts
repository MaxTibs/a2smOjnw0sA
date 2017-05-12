
export class Couleur
{
    private couleurs = new Array();

    constructor() { this.initCouleur(); }

    public getColor(name : string) : string
    {
        if(this.couleurs[name] === null) { return ""}
        return this.couleurs[name];
    }

    public getColors() 
    { 
        for (let i in this.couleurs)
        {
            console.log(i);
        }
        
        return this.couleurs;
    }

    private initCouleur()
    {
        //Couleur bleu
        this.couleurs["light-blue"] = "#3366ff";
        this.couleurs["soft-blue"] = "#5bc0de"
        this.couleurs["blue"] = "#428bca";
        this.couleurs["dark-blue"] = "#000099";

        //Couleur rouge
        this.couleurs["red"] = "#ff0033";
        this.couleurs["soft-red"] = "#d9534f"
        this.couleurs["light-red"] = "#ff3333";
        this.couleurs["dark-red"] = "#cc0033";
            
        this.couleurs["pink-orange"] = "#ff6666";

        //Couleur rose
        this.couleurs["light-pink" ] ="#ff0099";
        this.couleurs["pink"] = "#ff3399";
        this.couleurs["dark-pink"] ="#cc0066";

        this.couleurs["yellow"] = "#ffff66";
        this.couleurs["green"] = "#00cc33";
        this.couleurs["soft-green"] ="#5cb85c";
        this.couleurs["orange"] ="#ff9900";
        this.couleurs["full-black"] = "#000000";
        this.couleurs["black"] = "#333333";
        this.couleurs["full-white"] ="#ffffff";
        this.couleurs["white"] = "#ffffcf";
        this.couleurs["gray"] = "#666666";
        this.couleurs["light-gray"] = "#999999";
    }

}