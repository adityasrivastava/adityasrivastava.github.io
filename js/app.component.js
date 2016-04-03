System.register(['angular2/core', './footer.component', './header.component', './home.component', './postdetail.component', './about.component', './contact.component', './post.service', './header.service', './template.service', 'angular2/http', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, footer_component_1, header_component_1, home_component_1, postdetail_component_1, about_component_1, contact_component_1, post_service_1, header_service_1, template_service_1, http_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (postdetail_component_1_1) {
                postdetail_component_1 = postdetail_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (header_service_1_1) {
                header_service_1 = header_service_1_1;
            },
            function (template_service_1_1) {
                template_service_1 = template_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor(_postService, _headerService, _templateService) {
                    this._postService = _postService;
                    this._headerService = _headerService;
                    this._templateService = _templateService;
                }
                getPosts() {
                    this._postService.getAsyncPosts().then(posts => { this.posts = posts; console.log(this.posts); });
                }
                getPostsWithHttpGet() {
                    this._postService.getHttpGetPosts().subscribe(res => this.posts = res);
                }
                getPostTemplate() {
                    this._templateService.getPostTemplateHttp().subscribe(template => { this.postTemplate = template.text(); });
                }
                ngOnInit() {
                    this.getPostsWithHttpGet();
                    this.getPostTemplate();
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: `

    	<div class="wrapper">
			<router-outlet></router-outlet>
		</div>

    `,
                    directives: [header_component_1.HeaderComponent, footer_component_1.FooterComponent, home_component_1.HomeComponent, router_1.ROUTER_DIRECTIVES],
                    providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, post_service_1.PostService, header_service_1.HeaderService, template_service_1.TemplateService]
                }),
                router_1.RouteConfig([
                    {
                        path: '/home',
                        name: 'Home',
                        data: { posts: this.posts },
                        component: home_component_1.HomeComponent
                    },
                    {
                        path: '/**',
                        redirectTo: ['Home']
                    },
                    {
                        path: '/post-detail/:id',
                        name: 'PostDetail',
                        component: postdetail_component_1.PostDetailComponent
                    },
                    {
                        path: '/about',
                        name: 'About',
                        component: about_component_1.AboutComponent
                    },
                    {
                        path: '/contact',
                        name: 'Contact',
                        component: contact_component_1.ContactComponent
                    }
                ]), 
                __metadata('design:paramtypes', [post_service_1.PostService, header_service_1.HeaderService, template_service_1.TemplateService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map