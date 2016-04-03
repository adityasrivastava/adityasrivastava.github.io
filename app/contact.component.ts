import {Component} from 'angular2/core';
import {HeaderService} from './header.service';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {Http, Response, Headers, RequestOptions, HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES, Router, RouteParams, RouteConfig} from 'angular2/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Component({
	selector: 'my-contact',
	templateUrl: 'contact.html',
	directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent]
})

export class ContactComponent {

	serviceEmailId: string;

	contactheaderImageUrl: string;
	contactTitle: string;
	contactSubtitle: string;


	emailAddress: string;
	contactName: string;
	phone: string;
	message: string;


	constructor(private http: Http,
		private _headerService: HeaderService) { 
		
		this.initContactView();

		this.emailAddress = "";
		this.contactName = "";
		this.phone = "";
		this.message = "";
		

	}

	initContactView(){
		this.contactheaderImageUrl = "img/contact-bg.jpg";
		this.contactTitle = "Contact Me";
		this.contactSubtitle = "Have questions? I have answers (maybe).";

		this.serviceEmailId = "https://formspree.io/adityasrivastava010@gmail.com";

		this._headerService.setImage(this.contactheaderImageUrl);
		this._headerService.setTitle(this.contactTitle);
		this._headerService.setSubTitle(this.contactSubtitle);
	}

	sendEmail(e){
		e.preventDefault();

		var obj = {
			name: this.contactName,
			email: this.emailAddress,
			_subject: "Formspree Blog contact message",
			message: this.contactName+"\n\n "+this.phone+"\n\n "+this.message
		}

		var string_obj = JSON.stringify(obj);
		console.log(string_obj);

		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		this.http.post(this.serviceEmailId, "data="+string_obj).subscribe(res=> console.log(res));
		
	}

	
}