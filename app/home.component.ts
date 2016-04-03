import {Component} from 'angular2/core';
import {RouteConfig, RouteData, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';
import {PostService} from './post.service';
import {HeaderComponent} from './header.component';
import {HeaderService} from './header.service';
import {FooterComponent} from './footer.component';
import {Post} from './post';

@Component({
	selector: 'my-home',
	templateUrl: 'home.html',
	directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent]
})

export class HomeComponent {
	
	postDetails: Post[];
	currentPage: number;
	
	constructor(private _postService: PostService,private _headerService: HeaderService, data: RouteData){
		_headerService.setDefaultHomeHeader();
		this.currentPage = 0;
		this.getPosts();
	}

	getPosts(){
		this.postDetails = this._postService.getPostsData();
		this.postDetails = this.postDetails.slice(this.currentPage, this.currentPage+3);
	}

	nextPosts(){
		
		this.currentPage++;
		this.getPosts();
	}

	previousPosts(){

		if(this.currentPage > 0){
			this.currentPage--;
		}
		this.getPosts();

	}

}