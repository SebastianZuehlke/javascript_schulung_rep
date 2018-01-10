
var Tiere = function (name, groesse, gewicht) {
        this.name = name;
        this.groesse = groesse;
        this.gewicht = gewicht;
        this.fetter = function(factor){
                            this.groesse *= factor;
                            this.gewicht *= factor;
    }

};

var katze1 = new Tiere("Mieze", 30, 7);
var katze2 = new Tiere("Mauz", 27, 6.5);
var katze3 = new Tiere("Lenny", 45, 8);
var katze4 = new Tiere("May", 25, 4.2);
var katze5 = new Tiere("Pussy", 33, 7);

katze1.fetter(1.2);

console.log(katze1.gewicht);

katzen = [katze1, katze2, katze3, katze4, katze5];

katzen.forEach(function(object){object.fetter(1.4)});

katzen.forEach(function(object){    console.log("My name is " + object.name ,"; Gewicht " + object.gewicht);})
