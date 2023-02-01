const { createNotification } = require('../services/email-service');

const create = async (req ,res) => {
    try {
        const response = await createNotification(req.body);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Successfully registered an email reminder",
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            data : {},
            success : false,
            message : "Successfully registered an email reminder",
            error : error
        })
    }
}

module.exports = {
    create
}