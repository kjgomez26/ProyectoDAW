const express = require('express');
const app= express();
const port=3000;
//const cors = require('cors');
//const bodyParser = require('body-parser');

//app.use(cors());
//app.use(bodyParser.json());

//app.get('/', (req,res) => res.send('test'));
app.get('/messages', (req,res) => {
    const messages = ["Holi","Estoy","funcionando"];
    res.send(messages);
});

/*app.post('/', (req, res) => {
    console.log(req.body);
    res.json({});
});*/ //post enviando
    //res.send('test'));
app.listen(port,() => console.log('app running'));
