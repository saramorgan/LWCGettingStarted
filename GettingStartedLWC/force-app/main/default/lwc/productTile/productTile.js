import { api, LightningElement  } from "lwc";
export default class ProductTile extends LightningElement {
    _product;
    pictureUrl;
    name;
    msrp;

    // ** Uses the @api decorator to get the productId from the productList component
    @api
    get product(){
        return this._product;
    }

    set product(value){
        this._product = value;
        this.pictureUrl = value.Picture_URL__c;
        this.name = value.Name;
        this.msrp = value.MSRP__c;
    }

    // ** Used to pass the productId through a standard Custom Event
    handleClick(event){
        const selectedEvent = new CustomEvent('selected', {detail: this.product.Id});
        this.dispatchEvent(selectedEvent);
    }
}
