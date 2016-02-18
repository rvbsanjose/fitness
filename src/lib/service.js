let INIT = false;

class Service {
    constructor() {
        if (!INIT) {
            Service.init();
            this.services = {};
        }
    }

    register(opts) {
        if (!opts.name || !opts.service) {
            throwError('Registering a service requires a name and service.');
        }

        if (this.services[ opts.name ]) {
            throwError(`Service ${opts.name} has already been registered.`);
        }

        this.services[ opts.name ] = opts.service;
    }

    unregister(name) {
        if (!name) {
            throwError('Unregistering a service requires a service name.');
        }

        if (!this.services[ name ]) {
            throwError(`Service ${name} has not yet been registered.`);
        }

        delete this.services[ name ];
    }

    utilize(name) {
        if (!name) {
            throwError('Utilizng a service requires a service name.');
        }

        if (!this.services[ name ]) {
            throwError(`Service ${name} has not yet been registered.`);
        }

        return this.services[ name ];
    }

    static init() {
        INIT = true;
    }
}

function throwError(message) {
    throw new Error(message);
}

module.exports = Service;
