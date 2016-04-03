import {Component} from 'angular2/core';
import {FooterComponent} from './footer.component';
import {HeaderComponent} from './header.component';
import {HomeComponent} from './home.component';
import {PostDetailComponent} from './postdetail.component';
import {AboutComponent} from './about.component';
import {ContactComponent} from './contact.component';

import {PostService} from './post.service';
import {HeaderService} from './header.service';
import {TemplateService} from './template.service';
import {OnInit} from 'angular2/core';
import {Post} from './post';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `

    	<div class="wrapper">
			<router-outlet></router-outlet>
		</div>

    `,
    directives: [HeaderComponent, FooterComponent, HomeComponent, ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, PostService, HeaderService, TemplateService]
})

@RouteConfig([
	{
		path: '/home',
		name: 'Home',
		data: {posts: this.posts},
		component: HomeComponent
	},
	{
		path: '/**',
		redirectTo: ['Home']
	},
  	{
	    path: '/post-detail/:id',
	    name: 'PostDetail',
	    component: PostDetailComponent
  	},
  	{
  		path: '/about',
  		name: 'About',
  		component: AboutComponent
  	},
  	{
  		path: '/contact',
  		name: 'Contact',
  		component: ContactComponent
  	}
])


export class AppComponent implements OnInit{ 

	posts: Post[];
	postTemplate: string;
	errorMessage: string;

	constructor(private _postService: PostService, private _headerService: HeaderService, private _templateService: TemplateService) { }

	getPosts(){
		this._postService.getAsyncPosts().then(posts => { this.posts = posts; console.log(this.posts)});	
	}

	getPostsWithHttpGet(){
		this._postService.getHttpGetPosts().subscribe(res => this.posts = res);				
	}

	getPostTemplate(){
		this._templateService.getPostTemplateHttp().subscribe(template => { this.postTemplate = template.text()});
	}

	ngOnInit(){
		this.getPostsWithHttpGet();
		this.getPostTemplate();
	}


}