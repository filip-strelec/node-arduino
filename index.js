const fs = require ('fs');
const http = require('http');
const request = require('request');
const wol = require('wol');
const url = require('url');
const { time } = require('console');
let timeout = 0;
let timeoutDate;
let heatingTimeout;

let json= "";

const server = http.createServer ((req,res) => {

   // console.log(req.url, "vazno")

  
   if (req.url.includes("heat")){
      const params = url.parse(req.url, true).query;
      timeout = Number.parseInt(params.timeout)*60000 //in minutes
      console.log(params, "Filip Fajrunt");
      request('http://192.168.1.144/heat', { json: true }, (err, resReq, body) => {
         if (err) { return console.log(err); }
       
          json=resReq.body;
         //  console.log(res.body);

       


if (timeout && timeout !=0 && !heatingTimeout && json.heat === "On" ){
   timeoutDate = new Date().getTime() + timeout;
   heatingTimeout = setTimeout(() => {
      
      request('http://192.168.1.144/heat', { json: true }, (err, resReq, body) => {
         if (err) { return console.log(err); }
       
          json=resReq.body;
       
      //  console.log(res.body);

       });

       heatingTimeout = undefined;
       timeoutDate = undefined;
   }, timeout);
}
else {
if (heatingTimeout){
   clearTimeout(heatingTimeout)
   heatingTimeout = undefined;
   timeoutDate = undefined;
}
}
timeoutDate ? (json.timeoutDate = timeoutDate) : (json.timeoutDate = false);
res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})

res.end(JSON.stringify(json));

       
       });
       
   }



   else if (req.url.includes("irsend")){
      const urlRequest = req.url
            request(`http://192.168.1.144${urlRequest}`, { json: true }, (err, resReq, body) => {
               if (err) { return console.log(err); }
             
                json=resReq.body;
             
            //  console.log(res.body);
             
      
      res.writeHead(200,{"Content-Type": "application/json"})
      res.writeHead(200,{"Access-Control-Allow-Origin": "*"})
      timeoutDate ? (json.timeoutDate = timeoutDate) : (json.timeoutDate = false);
      res.end(JSON.stringify(json));
      
             });
      
         }



   else if (req.url.includes("led1")){

      request('http://192.168.1.144/led1', { json: true }, (err, resReq, body) => {
         if (err) { return console.log(err); }
       
          json=resReq.body;
       
      //  console.log(res.body);
       

res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})
timeoutDate ? (json.timeoutDate = timeoutDate) : (json.timeoutDate = false);
res.end(JSON.stringify(json));

       });

   }

   else if (req.url.includes("led2")){

      request('http://192.168.1.144/led2', { json: true }, (err, resReq, body) => {
         if (err) { return console.log(err); }
       
          json=resReq.body;
       
      //  console.log(res.body);
       

res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})
timeoutDate ? (json.timeoutDate = timeoutDate) : (json.timeoutDate = false);
res.end(JSON.stringify(json));

       });

   }

   else if (req.url.includes("led3")){

      request('http://192.168.1.144/led3', { json: true }, (err, resReq, body) => {
         if (err) { return console.log(err); }
       
          json=resReq.body;
       
      //  console.log(res.body);
       

res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})
timeoutDate ? (json.timeoutDate = timeoutDate) : (json.timeoutDate = false);
console.log(json, "FILIP FAJRUNT")
res.end(JSON.stringify(json));

       });

   }

   else if (req.url.includes("turnoff")){

      request('http://192.168.1.144/turnOff', { json: true }, (err, resReq, body) => {
         if (err) { return console.log(err); }
       
          json=resReq.body;
       
      //  console.log(res.body);
       

res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})
timeoutDate ? (json.timeoutDate = timeoutDate) : (json.timeoutDate = false);
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





else if (req.url.includes("refresh")){


   if(json ===""){

      request ('http://192.168.1.144/', { json: true }, (err, resReq, body) => {
         if (err) { return console.log(err); }
       
          json=resReq.body;
         //  console.log(res.body);
         console.log("first time access");
   
   res.writeHead(200,{"Content-Type": "application/json"})
   res.writeHead(200,{"Access-Control-Allow-Origin": "*"})
   timeoutDate ? (json.timeoutDate = timeoutDate) : (json.timeoutDate = false);
   res.end(JSON.stringify(json));
   
       });
   
   
   }
   
   else {
   
      res.writeHead(200,{"Content-Type": "application/json"})
   res.writeHead(200,{"Access-Control-Allow-Origin": "*"})
   timeoutDate ? (json.timeoutDate = timeoutDate) : (json.timeoutDate = false);
   res.end(JSON.stringify(json));
   }




}



   else{



   request ('http://192.168.1.144/', { json: true }, (err, resReq, body) => {
      if (err) { return console.log(err); }
    
       json=resReq.body;
      //  console.log(res.body);
      console.log("first time access");

res.writeHead(200,{"Content-Type": "application/json"})
res.writeHead(200,{"Access-Control-Allow-Origin": "*"})
timeoutDate ? (json.timeoutDate = timeoutDate) : (json.timeoutDate = false);

res.end(JSON.stringify(json));

    });


    }

console.log("access!");




});

//TODO stavi internal ip address od servera
server.listen(1338, '127.0.0.1', ()=>{

console.log("listeningg");

})


