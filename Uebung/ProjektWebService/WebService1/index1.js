var express = require("express");
var user = require("./dynamic");
var app = express();

// app.use(express.static("WebService1"));

app.get('/', function (req, res) {
    res.send('Hello World')
  });


app.get('/static', function(req, res){
  var test = {
    hallo: "Test",
    antwort: 42
  };
    res.send(test)
})

app.get('/dynamic/:username', function (req, res){
  var res= {
     username:  req.params.username,
     zeit: new Date(),
     aufrufe: req.params.aufrufe,
  }
  res.send(res);
})

app.listen(8080, function(){
  console.log("Server gestartet")
});

console.log("Server ")