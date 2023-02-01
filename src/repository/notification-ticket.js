const { NotificationTicket } = require('../models/index');
const { Op } = require("sequelize");

class TicketRepository{

    async getAll(){
        try {
            let response = await NotificationTicket.findAll();
            return response;
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async create(data){
        try {
            let response = await NotificationTicket.create(data);
            return response;
        } catch (error) {
            throw error
        }
    }
    
    async get(filter){
        try {
            let response = await NotificationTicket.findAll({
                where : {
                    status : filter.status,
                    notificationTime: {
                        [Op.lte]: new Date()

                    }
                }
            })
            return response;
        } catch (error) {
            console.log("something went wrong in the repository");
            throw error
        }
    }

    async update(filterId , data){
        try {
            let ticket = await NotificationTicket.findByPk(filterId);
            if(data.status){
                ticket.status = data.status;
            }
            await ticket.save();
            return ticket;
        } catch (error) {
            console.log("something went wrong in the repository");
            throw error
        }
    }
}

module.exports = TicketRepository;