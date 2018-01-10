"use strict";

var tiere = require("./CL_Katzen");

var katze1 = new tiere("Mieze", 30, 7);
var katze2 = new tiere("Mauz", 27, 6.5);
var katze3 = new tiere("Lenny", 45, 8);
var katze4 = new tiere("May", 25, 4.2);

katze1.fetter(1.2);
katze2.fetter(1.3);
katze3.fetter(1.1);
katze4.fetter(1.5);

katze1.speak();
katze2.speak();
katze3.speak();
katze4.speak();