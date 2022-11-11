import { LightningElement , api, wire} from "lwc";

// ** Used to import APEX methods: https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.apex_import_method
import getProducts from '@salesforce/apex/ProductController.getProducts';

// Used to access the Publish for the Lightning Message Service
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

	// ** Uses the wire method to get data returned from APEX using the Wire service.
	// ** Learn more here: https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.apex_wire_method
	// ** NOTE: This may not always be the best way of accessing data from APEX. You can also call methods imperatively
	// ** Learn more here: https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.apex_call_imperative
	// eslint-disable-next-line no-dupe-class-members
	@wire(getProducts, {
		searchKey: '$searchKey'
	})
	products;

	// ** Used to load the MessageContent, which gives the Message Service info about the component
	@wire(MessageContext) messageContext;

	// ** Used to publish the productId to the ProductSelected Message Channe;
	handleProductSelected(event) {
		publish(this.messageContext, productSelected, {productId: event.detail});
	}

	// ** Used to handle a searchKey change
	handleSearchKeyChange(event) {
		this.searchKey = event.target.value;
    } 

}
