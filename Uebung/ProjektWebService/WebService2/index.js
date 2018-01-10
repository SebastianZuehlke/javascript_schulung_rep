"use strict"

var express = require("express");
var app = express();
var sqlite = require("sqlite3");
var db = new sqlite.Database("./Chinook_sqlite.sqlite");

// db.each("select ArtistId as id, Name from Artist", function (err, row) {
//     if (err) return console.err(err);
//     console.log(row);
// });

// app.get('/artist', function(req, res){
//     db.each("select ArtistId as id, Name from Artist", function (err, row ) {
//         if (err) return console.error(err);
//         console.log(row);
// //         res.write(row);
//             if(end)
//              
//     }, funtion(){  res.end(); });
//   })

app.get('/artist', function (req, res) {
  db.all("select ArtistId as id, Name from Artist", function (err, row) {
    if (err) return console.error(err);
    // console.log(row);
    var names = [];
    row.forEach(function (eintrag) {
      names.push(eintrag);
    });
    names.sort(function (a, b) { return a - b });
    res.send(names);
  });
});

app.get('/customer/:id', function (req, res) {
  var sql = { query: "select * from Customer where CustomerId = " + req.params.id };
  db.each(sql.query, function (err, row) {
    if (err) return console.error(err);
    console.log(row);
    res.send(row)
  });
});

app.get('/artist/:artistId', function (req, res) {
  var sql = { query: "select ArtistId as Id, Name from Artist where ArtistId = " + req.params.artistId };
  db.all(sql.query, function (err, row) {
    if (err) return console.error(err);
    console.log(row);
    res.send(row);
  });
});

app.get('/invoices/:id', function( req, res){
  var sql = { query: "select * from Invoice where InvoiceId = " + req.params.id };
  db.all(sql.query, function(err, row){
    if (err) return console.error(err);
    console.log(row);
    res.send(row);
  });
});

app.get('/albums/:albumId/tracks', function(req, res, next){
  // var sql = { query: ""};
  console.log('the response will be sent by the next function ...');
  next();
}, function(res, req){
  console.log('Next')
  // res.send('Hello from B!');
});

app.listen(8080, function () {
  console.log("Server gestartet")
});

console.log("Server ");