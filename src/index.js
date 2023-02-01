const express = require('express');
const bodyParser = require('body-parser');


const { PORT } = require('./config/server-setup');
const jobs = require('./utils/job');
const { create } = require('./controller/ticket-controller');
// const { sendBasicEmail } = require('./services/email-service')


const ServerSetup = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.post('/api/v1/tickets' , create);

    app.listen(PORT , () =>{
        console.log(`Server started at port ${PORT}`);

        jobs();
        // sendBasicEmail(
        //     'support@admin.com',
        //     'kalyankumarpokkula@gmail.com',
        //     'This is testing email',
        //     'hey, how are you, I hope you like the support'

        // )
    })
}

ServerSetup();