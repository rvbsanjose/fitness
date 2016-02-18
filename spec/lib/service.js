const Service = require('../../src/lib/service');

describe('The Service library', () => {

    const s = new Service();

    describe('Service should be a singleton', () => {

        it('should not re-initialize', () => {
            spyOn(Service, 'init');

            new Service();

            expect(Service.init).not.toHaveBeenCalled();
        });
    });

    describe('Registering a new service', () => {

        describe('The options passed to the function', () => {

            it('should throw an error if missing the service name', () => {
                expect(() => {
                    s.register({
                        service: function() {}
                    });
                }).toThrowError('Registering a service requires a name and service.');
            });

            it('should throw an error if missing the service object', () => {
                expect(() => {
                    s.register({
                        name: 'test-service'
                    });
                }).toThrowError('Registering a service requires a name and service.');
            });
        });

        describe('When a service has yet to be registered', () => {

            it('should register the service', () => {
                s.register(mockService());

                expect(s.services[ 'test-service' ]).not.toBe(undefined);
            });
        });

        describe('When a service has already been registered', () => {

            it('should throw an error', () => {
                expect(() => {
                    s.register(mockService());
                }).toThrowError('Service test-service has already been registered.');
            });
        });
    });
});

function mockService() {
    return {
        name: 'test-service',
        service: function() {}
    };
}
