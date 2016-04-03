import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, RouteParams, RouteConfig} from 'angular2/router';
import {PostService} from './post.service';
import {TemplateService} from './template.service';
import {HeaderComponent} from './header.component';
import {HeaderService} from './header.service';
import {FooterComponent} from './footer.component';
import {Post} from './post';

import * as __Mustache from 'mustache';

@Component({
	selector: 'my-post',
	templateUrl: 'postdetail.html',
	directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent]
})

export class PostDetailComponent {
	
	post: Post;
	template: string;
	postView: string;

	constructor(private _postDetails: PostService, private _headerService: HeaderService, private _templateService: TemplateService, params: RouteParams){

		this.post = _postDetails.getPostByPostId(parseInt(params.get('id')));
	
		_headerService.setImage(this.post.imageUrl);
		_headerService.setSubTitle(this.post.subtitle);
		_headerService.setTitle(this.post.title);

		this.template = _templateService.getPostTemplate();

		this.generatehtmlTemplate();
	}

	generatehtmlTemplate(){
		this.postView = __Mustache.render(this.template, this.post);
	}
	
}