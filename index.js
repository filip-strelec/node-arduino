const fs = require ('fs');
const http = require('http');
const request = require('request');

let json= "";

const server = http.createServer ((req,res) => {

   // console.log(req.url, "vazno")

   if (req.url.includes("heat")){


      request('http://192.168.0.15/heat', { json: true }, (err, res, body) => {
         if (err) { return console.log(err); }
       
          json=res.body;
          console.log(res.body);

       
       
       });
       
   }

   else if (req.url.includes("led1")){

      request('http://192.168.0.15/led1', { json: true }, (err, res, body) => {
         if (err) { return console.log(err); }
       
          json=res.body;
       
       console.log(res.body);
       
       });

   }



   else{
      request('http://192.168.0.15/', { json: true }, (err, res, body) => {
         if (err) { return console.log(err); }
       
          json=res.body;
          console.log(res.body);

       
       
       });


    }

console.log("access!");




res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})

res.end(JSON.stringify(json));


});

server.listen(1337, 'localhost', ()=>{

console.log("listeningg");

})


