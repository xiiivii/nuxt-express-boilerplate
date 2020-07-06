const express = require('express');

const optionsWrapper = require('./options');
const apiRouter = require('./routers/api');
const appRouter = require('./routers/app');
const listen = require('./listen');

module.exports = nuxt => {
    const server = express();

    optionsWrapper(server);
    apiRouter(server, nuxt);
    appRouter(server, nuxt);
    listen(server, nuxt);
};
