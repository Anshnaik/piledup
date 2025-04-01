const express=require("express");
const app=express();

app.set("view engine","ejs");

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