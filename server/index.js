const express = require("express");
const app = express();
const db = require("mysql");

app.get("/", (req,res)=>{
    res.send("Hello World!")
})

app.listen(4001, () => { 
    console.log("rodando servidor");
});