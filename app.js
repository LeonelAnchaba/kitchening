const express = require("express");
const app = express();
const path = require("path");



app.use(express.static("public"))

app.get ("/", ((req, res) =>{
    res.sendFile(path.join(__dirname, "/views/home.html"));
}))

app.listen (3001, ()=>{
    console.log("Kitchening corriendo en https://localhost:3001");
})