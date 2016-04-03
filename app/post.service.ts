import {Injectable} from 'angular2/core';
import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {POSTS} from './mock-posts';
import {Post} from './post';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class PostService{

	private post_data : Post[];
	post: Post;

	constructor(private http: Http) { }

	private _jsonUrl = 'blog_posts.json';

	getPostsData(){
		return this.post_data;
	}

	getPosts(){
		return POSTS;
	}

	getAsyncPosts(){
		return Promise.resolve(POSTS);
	}

	getHttpGetPosts(){
		return this.http.get(this._jsonUrl)
						.map(res => res.json())
						.do(res => this.post_data = res)
						.catch(this.handleError);				
	}

	getPostByPostId(id: number){

		for(var postIndex in this.post_data){
			if(this.post_data[postIndex].id === id){
				this.post = this.post_data[postIndex];
			}
		}

		return this.post;
	}

	private handleError(error: Response){
		console.log("Whooops!!! : ", error);
		return Observable.throw(error.json().error || "Server Error !!!");
	}
}