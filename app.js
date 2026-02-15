const express = require("express")
const socket =require("socket.io")
const http =require("http")
const {chess} =require("chess.js");

const app =express();
const server=http.createServer(app);

const io = socket(server);

const chess = new chess();
let players ={}
let currentPlayer="w";

app.set("view wngine ","ejs");
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.render("index")
})