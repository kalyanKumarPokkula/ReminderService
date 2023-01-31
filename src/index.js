const express = require('express');
const bodyParser = require('body-parser');


const { PORT } = require('./config/server-setup');
const { sendBasicEmail } = require('./services/email-service')


const ServerSetup = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.listen(PORT , () =>{
        console.log(`Server started at port ${PORT}`);

        sendBasicEmail(
            'support@admin.com',
            'kalyankumarpokkula@gmail.com',
            'This is testing email',
            'hey, how are you, I hope you like the support'

        )
    })
}

ServerSetup();