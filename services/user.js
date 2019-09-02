
const uuid = require('uuid');
const { userEntity } = require('../models/db/index');
// const {logger} = require('../helpers/index')

module.exports.create = function (user) {
    return new Promise((resolve, reject) => {
        user.userId = uuid();
        userEntity.create(user, function (err, usr) {
            if (err) {
                reject(err);
            }
            resolve(usr);
        });
    });
}


module.exports.getById = function (userId) {
    return new Promise((resolve, reject) => {
        userEntity.get(userId, function (err, usr) {
            if (err) {
                reject(err);
            }
            resolve(usr);
          });
    });
}

module.exports.update = function (user) {
    return new Promise((resolve, reject) => {
        userEntity.update(user, function (err, usr) {
            if (err) {
                reject(err);
            }
            resolve(usr);
        });
    });
}











