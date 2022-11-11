import { api, LightningElement, wire } from 'lwc';

// ** Used to subscribe to a Lightning Message Channel: 
// ** https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_message_channel_intro
import { subscribe, MessageContext } from 'lightning/messageService';
import productSelected from '@salesforce/messageChannel/ProductSelected__c';

// ** Uses the NavigationMixin to navigate to the Product2 detail page: 
// ** https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_navigate_page_types
import { NavigationMixin } from 'lightning/navigation';

// ** Used to get objectAPI name needed for the Navigate method:
// ** https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_get_field_value
import { getFieldValue } from 'lightning/uiRecordApi';

// ** Used to get schema data for the Product2 fields needed for the lightning-record-view-form component
// ** https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.apex_schema
import PRODUCT_OBJECT from '@salesforce/schema/Product2';
import NAME_FIELD from '@salesforce/schema/Product2.Name';
import PRODUCT_CODE_FIELD from '@salesforce/schema/Product2.ProductCode';
import FAMILY_FIELD from '@salesforce/schema/Product2.Family';
import MSRP_FIELD from '@salesforce/schema/Product2.MSRP__c';
import DESCRIPTION_FIELD from '@salesforce/schema/Product2.Description';
import PICTURE_URL_FIELD from '@salesforce/schema/Product2.Picture_URL__c';

// ** Notice that the class uses the NavigationMixin so it can navigate to a record page
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

    // ** Used to load the MessageContent, which gives the Message Service info about the component
    @wire(MessageContext) messageContext;

    productSelectedSubscription = null;

    // ** Lifecycle hook needed to subscribe to the message. This runs after the component is rendered
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
 
    // ** This gets called by the lightning-record-view-form bae component
    handleRecordLoaded(event) {
        const { records } = event.detail;
        const recordData = records[this.recordId];
        this.productName = getFieldValue(recordData, NAME_FIELD);
        this.productPictureUrl = getFieldValue(recordData, PICTURE_URL_FIELD);
    }

    // ** Used to navigate to the standard record page for the Product2 record
    // ** and will bring up the edit view.
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
