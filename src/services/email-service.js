const sender = require('../config/emailconfig');
const  TicketRepository  = require('../repository/notification-ticket'); 

const repo = new TicketRepository();

const sendBasicEmail = async (mailFrom , mailTo , mailSubject , mailBody) => {
    const response = await sender.sendMail({
        from : mailFrom,
        to : mailTo,
        subject : mailSubject,
        text : mailBody
    });
    console.log(response);
}


const fetchPendingEmail = async (timestamp) =>{
    try {
        let response = await repo.get({status : 'PENDING'});
        return response;
    } catch (error) {
        console.log("something went wrong in the service");
        console.log(error);
        throw error
    }
}

const createNotification = async (data) => {
    try {
        let response = await repo.create(data);
        return response;
    } catch (error) {
        console.log("something went wrong in the service");
        throw error
    }
}

const updateTicket = async (filterId , data) => {
    try {
        let ticket = await repo.update(filterId , data);
        return ticket;
    } catch (error) {
        console.log("something went wrong in the service");
        throw error
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmail,
    createNotification,
    updateTicket
}