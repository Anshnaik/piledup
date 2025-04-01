const express=require("express");
const app=express();

const path = require('path');

app.set("view engine","ejs");

app.set('views', path.join(__dirname, '..', 'views'));

app.use(express.static(path.join(__dirname,'..','public')));

app.get('/', (req, res) => {
    res.render("index.ejs");
});


app.get("/home",(req,res)=>{
    res.render("home");
})

app.get("/contact",(req,res)=>{
    res.render("contact");
})

app.get("/project",(req,res)=>{
    res.render("project");
})

app.listen(3000,()=>{
    console.log("server is running");
})