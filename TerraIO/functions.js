const fs = require('fs');

const Cron = require('./cron.js');
const website = require('./website/main.js');
function serverStarted() { console.log(timestamp() + `INFO: HTTP server started`); }

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

function timestamp()
    {
    const now = new Date();
    let sec;
    if (now.getSeconds() < 10) sec = "0" + now.getSeconds();
    else sec = now.getSeconds();
    return now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + "_" + now.getHours() + ":" + now.getMinutes() + ":" + sec + " > ";
    }

function website_showFavicon(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/x-icon');
    faviconBase64 = website.faviconBase64;
    res.end(Buffer.from(faviconBase64, 'base64'));
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
        case '/devices':
            website.devices(req, res);
            break;
        case '/favicon.ico':
            website.favicon(req, res);
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