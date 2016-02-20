const Service = require('../../src/lib/service');

describe('The Service library', () => {

    const s = Service.getInstance();

    beforeEach(() => {
        s.register(mockService());
    });

    afterEach(() => {
        s.unregister(mockService().name);
    });

    describe('Service should be a singleton', () => {

        it('should not re-initialize', () => {
            spyOn(Service, 'constructor');

            Service.getInstance();

            expect(Service.constructor).not.toHaveBeenCalled();
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
                expect(s.utilize(mockService().name)).not.toBe(undefined);
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

    describe('Unregistering a service', () => {

        describe('The options passed to the function', () => {

            it('should throw an error if the name argument is missing', () => {
                expect(() => {
                    s.unregister().toThrowError('Unregistering a service requires a service name.');
                });
            });
        });

        describe('When a service has yet to be registered', () => {

            it('should throw an error if the service is not yet registered', () => {
                expect(() => {
                    s.unregister('test').toThrowError('Service test has not yet been registered.');
                });
            });
        });

        describe('The service should not exist in the services object', () => {

            it('should be an undefined service', () => {
                s.register(Object.assign({}, mockService(), {
                    name: 'test-service-2'
                }));

                s.unregister('test-service-2');

                expect(() => {
                    s.utilize('test-service-2');
                }).toThrowError('Service test-service-2 has not yet been registered.');
            });
        });
    });

    describe('Utilizing a service', () => {

        describe('The options passed to the function', () => {

            it('should throw an error if the service name is not present', () => {
                expect(() => {
                    s.utilize();
                }).toThrowError('Utilizng a service requires a service name.');
            });
        });

        describe('When a service has yet to be registered', () => {

            it('should throw an error if the service is present', () => {
                expect(() => {
                    s.utilize('test-service-2');
                }).toThrowError('Service test-service-2 has not yet been registered.');
            });
        });

        describe('When a service is present in the services object', () => {

            it('should return the service', () => {
                expect(s.utilize(mockService().name)).not.toBe(undefined);
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
