import {Content} from './content.interface';

export interface Post{
	id: number;
	tags: Array<string>;
	title: string;
	subtitle: string;
	content: Array<Content>;
	imageUrl: string;
	date: string;
}