const {logger} = require('../helpers/index');
const {userService} = require('../services/index');

exports.create = async function (req, res) {
    try {
        logger.info(`requestID ${req.requestId} in create user api`);
        //Start create user inside dynamoDB
        let _user = await userService.create(req.body);
        return res.Ok(_user);
    } catch (err) {
        logger.error(`requestID ${req.requestId} error in create api is:`, err)
        return res.InternalServerError();
    }
}


exports.get = async function (req, res) {
    try {
        logger.info(`requestID ${req.requestId} in get user api`);
        // Start get user by id from dynamoDB using hask Key
        let _user = await userService.getById(req.params.userId)
        return res.Ok(_user);
    } catch (err) {
        logger.error(`requestID ${req.requestId} error in get api is:`, err)
        return res.InternalServerError();
    }
}


exports.update = async function (req, res) {
    try {
        logger.info(`requestID ${req.requestId} in update user api`);
        //Start create user inside dynamoDB
        let userP = {
            userId:req.params.userId,
            ...req.body
        }
        let _user = await userService.update(userP);
        return res.Ok(_user);
    } catch (err) {
        logger.error(`requestID ${req.requestId} error in update api is:`, err)
        return res.InternalServerError();
    }
}