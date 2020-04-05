const fs = require ('fs');
const http = require('http');
const request = require('request');

let json= "";

const server = http.createServer ((req,res) => {

   // console.log(req.url, "vazno")

   if (req.url.includes("heat")){


      request('http://192.168.0.15/heat', { json: true }, (err, resReq, body) => {
         if (err) { return console.log(err); }
       
          json=resReq.body;
         //  console.log(res.body);

       

res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})

res.end(JSON.stringify(json));

       
       });
       
   }

   else if (req.url.includes("led1")){

      request('http://192.168.0.15/led1', { json: true }, (err, resReq, body) => {
         if (err) { return console.log(err); }
       
          json=resReq.body;
       
      //  console.log(res.body);
       

res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})

res.end(JSON.stringify(json));

       });

   }

   else if (req.url.includes("led2")){

      request('http://192.168.0.15/led2', { json: true }, (err, resReq, body) => {
         if (err) { return console.log(err); }
       
          json=resReq.body;
       
      //  console.log(res.body);
       

res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})

res.end(JSON.stringify(json));

       });

   }

   else if (req.url.includes("led3")){

      request('http://192.168.0.15/led3', { json: true }, (err, resReq, body) => {
         if (err) { return console.log(err); }
       
          json=resReq.body;
       
      //  console.log(res.body);
       

res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})

res.end(JSON.stringify(json));

       });

   }



   else{
      request ('http://192.168.0.15/', { json: true }, (err, resReq, body) => {
         if (err) { return console.log(err); }
       
          json=resReq.body;
         //  console.log(res.body);
         

res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})

res.end(JSON.stringify(json));

       });


    }

console.log("access!");




});

server.listen(1337, '192.168.0.28', ()=>{

console.log("listeningg");

})


