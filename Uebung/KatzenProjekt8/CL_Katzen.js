
class Tiere {
    constructor(name, groesse, gewicht) {
        this.name = name;
        this.groesse = groesse;
        this.gewicht = gewicht;
    }
    fetter(factor) {
    this.groesse *= factor;
        this.gewicht *= factor;
    }
    speak(){console.log("Hallo ich bin " + this.name, " und Wiege jetzt " + this.gewicht);}
}

module.exports = Tiere;