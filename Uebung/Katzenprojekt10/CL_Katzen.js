
class Tiere {
    constructor(name, gewicht) {
        this.name = name;
        // this.groesse = groesse;
        this.gewicht = gewicht;
    }
    fetter(factor) {
    this.groesse *= factor;
        this.gewicht *= factor;
    }
    speak(){console.log("Hallo ich bin " + this.name, " und Wiege jetzt " + this.gewicht, "KG.");}

    futter(){console.log("Jetzt fütter mich :-(")};

    haufen(){console.log("JETZT-Sonst setz ich dir eine Igel auf den Teppich")};
}

module.exports = Tiere;