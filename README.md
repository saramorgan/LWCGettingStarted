# Getting Started with LWC

This is a sample application that accompanies a Pluralsight course, **Getting Started with Salesforce Lightning Web Components** .It is used to demonstrate how to get started building applications with Lightning web components and SFDX tools. 

It centers around creating a solution for a fictional outdoor provider named Carved Rock Fitness. The solution is designed to use Lightning web components and allow a mobile or desktop user to search for products. 

The final version will be a Lightning page that contains multiple components used to search for products and display a list of product tiles. Users can select one of the tiles to see more product detail and access a link for editing the product.

![carved-rock-logo-yellow-reduced](https://user-images.githubusercontent.com/1944098/199588374-9f24407b-9acd-42a7-8dec-2f4b494ada59.png)

## Installing final version of LWCGettingStarted using a scratch org

1. Set up your environment. You can follow the steps demonstrated in the Pluralsight Module, ** Creating Components with Salesforce Developer Experience (SFDX) Tools **  
   
    - Sign-up for Developer Org (https://developer.salesforce.com/signup)
    - Enable Dev Hub in your Develper Org - (https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_devhub.htm)
    - Install Salesforce CLI - (https://developer.salesforce.com/tools/sfdxcli)
    - Install Visual Studio Code - (https://code.visualstudio.com/download)
    - Install the Visual Studio Code Salesforce extensions - (https://developer.salesforce.com/tools/vscode/en/vscode-desktop/install)
    
2. If you haven't already done so, authorize your dev hub org and provide it with an alias (**myDevHub** in the command below):

    ```
    sfdx auth:web:login -d -a myDevHub
    ```
    
3. Clone the repository:

    ```
    git clone https://github.com/saramorgan/LWCGettingStarted
    cd LWCGettingStarted
    ```
4. Create a scratch org and provide it with an alias (**GettingStartedLWC** in the command below):

    ```
    sfdx force:org:create -s -f config/project-scratch-def.json -a GettingStartedLWC
    ```

5. Push the app to your scratch org:

    ```
    sfdx force:source:push
    ```
6. Open the scratch org:

    ```
    sfdx force:org:open
    ```
    
