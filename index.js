const fs = require ('fs');
const http = require('http');
const request = require('request');

let json= "";

const server = http.createServer ((req,res) => {

console.log("access!");

 request('http://192.168.0.15', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }

   json=body;



});



res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})
res.end(JSON.stringify(json));


});

server.listen(1337, '192.168.0.28', ()=>{

console.log("listening");

})


