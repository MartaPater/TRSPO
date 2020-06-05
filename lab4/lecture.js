const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Tests = require('./question_model')
const Answers = require('./answer_model')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/lecture', async (req, res)=>{
    const tests = await Tests.find();
    res.json(tests);
});

app.post('/lecture', async (req, res)=>{
    const tests = new Tests({
        id : req.body.id,
        title: req.body.title,
        options : req.body.options
    })
    try{
        await tests.save()
        res.json(tests);
}
    catch(e){
        console.log(e);
    }
    
});


app.put('/lecture/:id', async (req, res)=>{
    await Answers.findOneAndUpdate({userId: req.params.id}, req.body);
    res.json(req.body);
});

app.delete('/lecture/:id', async (req, res)=>{
    const answers = await Answers.deleteOne({userId : req.params.id})
    res.json(answers);
 
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
