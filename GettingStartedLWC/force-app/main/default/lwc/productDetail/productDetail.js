import { api, LightningElement, wire } from 'lwc';

import { subscribe, MessageContext } from 'lightning/messageService';
import productSelected from '@salesforce/messageChannel/ProductSelected__c';
import { NavigationMixin } from 'lightning/navigation';

import { getFieldValue } from 'lightning/uiRecordApi';

import PRODUCT_OBJECT from '@salesforce/schema/Product2';
import NAME_FIELD from '@salesforce/schema/Product2.Name';
import PRODUCT_CODE_FIELD from '@salesforce/schema/Product2.ProductCode';
import FAMILY_FIELD from '@salesforce/schema/Product2.Family';
import MSRP_FIELD from '@salesforce/schema/Product2.MSRP__c';
import DESCRIPTION_FIELD from '@salesforce/schema/Product2.Description';
import PICTURE_URL_FIELD from '@salesforce/schema/Product2.Picture_URL__c';


export default class ProductDetail extends NavigationMixin(LightningElement) {
    @api
    recordId;
    @api
    objectApiName;

    familyField = FAMILY_FIELD;
    msrpField = MSRP_FIELD;
    productCodeField = PRODUCT_CODE_FIELD;
    descriptionField = DESCRIPTION_FIELD;
	productName;
	productPictureUrl;

    @wire(MessageContext) messageContext;

    productSelectedSubscription = null;

    connectedCallback() {
        this.productSelectedSubscription = 
        subscribe(
            this.messageContext,
            productSelected,
            (message) => this.handleProductSelected(message.productId));
    }
    handleProductSelected(productId){
        // eslint-disable-next-line @lwc/lwc/no-api-reassignments
        this.recordId = productId;
    }

    handleRecordLoaded(event) {
        const { records } = event.detail;
        const recordData = records[this.recordId];
        this.productName = getFieldValue(recordData, NAME_FIELD);
        this.productPictureUrl = getFieldValue(recordData, PICTURE_URL_FIELD);
    }

    handleNavigateToRecord() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: PRODUCT_OBJECT.objectApiName,
                actionName:  'edit'
            }
        });
}


}