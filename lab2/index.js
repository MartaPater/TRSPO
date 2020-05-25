const express = require('express');
const app = express();
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const Labs = require('./model')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/marta', async (req, res)=>{
    const labs = await Labs.find();
    res.json(labs);
});
app.get('/marta/:id', async (req, res)=>{
    const labs = await Labs.findOne({id : req.params.id})
    res.json(labs);
});

app.post('/marta', async (req, res)=>{
    const labs = new Labs({
        id : req.body.id,
        name : req.body.name
    })
    try{
        await labs.save()
        res.json(labs);
}
    catch(e){
        console.log(e);
    }
    
});


app.put('/marta/:id', async (req, res)=>{
    await Labs.findOneAndUpdate({id : req.params.id}, req.body);
    res.json(req.body);
});


app.delete('/marta/:id', async (req, res)=>{
    const labs = await Labs.deleteOne({id : req.params.id})
    res.json(labs);
 
});


const PORT = 3000;

async function start(){
    try{
    const url = 'mongodb+srv://martapater:pater10121999@cluster0-nid8k.mongodb.net/api';
    await mongoose.connect(url, {useNewUrlParser : true, useUnifiedTopology: true, useFindAndModify: false});
    app.listen(PORT, ()=> console.log(`server has been started on port ${PORT}`));

    }catch(e){
        console.log(e);
    }
    
}

start();

