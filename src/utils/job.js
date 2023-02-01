const cron = require('node-cron');
const sender = require('../config/emailconfig');

const { fetchPendingEmail, updateTicket } = require('../services/email-service');



const setUpJobs = () => {

    cron.schedule('*/2 * * * *', async () => {
        console.log('running a task every two minutes');
        const response = await fetchPendingEmail();
        response.forEach((email) => {
          sender.sendMail({
            to : email.recepientEmail,
            subject : email.subject,
            text : email.context
          }, async (err , data) => {
            if(err){
              console.log(err);
            }else{
              console.log(data);
              await updateTicket(email.id, {status : "SUCCESS"});
            }
          })  
        });
        console.log(response);
      });
}


module.exports = setUpJobs;