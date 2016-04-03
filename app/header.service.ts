import {Injectable} from 'angular2/core';

@Injectable()
export class HeaderService{
	
	private _headerTitle: string;
	private _headerSubTitle: string;
	private _headerImageUrl: string;

	constructor(){
		this.setDefaultHomeHeader();
	}

	getTitle(){
		return this._headerTitle;
	}

	getSubTitle(){
		return this._headerSubTitle;
	}

	getImage(){
		return this._headerImageUrl;
	}

	setDefaultHomeHeader(){
		this._headerImageUrl = "img/home-bg.jpg";
		this._headerTitle = "Adi's Blog";
		this._headerSubTitle = "Software Development Blog";
	}

	setImage(urlParam : string){
		this._headerImageUrl = urlParam;
	}

	setTitle(titleParam: string){
		this._headerTitle = titleParam;
	}

	setSubTitle(titleParam: string){
		this._headerSubTitle = titleParam;
	}
}