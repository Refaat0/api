/**
 * author: Refaat
 * this middleware validates that the id in the request parameters is a 
 * mongodb object id
 */

const ObjectId = require('mongoose').Types.ObjectId;


const sanitizeId = (request, response, next) => {
    if (ObjectId.isValid(request.params.id)) {
        return next();
    }

    return response.status(400).json({
        msg: 'invalid id'
    });
}


module.exports = { sanitizeId }