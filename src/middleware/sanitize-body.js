/**
 * author: Refaat
 * this middleware validates a request body against a Joi schema for a log 
 */


/**
 * this middleware validates a request body with the provided Joi schema
 * @param {Object} schema 
 */
const sanitizeBody = (schema) => {
    return (request, response, next) => {
        // 
        const result = schema.validate(request.body);

        // if error is not in the result object then the validation has passed
        if (result.error === undefined) {
            // success
            next();
        } else {
            response.status(400).json({
                msg: result.error.message
            });
        }
    }
}


module.exports = { sanitizeBody }