const {dynamoDbHelper,logger} = require('../../helpers/index');
const Joi = require('joi');

const dynogels = dynamoDbHelper.getContext();

var userEntity = dynogels.define('users', {
    hashKey : 'userId',
    schema : {
        userId : Joi.string(),
      firstName   : Joi.string(),
      lastName   : Joi.string(),
      age : Joi.number(),
      country : Joi.string(),
      stack : dynogels.types.stringSet(),
      hasChildren : Joi.bool(),
      bio:{
        title   : Joi.string(),
        des   : Joi.string(),
      }
    },
    validation:{
            allowUnknown: true
    }
  });
  userEntity.config({tableName: 'users'});

//   dynogels.createTables(function(err) {
//     if (err) {
//       console.log('Error creating tables: ', err);
//     } else {
//       console.log('Tables has been created');
//     }
//   });

  module.exports = userEntity;
  