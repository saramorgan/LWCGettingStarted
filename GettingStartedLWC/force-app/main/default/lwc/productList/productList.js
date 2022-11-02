import { LightningElement , api, wire} from "lwc";

import getProducts from '@salesforce/apex/ProductController.getProducts';

import { publish, MessageContext } from 'lightning/messageService';
import productSelected from '@salesforce/messageChannel/ProductSelected__c';


export default class ProductList extends LightningElement {
	@api
	searchable;
	@api
	recordId;
	@api
	objectApiName;
	
	products = [];
	searchKey = '';

	// eslint-disable-next-line no-dupe-class-members
	@wire(getProducts, {
		searchKey: '$searchKey'
	})
	products;

	@wire(MessageContext) messageContext;


	handleProductSelected(event) {
		publish(this.messageContext, productSelected, {productId: event.detail});
	}

	handleSearchKeyChange(event) {
		this.searchKey = event.target.value;
    } 

}