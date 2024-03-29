# Getting Started with LWC

This is a sample application that accompanies the Pluralsight course, ![Getting Started with Salesforce Lightning Web Components](pluralsight.pxf.io/YgJdkr) . It is used to demonstrate how to get started building applications with Lightning web components and SFDX tools. 

It centers around creating a solution for a fictional outdoor provider named Carved Rock Fitness. The solution is designed to use Lightning web components, allowing a mobile or desktop user to search for products. 

The final version will be a Lightning page containing multiple components used to search for products and display a list of product tiles. Users can select one of the tiles to see more product detail and access a link for editing the product.

**NOTE**
If you encounter problems with the code, please consider adding an issue to this repo

## Course Preview
[![Course Preview Video](https://user-images.githubusercontent.com/1944098/201396808-6e8a025e-cdf8-4cad-a5c6-aaf1bf4a8f7a.png)](https://saramorgandotnet.files.wordpress.com/2022/11/preview-1.mp4)

![carved-rock-logo-yellow-reduced](https://user-images.githubusercontent.com/1944098/199588374-9f24407b-9acd-42a7-8dec-2f4b494ada59.png)

## Table of Contents

-   [Installing final version of LWCGettingStarted using a scratch org](#installing-final-version-of-lwcgettingstarted-using-a-scratch-org)
-   [Concepts covered in course](#concepts-covered-in-course)

## Installing final version of LWCGettingStarted using a scratch org

1. Set up your environment. You can follow the steps demonstrated in the Pluralsight Module, **Creating Components with Salesforce Developer Experience (SFDX) Tools**  
   
    - Sign-up for Developer Org (https://developer.salesforce.com/signup)
    - Enable Dev Hub in your Develper Org - (https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_devhub.htm)
    - Install Salesforce CLI - (https://developer.salesforce.com/tools/sfdxcli)
    - Install Visual Studio Code - (https://code.visualstudio.com/download)
    - Open Visal Studio Code and install the Visual Studio Code Salesforce extensions - (https://developer.salesforce.com/tools/vscode/en/vscode-desktop/install)
    
2. Select the Explorer icon in the left toolbar of Visual Studio Code to clone the repository:
   - Click **Clone Repository**. 
   - Enter the URL of the repo: https://GitHub.com/saramorgan/LWCGettingStarted
   - Select the Repository location.
   - When prompted, click **Open** to open the cloned repository.
    
3. If you haven't already done so, use Terminal to authorize your dev hub org and provide it with an alias (**myDevHub** in the command below):

    ```
    sfdx auth:web:login -d -a myDevHub
    ```
    
4. Create a scratch org and provide it with an alias (**GettingStartedLWC** in the command below):

    ```
    sfdx force:org:create -s -f config/project-scratch-def.json -a GettingStartedLWC
    ```

5. Push the app to your scratch org:

    ```
    sfdx force:source:push
    ```
    
6. Assign the **GettingStartedLWC** permission set to the default user:

    ```
    sfdx force:user:permset:assign -n GettingStartedLWC
    ``` 
    
7. Import sample data:

    ```
    sfdx force:data:tree:import -p ./data/Product2-plan.json
    ```
    
8. Open the scratch org:

    ```
    sfdx force:org:open
    ```

## Concepts covered in course

This course offers modules that cover the following:

1. Building Your First Lightning Web Component (LWC)
   - Define LWC and list the benefits it offers
   - Describe the four pillars of web components
   - Create a simple app in webcomponents.dev
   - Understand the basic LWC structure
   - Review the different ways to display components in Salesforce
   
2. Creating Components with Salesforce Developer Experience (SFDX) Tools
   - Contrast the source-driven development model with the org–based model
   - Demonstrate how to get setup with SFDX
   - Use VS Code to create a lightning web component
   - Explain how to work with base lightning components 
   - Explain how useful the SLDS can be for styling Salesforce components
   - Explain how the @api decorator can be used to expose public properties
   - Create a scratch org and deploy a component to the org
   - Use Lightning App Builder to create an app
   
3. Working with Custom Events and Debugging
   - List different ways to communicate between components
   - Create a simple nested child component
   - Demonstrate how getter and setter functions work
   - Explain how to create custom events and pass data
   - Develop code used to create a custom event
   - Demonstrate how to use the Chrome debugger
   
4. Working with Lightning Data Service 
   - Describe the challenges of working with Salesforce data across multiple lightning web components
   - List the different ways there are to work with Salesforce Data
   - Demonstrate how to use the CLI to load data into Salesforce 
   - Demonstrate how to use SOQL Builder to query data
   - Develop code to read data with Lightning Data Service wire adapters
   - Create simple APEX code to execute a SOQL query
   - Develop code that uses a Record Form Lightning Web Component 
   - Display formatted errors to the end user
   
5. Working with Lightning Message Service and NavigationMixin
   - Define the Lightning Message Service 
   - Create a Lightning Message Channel file
   - Add code to send data from the publisher component
   - Add code to the subscriber component to receive data
   - Explain how to work with NavigationMixin
   - Add code to handle navigating to a data record

