import {Component} from 'angular2/core';
import {PostDetailComponent} from './postdetail.component';
import {NgClass, NgFor} from 'angular2/common';
import {HeaderService} from './header.service';
import {PostService} from './post.service';
import {Post} from './post';
import {RouteConfig, RouteData, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'my-header',
	templateUrl: 'header.html',
	directives: [ROUTER_DIRECTIVES]
})


export class HeaderComponent {

	headerTitle: string;
	headerSubtitle: string;
	headerImage: string;
	postsData: Post[];
	foundPosts: Array<Post>;

	searchFlag: boolean;
	searchText: string;
	
	constructor(private _headerService: HeaderService, private _postService: PostService){
		this.searchFlag = false;
		this.headerTitle = _headerService.getTitle();
		this.headerSubtitle = _headerService.getSubTitle();
		this.headerImage = _headerService.getImage();
		
	}

	searchPopUp(event){

		event.preventDefault();
		this.searchFlag = true;
		this.searchForPost();
	}

	searchClose(){

		this.searchFlag = false;
		
	}

	searchForPost(){
		this.postsData = this._postService.getPostsData();
		this.foundPosts = [];
		for(let post_index in this.postsData){
			if(this.postsData[post_index].tags.indexOf(this.searchText) > -1){
					this.foundPosts.push(this.postsData[post_index]);
			}
		}
	}


}