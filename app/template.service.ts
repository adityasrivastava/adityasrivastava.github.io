import {Injectable} from 'angular2/core';
import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class TemplateService{

	private _postTemplateUrl = 'post.template.mustache';
	private _postTemplate: string;

	constructor(private http: Http) { }

	getPostTemplateHttp(){
		return this.http.get(this._postTemplateUrl)
						.do(res => this._postTemplate = res.text())
						.catch(this.handleError);				
	}


	getPostTemplate(){
		return this._postTemplate;
	}

	private handleError(error: Response){
		console.log("Whooops!!! : ", error);
		return Observable.throw(error || "Server Error !!!");
	}
}