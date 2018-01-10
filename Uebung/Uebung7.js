

var Tiere = function (name, groesse, gewicht) { this.name = name;
                                                this.groesse = groesse;
                                                this.gewicht = gewicht;
};

Tiere.prototype.fetter = function (factor) { this.groesse *= factor;
                                             this.gewicht *= factor;
}

var katze1 = new Tiere("Mieze", 30, 7);
var katze2 = new Tiere("Mauz", 27, 6.5);
var katze3 = new Tiere("Lenny", 45, 8);
var katze4 = new Tiere("May", 25, 4.2);

katze1.fetter(1.2);
katze2.fetter(1.3);
katze3.fetter(1.1);
katze4.fetter(1.5);

katzen = [katze1, katze2, katze3, katze4];

katzen.forEach(function(object){    console.log("Hallo ich bin " + object.name, " und Wiege jetzt " + object.gewicht);})