// const express = require("express");
// const bharti = express();
// const fs=require("fs");
const port= 8000;
// const path=require("path");
// const static=path.join(__dirname,"./public")
// // require('./hb')
// // bharti.get("/",(req,res)=>{
// //     res.end("HELLO");
// // });
// // bharti.get("/about",(req,res)=>{
// //     res.end("HELLO its me");
// // });
// // bharti.post("/me",(req,res)=>{
// //     res.end("HELLO its me bharti");
// // });

// // bharti.listen(port,()=>{
// // console.log("server");
// // });
// bharti.use(express.static(static));
// bharti.get('/',(req,res)=>{
//     fs.readFile("bh.html","utf-8",(err,data)=>
//     {
//         res.end(data);
//     })
// })
// console.log(__dirname)
// bharti.listen(port);

var express = require('express')
var bodyParser = require('body-parser')
const fs = require("fs");

var app = express()
app.use(bodyParser.urlencoded(false))
app.use(bodyParser.json())
app.get('/',(req,res)=>{
        fs.readFile("bh.html","utf-8",(err,data)=>
         {
            res.end(data);
         })

     })
     app.get('/submit',(req,res)=>{
    //    console.log(req.body)
       res.end("success")

     })
     app.listen(port,()=>{
        console.log(`your server is starting in ${port}`);
    })


