const express = require('express');

const health = require('../controllers/health');

const router = new express.Router();

module.exports = server => {
    router
        .route('/ping')
        .get(health.ping);

    server.use('/api', router);
};
