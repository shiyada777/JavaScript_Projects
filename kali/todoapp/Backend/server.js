const express= require("express");
const app=express()


//backend runs here
app.get("/",(req, res)=>{
    res.send("This is my backend here running")
})

//server run in this port number

app.listen(3000,()=>{
    console.log("hello world")
});