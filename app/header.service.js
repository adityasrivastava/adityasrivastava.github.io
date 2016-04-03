System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HeaderService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeaderService = (function () {
                function HeaderService() {
                    this.setDefaultHomeHeader();
                }
                HeaderService.prototype.getTitle = function () {
                    return this._headerTitle;
                };
                HeaderService.prototype.getSubTitle = function () {
                    return this._headerSubTitle;
                };
                HeaderService.prototype.getImage = function () {
                    return this._headerImageUrl;
                };
                HeaderService.prototype.setDefaultHomeHeader = function () {
                    this._headerImageUrl = "img/home-bg.jpg";
                    this._headerTitle = "Adi's Blog";
                    this._headerSubTitle = "Software Development Blog";
                };
                HeaderService.prototype.setImage = function (urlParam) {
                    this._headerImageUrl = urlParam;
                };
                HeaderService.prototype.setTitle = function (titleParam) {
                    this._headerTitle = titleParam;
                };
                HeaderService.prototype.setSubTitle = function (titleParam) {
                    this._headerSubTitle = titleParam;
                };
                HeaderService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], HeaderService);
                return HeaderService;
            }());
            exports_1("HeaderService", HeaderService);
        }
    }
});
//# sourceMappingURL=header.service.js.map