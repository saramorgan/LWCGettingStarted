@isTest
public class TestProductController {

    @TestSetup
    static void createProducts(){
  
        Product2 product = new Product2();
        product.Name = 'Product';
        product.ProductCode = 'Code';
        product.Family = 'Family';
        product.MSRP__c=100;
        product.Picture_URL__c='https://example.com/images/image.png';
        insert product;
    }

    @isTest
    static void testGetProducts(){
        //Test for all the products done with no search key
        Object[] products = ProductController.getProducts('');
        System.assertEquals(products.size(), 1);
    }

}