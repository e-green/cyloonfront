var testing_1 = require('angular2/testing');
var title_1 = require('./title');
describe('Title', function () {
    var title;
    beforeEach(function () {
        title = new title_1.Title();
    });
    testing_1.it('should return the list of names', function () {
        expect(title.value).toEqual('Angular 2');
    });
});
//# sourceMappingURL=title.spec.js.map