const fs = require('fs');

const Cron = require('./cron.js');
const website = require('./website/main.js');
function serverStarted() { console.log(`INFO: HTTP server started`); }

function loadConfig()
    {
    const filename = './config.json';
    const data = fs.readFileSync(filename, 'utf8');
    if (!data)
        {
        console.error('ERROR: Coulnt load config file - ' + filename, err);
        process.exit(1);
        }
    const json = JSON.parse(data);
    console.log(`INFO: Config file loaded`);
    return json;
    }


async function processRequest(req, res)
    {
    console.log('INFO: Client request received - ' + req.url);

    switch (req.url)
        {
        case '/':
            website.root(req, res);
            break;
        case '/default.css':
            website.css(req, res);
            break;
        default:
            website.unknown(req, res);
        }
    res.end();
    }

module.exports =
    {
    serverStarted,
    processRequest,
    loadConfig
    };