const { execSync } = require('child_process');

class Devices
    {
    static TurnOn(device)
        {
        console.log("ERROR: Turning on - undefined device " + device);
        return false;
        }

    static TurnOff(device)
        {
        console.log("ERROR: Turning off - undefined device" + device);
        return false;
        }

    static getPowerUsage(device)
        {
        console.log("ERROR: Power usage - undefined device" + device);
        return false;
        }

    static getTemp(device)
        {
        console.log("ERROR: Temperautre - undefined device" + device);
        return false;
        }

    static Switch(device, action)
        {
        if (action == "on")
            { return this.TurnOn(device); }
        if (action == "off")
            { return this.TurnOff(device); }

        console.log("ERROR: Action type invalid - " + action);
        return false;
        }
    static #sendRequest()
        { console.log("ERROR: Send request invalid - " + device); }
    }

class DevSonoff extends Devices
    {
    static TurnOn(device)
        {
        const url = "http://" + config.devices[device].ip + "/rpc/Switch.Set?id=0&on=true";
        console.log("INFO: Turning on "+device);
        const return_code = this.#send_request(url);
        if (return_code == "200")
            {
            console.log("INFO: Turning on device " + device + " was successful");
            return true
            }
        else
            {
            console.log("ERROR: Turning on device " + device + " failed (RC: " + return_code + ")");
            return false;
            }
        }

    static TurnOff(device)
        {
        const url = "http://" + config.devices[device].ip + "/rpc/Switch.Set?id=0&on=false";
        console.log("INFO: Turning off " + device);
        const return_code = this.#send_request(url);
        if (return_code == "200")
            {
            console.log("INFO: Turning off device " + device + " was successful");
            return true
            }
        else
            {
            console.log("ERROR: Turning off device " + device + " failed (RC: " + return_code);
            return false;
            }
        }

    static #send_request(url)
        {
        try { return execSync('curl -o /dev/null -s -w "%{http_code}" --digest --ssl --tlsv1.2 -u "admin:Neviem123." "' + url + '"').toString(); }
        catch (error) { console.error('ERROR: ' + error.message); }
        return -1;
        }
    }

module.exports = { Devices, DevSonoff };