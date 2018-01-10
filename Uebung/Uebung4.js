"use strict";

var objects = new Array();

var catA = {
    name: "omar Rodriguez Lopez",
    weight: 20,
    speak: function(){
        console.log("My name is " + this.name + " i am a Cat" )
    }
}
objects.push(catA);

var catB = {
    name: "Ian Kilmister",
    weight: 55,
    speak: function(){
        console.log("My name is " + this.name + "i am a Cat" )
    }
}
objects.push(catB);

var dog = {
    name: "Jack",
    weight: 80,
    speak: function(){
        console.log("My name is " + this.name + "i am da Dog")
    }
}
objects.push(dog);

var car = {
    color: "red",
    weight: 100,
    speed: 50,
    accelerate: function(factor){
        this.speed = this.speed * factor;
    },
    break: function(){
        this.speed = 0;
    }
}
objects.push(car);

function speak(array){
    array.forEach(function(object){
        if(typeof object.speak == "function"){
            object.speak();
        }
    })
}

function calcWeight(array){
    return array.reduce(function(acc,currentObject){
        return acc + currentObject.weight;
    },0);
}

speak(objects);
var weight = calcWeight(objects);
console.log(weight);

// var jsonArray = JSON.stringify(objects);
console.log("JSON-Objekt: " ,JSON.stringify(objects) );
console.log("Normal: " ,objects);


//
//
var mutterarray = new array();

var mutter = {
    name: "Pussy",
    weight: 15,
    kinder: function(){
        var kinderarray = new array();{
            var kidyA = {
                name: "KidyA",
                speak: function(){
                    console.log("My name is " + this.name + " i am a Cat" )
                }
            }
            kinderarray.push(kidyA);
            
            var kidyB = {
                name: "KidyB",
                speak: function(){
                    console.log("My name is " + this.name + "i am a Cat" )
                }
            }
            kinderarray.push(kidyB);
        }
    }
}
