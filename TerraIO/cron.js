const cron = require('node-cron');
const { Devices, DevSonoff } = require("./devices.js");

class Cron
    {
    #list = [];

    constructor(schedule)
        {
        for (let item in schedule)
            {
            console.log("INFO: Loading schedule for " + item + " ( " + schedule[item].schedule + ", " + schedule[item].action + ", " + schedule[item].device + " )");
            if (!this.add(item, schedule[item].schedule, schedule[item].action, schedule[item].device)) console.log("WARNING: Couldnt add schedule from config - " + item);
            }
        }


    list()
        { return Object.keys(this.#list); }
        //{ return JSON.stringify( Object.keys(this.#list) ); }

    show(job)
        { return this.#list[job]; }

    add(name, schedule, action, device )
        {
        if (this.#list[name])
            {
            console.log("WARNING: Job already exist - " + name);
            return false;
            }
        else
            {
            if (action != "on" && action != "off")
                {
                console.log("ERROR: Action type invalid - " + name);
                return;
                }
            const dev_type = config.devices[device].device_type;
            switch (config.devices[device].device_type)
                {
                case 'sonoff':
                    const DevSonoff_instance = DevSonoff;
                    this.#list[name] = cron.schedule(schedule, () => { console.log('INFO - SCHEDULER: ' + name); DevSonoff_instance.Switch(device, action); });
                    //this.#list[name] = cron.schedule(schedule, () => { console.log('aaaaa') });
                    break;
                case 'esp32':
                    this.#list[name] = cron.schedule(schedule, () => { console.log(name + ' - ' + device) });
                    break;
                default:
                    console.log("ERROR: Device type invalid - " + name);
                    break;
                }
            return true;
            }
        }

    del(job)
    {
        this.#list[job].stop(0);
    }

    }

module.exports = Cron;