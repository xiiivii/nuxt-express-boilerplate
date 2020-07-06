const consola = require('consola');

module.exports = (server, nuxt) => {
    const { host, port } = nuxt.options.server;

    server.listen(port, host);

    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    });
};
