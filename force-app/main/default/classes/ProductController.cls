public with sharing class ProductController {
    // Used to retrieve Product2 data needed for the productList component
    // It will accept a searchKey that it can use as a filter, but if none
    // is provided, then it will just return all the data
    // NOTE: If doing this in production, consider implementing a pagination feature
    // when working with a large amount of data. 
    // See an example here: https://github.com/trailheadapps/ebikes-lwc/tree/main/force-app/main/default/lwc/paginator
    
    @AuraEnabled(cacheable=true)
    public static Object[] getProducts(String searchKey) {
        String whereClause = '';
        String key = '';

        if (searchKey != null) {
            if (!String.isEmpty(searchKey)) {
                key = '%' + searchKey + '%';
                whereClause = 'WHERE NAME LIKE :key';
            }
        }

        // Query is built dynamically. See more info here: 
        // https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_dynamic_soql.htm
        // Also uses WITH USER_MODE to enforce User Mode for Database Operations
        Object[] products = Database.query(
            'Select Id, Name, MSRP__c, Picture_URL__c FROM Product2 ' + 
            whereClause + 
            ' WITH USER_MODE' +
            ' ORDER BY Name');

        return products;
   }
}
