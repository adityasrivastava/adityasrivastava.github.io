System.register(['angular2/core', 'angular2/router', './post.service', './header.component', './header.service', './footer.component'], function(exports_1, context_1) {
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
    var core_1, router_1, post_service_1, header_component_1, header_service_1, footer_component_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (header_service_1_1) {
                header_service_1 = header_service_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            }],
        execute: function() {
            let HomeComponent = class HomeComponent {
                constructor(_postService, _headerService, data) {
                    this._postService = _postService;
                    this._headerService = _headerService;
                    _headerService.setDefaultHomeHeader();
                    this.currentPage = 0;
                    this.getPosts();
                }
                getPosts() {
                    this.postDetails = this._postService.getPostsData();
                    this.postDetails = this.postDetails.slice(this.currentPage, this.currentPage + 3);
                }
                nextPosts() {
                    this.currentPage++;
                    this.getPosts();
                }
                previousPosts() {
                    if (this.currentPage > 0) {
                        this.currentPage--;
                    }
                    this.getPosts();
                }
            };
            HomeComponent = __decorate([
                core_1.Component({
                    selector: 'my-home',
                    templateUrl: 'home.html',
                    directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, footer_component_1.FooterComponent]
                }), 
                __metadata('design:paramtypes', [post_service_1.PostService, header_service_1.HeaderService, router_1.RouteData])
            ], HomeComponent);
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map