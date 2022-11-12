/**
 * author: Refaat
 * this module contains the URI's for the log resource and...
 * imports validation middleware for the Logs & mongoose object id
 */

const express = require('express');
const router = express.Router();

// import validation middleware 
const { logSchema } = require('../schematics/log-schematic');
const { sanitizeBody } = require('../middleware/sanitize-body');
const { sanitizeId } = require('../middleware/sanitize-id');

// import log controller functions
const { getAllLogs, getLogById, createLog, updateLog, deleteLog } = require('../controllers/log-controller');

/** api routes **/
router.get('/api/logs', getAllLogs);
router.get('/api/logs/:id', sanitizeId, getLogById);
router.post('/api/logs', sanitizeBody(logSchema), createLog);
router.put('/api/logs/:id', sanitizeBody(logSchema), sanitizeId, updateLog);
router.delete('/api/logs/:id', sanitizeId, deleteLog);


module.exports = router;
