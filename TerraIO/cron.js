const cron = require('node-cron');
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
        //console.log("INFO: Auto loaded from config file " + Object.keys(schedule).length + " schedules"); 
        }


    list()
        { return JSON.stringify( Object.keys(this.#list) ); }

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
            this.#list[name] = cron.schedule(schedule, () => { console.log(name + ' - ' + device) });
            return true;
            }
        }

    del(job)
    {
        this.#list[job].stop(0);
    }

    }

module.exports = Cron;