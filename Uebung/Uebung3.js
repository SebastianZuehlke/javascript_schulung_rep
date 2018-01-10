
//  funktion createObjArray(){

//  var Array = new Array;

//  }


var tiere = function (name, gewicht, kannSprechen) {
    this.name = name,
        this.gewicht = gewicht,
        this.speek = function (speek) {
            this.sprechen = kannSprechen;
            console.log(this.sprechen);
        };
};
var mobile = function (farbe, gewicht, speed, acce, bremse) {
    this.farbe = farbe
    this.gewicht = gewicht
    this.speed = speed;
    this.bremse = function (bremse) {
        var accelerate = acce;
        // this.bremse =   function () { var bremse = bremse; }
    };
};


var katze1 = new tiere("Leo", 7, "MIAU");
var katze2 = new tiere("pussy", 4, "MIAU");
var hund = new tiere("Brutus", 45, "WAU");
var auto = new mobile("Blau", 1700, 270, 7, 45);

var objekte = [katze1, katze2, hund, auto];


function speak(array) {

    array.forEach(function (object) {
        if (typeof object.speak == "function") {
            object.speak();
        }
    })
}

function calcWeight(array){
    return array.reduce(function(acc,currentObject){
        return acc + currentObject.weight;
    },0);
}

speak(objekte);
// var weight = calcWeight(objekte);
// console.log(weight);