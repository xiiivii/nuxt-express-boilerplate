const { Nuxt, Builder } = require('nuxt');
const server = require('./server');

const config = require('./nuxt.config.js');

config.dev = process.env.NODE_ENV !== 'production';


(async () => {
    const nuxt = new Nuxt(config);

    if (config.dev) {
        await new Builder(nuxt).build();
    } else {
        await nuxt.ready();
    }

    server(nuxt);
})();
