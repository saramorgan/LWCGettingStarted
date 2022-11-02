public with sharing class ProductController {
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

        Object[] products = Database.query(
            'Select Id, Name, MSRP__c, Picture_URL__c FROM Product2 ' + 
            whereClause + 
            ' WITH SECURITY_ENFORCED' +
            ' ORDER BY Name');

        return products;
   }
}
