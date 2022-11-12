/**
 * author: Refaat
 * this module exports a Joi schematic for validating a log object
 * in the request body
 */

const Joi = require('joi');

const logSchema = Joi.object({
    message: Joi.string().required(),
    ip: Joi.string().required()
});


module.exports = { logSchema }