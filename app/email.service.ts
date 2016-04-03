import {Injectable} from 'angular2/core';

@Injectable()
export class EmailService{
	
	private clientId: string;
	private apiKey: string;
	private scopes: string;

	getClientId(){
		return this.clientId;
	}

	getApiKey(){
		return this.apiKey;
	}

	getScopes(){
		return this.scopes;
	}

	setClientId(id){
		this.clientId = id;
	}

	setApiKey(key){
		this.apiKey = key;
	}

	setScopes(scopes){
		this.scopes = scopes;
	}
	
}