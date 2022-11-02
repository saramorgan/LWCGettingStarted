# Getting Started with LWC

This is a sample application that demonstrates how to get started building applications with Lightning web components and SFDX tools. It centers around creating a solution for a fictional outdoor provider named Carved Rock Fitness. The solution is designed to use Lightning web components and allow a mobile or desktop user to search for products. 

![carved-rock-logo-yellow-reduced](https://user-images.githubusercontent.com/1944098/199588374-9f24407b-9acd-42a7-8dec-2f4b494ada59.png)

## Installing LWCGettingStarted using a scratch org

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


