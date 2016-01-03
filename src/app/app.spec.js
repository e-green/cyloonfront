var testing_1 = require('angular2/testing');
var app_1 = require('./app');
var title_1 = require('./providers/title');
describe('App', function () {
    testing_1.beforeEachProviders(function () { return [
        app_1.App,
        title_1.Title
    ]; });
    testing_1.it('should have a url', testing_1.inject([app_1.App], function (app) {
        expect(app.url).toEqual('https://twitter.com/AngularClass');
    }));
    testing_1.it('should have Title service', testing_1.inject([app_1.App], function (app) {
        expect(!!app.title).toEqual(true);
    }));
});
//# sourceMappingURL=app.spec.js.map