System.register(['angular2/core', './header.service', './post.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, header_service_1, post_service_1, router_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_service_1_1) {
                header_service_1 = header_service_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let HeaderComponent = class HeaderComponent {
                constructor(_headerService, _postService) {
                    this._headerService = _headerService;
                    this._postService = _postService;
                    this.searchFlag = false;
                    this.headerTitle = _headerService.getTitle();
                    this.headerSubtitle = _headerService.getSubTitle();
                    this.headerImage = _headerService.getImage();
                }
                searchPopUp(event) {
                    event.preventDefault();
                    this.searchFlag = true;
                    this.searchForPost();
                }
                searchClose() {
                    this.searchFlag = false;
                }
                searchForPost() {
                    this.postsData = this._postService.getPostsData();
                    this.foundPosts = [];
                    for (let post_index in this.postsData) {
                        if (this.postsData[post_index].tags.indexOf(this.searchText) > -1) {
                            this.foundPosts.push(this.postsData[post_index]);
                        }
                    }
                }
            };
            HeaderComponent = __decorate([
                core_1.Component({
                    selector: 'my-header',
                    templateUrl: 'header.html',
                    directives: [router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [header_service_1.HeaderService, post_service_1.PostService])
            ], HeaderComponent);
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header.component.js.map