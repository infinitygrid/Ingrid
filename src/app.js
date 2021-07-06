
require('dotenv').config();

const Ingrid = require('./ingrid/ingrid.js');
const Webhook = require('./web/webhook.js');
const fs = require('fs');

global.getIngrid = () => {
    return Ingrid;
}

fs.readFile('config.json', 'utf8' , (err, data) => {

    if (err) {
      console.error(err);
      process.exit(1);
    }

    Webhook.listen(process.env.port);
    Ingrid.start(process.env.token, JSON.parse(data));

})


