import {ContentImage} from './contentImage.interface';

export interface Content{
	title: string;
	paragraph: string;
	image: Array<ContentImage>;
}