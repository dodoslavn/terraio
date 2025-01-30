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
        const auth = 'admin:Neviem123.';
        const authHeader = 'Basic ' + Buffer.from(auth).toString('base64');
        
        this.#http_request(url, authHeader);
        console.log("INFO: Turning on");
        return true;
        }

    static TurnOff(device)
        {
        console.log("INFO: Turning off");
        return true;
        }

    static async #http_request(url, authHeader)
        {
        try
            {
            const response = await fetch(url,
                {
                method: 'GET',
                headers: 
                    {
                    Authorization: authHeader,
                    },
                });
            const text = await response.text();
            console.log('Response:', text);
            }
        catch (err)
            { console.error('Request failed:', err); }
        }
    }

module.exports = { Devices, DevSonoff };