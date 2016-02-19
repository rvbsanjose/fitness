let INSTANCE;

const services = {};

class Service {
    /**
     * Registers a new service on the services object
     * @param  {object} opts Requires a name<string> and service<object>
     * @return {undefined}
     */
    register(opts = {}) {
        if (!opts.name || !opts.service) {
            throwError('Registering a service requires a name and service.');
        }

        if (services[ opts.name ]) {
            throwError(`Service ${opts.name} has already been registered.`);
        }

        services[ opts.name ] = opts.service;
    }

    /**
     * Unregisters a service on the services object
     * @param  {string} name The name of the service to unregister
     * @return {undefined}
     */
    unregister(name) {
        if (!name) {
            throwError('Unregistering a service requires a service name.');
        }

        if (!services[ name ]) {
            throwError(`Service ${name} has not yet been registered.`);
        }

        delete services[ name ];
    }

    /**
     * Consume a service registered on the services object
     * @param  {string} name The name of the service to consume
     * @return {object} The service object that has been previously registered
     */
    utilize(name) {
        if (!name) {
            throwError('Utilizng a service requires a service name.');
        }

        if (!services[ name ]) {
            throwError(`Service ${name} has not yet been registered.`);
        }

        return services[ name ];
    }
}

/**
 * Throws a native Error
 * @param  {string} message The error message
 * @return {undefined}
 */
function throwError(message) {
    throw new Error(message);
}

/**
 * Singleton object that returns a new Service object or the cached service
 * @return {object} Singleton service object
 */
function getInstance() {
    if (!INSTANCE) {
        INSTANCE = new Service();

        return INSTANCE;
    }

    return INSTANCE;
}

module.exports = {
    getInstance
};
