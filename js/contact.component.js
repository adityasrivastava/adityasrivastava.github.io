System.register(['angular2/core', './header.service', './header.component', './footer.component', 'angular2/http', 'angular2/router', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', 'rxjs/add/operator/do'], function(exports_1, context_1) {
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
    var core_1, header_service_1, header_component_1, footer_component_1, http_1, router_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_service_1_1) {
                header_service_1 = header_service_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {}],
        execute: function() {
            let ContactComponent = class ContactComponent {
                constructor(http, _headerService) {
                    this.http = http;
                    this._headerService = _headerService;
                    this.initContactView();
                    this.emailAddress = "";
                    this.contactName = "";
                    this.phone = "";
                    this.message = "";
                }
                initContactView() {
                    this.contactheaderImageUrl = "img/contact-bg.jpg";
                    this.contactTitle = "Contact Me";
                    this.contactSubtitle = "Have questions? I have answers (maybe).";
                    this.serviceEmailId = "https://formspree.io/adityasrivastava010@gmail.com";
                    this._headerService.setImage(this.contactheaderImageUrl);
                    this._headerService.setTitle(this.contactTitle);
                    this._headerService.setSubTitle(this.contactSubtitle);
                }
                sendEmail(e) {
                    e.preventDefault();
                    var obj = {
                        name: this.contactName,
                        email: this.emailAddress,
                        _subject: "Formspree Blog contact message",
                        message: this.contactName + "\n\n " + this.phone + "\n\n " + this.message
                    };
                    var string_obj = JSON.stringify(obj);
                    console.log(string_obj);
                    let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_1.RequestOptions({ headers: headers });
                    this.http.post(this.serviceEmailId, "data=" + string_obj).subscribe(res => console.log(res));
                }
            };
            ContactComponent = __decorate([
                core_1.Component({
                    selector: 'my-contact',
                    templateUrl: 'contact.html',
                    directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, footer_component_1.FooterComponent]
                }), 
                __metadata('design:paramtypes', [http_1.Http, header_service_1.HeaderService])
            ], ContactComponent);
            exports_1("ContactComponent", ContactComponent);
        }
    }
});
//# sourceMappingURL=contact.component.js.map