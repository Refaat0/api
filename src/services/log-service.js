/**
 * author: Refaat
 * a service encapsulates all business logic; it should not know about the HTTP layer.
 * this module exports service functions for the log controller
 */

// imports the mongoose Log model. we use this to preform db queries against the Log document!
const Log = require('../models/log-model');


/**
 * this service queries the database for an array of log objects
 * @return an array of log objects
 */
const getAllLogs = async () => {
    try {
        const logs = await Log.find();
        return { logs }
    } catch (error) {
        throw error;
    }
}

/**
 * this service quieries the database of a log object specified by an id
 * @param {String} _id the mongodb object id of the log
 * @return a log object specified by an id
 */
const getLogById = async (_id) => {
    try {
        const log = await Log.findOne({ _id });
        return { log }
    } catch (error) {
        throw error;
    }
}

/**
 * this services creates a new log in the database
* @param {JSON} log a log object
* @return the created log object
 */
const createLog = async (log) => {
    try {
        const createdLog = await Log.create(log);
        return { createdLog }
    } catch (error) {
        throw error;
    }
}

/**
 * this service updates an existing log in the database
 * @param {JSON} log a log object
 * @param {String} _id the mongodb object id of the log
 * @return the log object before it is updated
 */
const updateLog = async (_id, log) => {
    try {
        const updateLog = await Log.findOneAndUpdate({ _id }, log);
        return { updateLog }
    } catch (error) {
        throw error;
    }
}

/**
 * this service deletes an existing log in the database
 * @param {String} _id the mongodb object id of the log
 * @return the deleted log object
 */
const deleteLog = async (_id) => {
    try {
        const deletedLog = await Log.findOneAndDelete({ _id });
        return { deletedLog }
    } catch (error) {
        throw error;
    }
}


module.exports = { getAllLogs, getLogById, createLog, updateLog, deleteLog }