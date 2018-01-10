
function createKatzen(name, gewicht) {

    return {
        name: name,
        gewicht: gewicht,
    }
}

function speak(array){
    array.forEach(function(object){
             console.log("My name is " + object.name)
    })
}

 var katzen = Array();

katzen.push(createKatzen("Mieze", 7));
katzen.push(createKatzen("Mauz", 6));
katzen.push(createKatzen("Lenny", 8));+
katzen.push(createKatzen("May", 4));
katzen.push(createKatzen("Pussy", 7));

speak(katzen);
// console.log(katzen);