"use strict";

var tiere = require("./CL_Katzen");
var prompt = require("prompt")

var schema = {
    properties: {
        name:{
            pattern: /^[a-zA-Z\s\-]+$/,
            message: "Bitte den Namen und das Gewicht der Katze eingeben:",
            required: true
        },
        gewicht:{
            pattern: /[0-9]/,
            message: "Nur Zahlen angeben",
            required: true
        }
    }
}

prompt.start();

prompt.get(schema, function(err, result){
    var katze1 = new tiere(result.name, result.gewicht);
    katze1.speak();
    katze1.futter();

    setTimeout(function(){katze1.haufen()}, 5000);
})


