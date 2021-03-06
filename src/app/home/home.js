var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var http_1 = require('angular2/http');
var title_1 = require('../providers/title');
var Home = (function () {
    function Home(title, http) {
        this.title = title;
        this.http = http;
    }
    Home.prototype.ngOnInit = function () {
        console.log('hello Home');
    };
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            directives: common_1.FORM_DIRECTIVES.slice(),
            providers: [title_1.Title],
            pipes: [],
            styles: [require('./home.css')],
            template: require('./home.html')
        }), 
        __metadata('design:paramtypes', [title_1.Title, http_1.Http])
    ], Home);
    return Home;
})();
exports.Home = Home;
//# sourceMappingURL=home.js.map