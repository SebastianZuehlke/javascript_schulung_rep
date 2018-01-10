
class user {
    constructor(name) {
        this.name = name;
        // this.timee = time;
        // this.zaehler = zaehler;
    }
    fetter(factor) {
    this.groesse *= factor;
        this.gewicht *= factor;
    }
    time(){
        var date = date.now() ;
        return date;
        // var now = moment();
        // var formatted = now.format('YYYY-MM-DD HH:mm:ss Z');
        // return formatted;
    }
    // speak(){console.log("Hallo ich bin " + this.name, " und Wiege jetzt " + this.gewicht, "KG.");}

    // futter(){console.log("Jetzt fütter mich :-(")};

    // haufen(){console.log("JETZT-Sonst setz ich dir eine Igel auf den Teppich")};
}

module.exports = user;