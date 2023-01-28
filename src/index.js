const express = require('express');
const bodyParser = require('body-parser');


const { PORT } = require('./config/server-setup');


const app = express();

const ServerSetup = async () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.listen(PORT , () =>{
        console.log(`Server started at port ${PORT}`);
    })
}