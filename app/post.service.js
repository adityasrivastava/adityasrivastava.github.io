System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', './mock-posts', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', 'rxjs/add/operator/do'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, mock_posts_1;
    var PostService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (mock_posts_1_1) {
                mock_posts_1 = mock_posts_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {}],
        execute: function() {
            PostService = (function () {
                function PostService(http) {
                    this.http = http;
                    this._jsonUrl = 'blog_posts.json';
                }
                PostService.prototype.getPostsData = function () {
                    return this.post_data;
                };
                PostService.prototype.getPosts = function () {
                    return mock_posts_1.POSTS;
                };
                PostService.prototype.getAsyncPosts = function () {
                    return Promise.resolve(mock_posts_1.POSTS);
                };
                PostService.prototype.getHttpGetPosts = function () {
                    var _this = this;
                    return this.http.get(this._jsonUrl)
                        .map(function (res) { return res.json(); })
                        .do(function (res) { return _this.post_data = res; })
                        .catch(this.handleError);
                };
                PostService.prototype.getPostByPostId = function (id) {
                    for (var postIndex in this.post_data) {
                        if (this.post_data[postIndex].id === id) {
                            this.post = this.post_data[postIndex];
                        }
                    }
                    return this.post;
                };
                PostService.prototype.handleError = function (error) {
                    console.log("Whooops!!! : ", error);
                    return Observable_1.Observable.throw(error.json().error || "Server Error !!!");
                };
                PostService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PostService);
                return PostService;
            }());
            exports_1("PostService", PostService);
        }
    }
});
//# sourceMappingURL=post.service.js.map