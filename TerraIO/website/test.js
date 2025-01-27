
function css(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
}
function unknown(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
}

function list(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    global.crontab.del("tera-velke-led-on_rano");
    res.write( global.crontab.list() );
}

module.exports =
{
    list,
    css,
    unknown
};