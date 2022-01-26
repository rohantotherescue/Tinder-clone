import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";
const app= express();
const port=  8001;
// process.env.PORT ||  this was something.
const connection_url= "mongodb+srv://hornyrohan:6bKFScXzB9hF7k3j@cluster0.m63hu.mongodb.net/TinderDB?retryWrites=true&w=majority";
mongoose.connect(connection_url,{useUnifiedTopology: true});

app.use(express.json());
app.use(Cors());
app.get('/', (req,res)=> res.send("hello.")); //Check
app.post('/tinder/cards', (req,res)=>
{
    const dbCard= req.body;
    Cards.create(dbCard,(err, data)=>
    {
        if(err) res.status(500).send(err);
        else res.status(201).send(data);
    });
})
app.get('/tinder/cards',(req,res)=>{
    Cards.find((err, data)=>
    {
        if(err) res.status(500).send(err);
        else res.status(200).send(data);
    });
});
app.listen(port, ()=> console.log("listenin'"));