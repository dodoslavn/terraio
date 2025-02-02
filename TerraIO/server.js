console.log("INFO: Node.js version -", process.version);
const http_server = require('http');

const functions = require('./functions.js');
const Cron = require('./cron.js');

global.config = functions.loadConfig();
global.crontab = new Cron(config.schedule);

const my_server = http_server.createServer(functions.processRequest);

my_server.listen(config.http_server.port_listen, config.http_server.iplisten, functions.serverStarted());