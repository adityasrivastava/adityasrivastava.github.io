System.register(['angular2/core', 'angular2/router', './post.service', './template.service', './header.component', './header.service', './footer.component', 'mustache'], function(exports_1, context_1) {
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
    var core_1, router_1, post_service_1, template_service_1, header_component_1, header_service_1, footer_component_1, __Mustache;
    var PostDetailComponent;
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
            function (template_service_1_1) {
                template_service_1 = template_service_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (header_service_1_1) {
                header_service_1 = header_service_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (__Mustache_1) {
                __Mustache = __Mustache_1;
            }],
        execute: function() {
            let PostDetailComponent = class PostDetailComponent {
                constructor(_postDetails, _headerService, _templateService, params) {
                    this._postDetails = _postDetails;
                    this._headerService = _headerService;
                    this._templateService = _templateService;
                    this.post = _postDetails.getPostByPostId(parseInt(params.get('id')));
                    _headerService.setImage(this.post.imageUrl);
                    _headerService.setSubTitle(this.post.subtitle);
                    _headerService.setTitle(this.post.title);
                    this.template = _templateService.getPostTemplate();
                    this.generatehtmlTemplate();
                }
                generatehtmlTemplate() {
                    this.postView = __Mustache.render(this.template, this.post);
                }
            };
            PostDetailComponent = __decorate([
                core_1.Component({
                    selector: 'my-post',
                    templateUrl: 'postdetail.html',
                    directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, footer_component_1.FooterComponent]
                }), 
                __metadata('design:paramtypes', [post_service_1.PostService, header_service_1.HeaderService, template_service_1.TemplateService, router_1.RouteParams])
            ], PostDetailComponent);
            exports_1("PostDetailComponent", PostDetailComponent);
        }
    }
});
//# sourceMappingURL=postdetail.component.js.map