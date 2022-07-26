import { ChainablePromiseElement } from 'webdriverio';


export const findElement = (locator) =>{
    return $(locator); 
}


/*
class Locators {

    public getElement(element){
        return $(element);
    }


    public getLocatorByText(text){
        return `//*[text()='${text}']`;
    }

    public getLocatorByTextH1(text){
        return `.//h1[text()='${text}']`;
    }

    

}



export default new Locators(); 

*/

