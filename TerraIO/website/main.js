const { execSync } = require("child_process");

const basics = require('./basic.js');
function css(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.write(basics.css);
}
function unknown(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
}

function check_online(ip)
    {
    try
        {
        //const result = execSync("ping -n 1 "+ip);
        const result = execSync("/usr/bin/ping -c 1 " + ip);
        console.log(result.toString());
        return 'Yes';
        }
    catch (error)
        {
        console.error("Error:", error.message);
        }
    return 'No';
    }

function devices_list() {
    let pom = "<table><tr><th>Device name</th><th>IP address</th><th>Type</th><th>Is online</th></tr>";
    Object.entries(global.config.devices).forEach(([name, data]) => {
        pom = pom + "<tr><td>" + name + "</td><td>" + data.ip + "</td><td>" + data.device_type + "</td><td>" + check_online(data.ip) + "</td><td>";

    });
    pom = pom + "</table>";
    return pom;
}

function devices(req, res)
    {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(basics.header);
    res.write('<h2>List of configured devices</h2>');
    res.write(devices_list());
    res.write(basics.footer);
    }

function time_cront_simplify(schedule)
    {
    array = schedule.split(' ');
    if (array[2] == "*" && array[3] == "*" && array[3] == "*" && array[0] > 9) return array[1] + ":" + array[0] + " (every day)";
    if (array[2] == "*" && array[3] == "*" && array[3] == "*") return array[1] + ":0" + array[0] + " (every day)";
    }

function root_list()
    {
    let pom = "<table><tr><th>Name</th><th>Device</th><th>Action</th><th>Time</th><th>Time(raw)</th><th>Schedule created</th></tr>";
    //global.crontab.list().forEach(item =>
    Object.entries(global.config.schedule).sort(([nameA], [nameB]) => nameA.localeCompare(nameB)).forEach(([name, data]) => 
        {
        pom = pom + "<tr><td>" + name + "</td><td>" + data.device + "</td><td class=" + data.action + ">" + data.action + "</td><td>" + time_cront_simplify(data.schedule) + "</td><td>" + data.schedule + "</td><td>" + "</td></tr>";

        });
    pom = pom + "</table>";
    return pom;
    }

function root(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //global.crontab.del("tera-velke-led-on_rano");
    res.write(basics.header);
    res.write(root_list());
    res.write( basics.footer );
}

module.exports =
{
    root,
    css,
    devices,
    unknown
};