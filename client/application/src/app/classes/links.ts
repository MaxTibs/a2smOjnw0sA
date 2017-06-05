
export class Links
{

    //Les 2 listes doivent se correspondre. À modifier éventuellement avec une map
    private linkToGo : string[] =
    [
        "forum",
        "slideshow",
        ""
    ];

    private nameToGo : string[] =
    [
        "Forum",
        "slideshow",
        "testPage"
    ];

    public goesTo() : Array<string>
    {
        return this.linkToGo;
    }
    public nameGoesTo() : Array<string>
    {
        return this.nameToGo;
    }
}