const fs = require ('fs');
const http = require('http');
const request = require('request');
const wol = require('wol');

let json= "";

const server = http.createServer ((req,res) => {

   // console.log(req.url, "vazno")

   if (req.url.includes("heat")){


      request('http://192.168.1.65/heat', { json: true }, (err, resReq, body) => {
         if (err) { return console.log(err); }
       
          json=resReq.body;
         //  console.log(res.body);

       

res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})

res.end(JSON.stringify(json));

       
       });
       
   }

   else if (req.url.includes("led1")){

      request('http://192.168.1.65/led1', { json: true }, (err, resReq, body) => {
         if (err) { return console.log(err); }
       
          json=resReq.body;
       
      //  console.log(res.body);
       

res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})

res.end(JSON.stringify(json));

       });

   }

   else if (req.url.includes("led2")){

      request('http://192.168.1.65/led2', { json: true }, (err, resReq, body) => {
         if (err) { return console.log(err); }
       
          json=resReq.body;
       
      //  console.log(res.body);
       

res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})

res.end(JSON.stringify(json));

       });

   }

   else if (req.url.includes("led3")){

      request('http://192.168.1.65/led3', { json: true }, (err, resReq, body) => {
         if (err) { return console.log(err); }
       
          json=resReq.body;
       
      //  console.log(res.body);
       

res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})

res.end(JSON.stringify(json));

       });

   }

   else if (req.url.includes("turnoff")){

      request('http://192.168.1.65/turnOff', { json: true }, (err, resReq, body) => {
         if (err) { return console.log(err); }
       
          json=resReq.body;
       
      //  console.log(res.body);
       

res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})

res.end(JSON.stringify(json));

       });

   }


   else if (req.url.includes("wake")){
console.log("pali pilu")

wol.wake('70:85:C2:A9:xx:xx', function(err, res){
 }).then((el)=>{

console.log("FILIP", el)
res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})

el ? res.end("TURNED ON"): res.end("FAILED")

 });




   }


   else{

if(json ===""){

   request ('http://192.168.1.65/', { json: true }, (err, resReq, body) => {
      if (err) { return console.log(err); }
    
       json=resReq.body;
      //  console.log(res.body);
      console.log("first time access");

res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})

res.end(JSON.stringify(json));

    });


}

else {

   res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})

res.end(JSON.stringify(json));
}




    }

console.log("access!");




});

//TODO stavi internal ip address od servera
server.listen(1338, 'localhost', ()=>{

console.log("listeningg");

})


