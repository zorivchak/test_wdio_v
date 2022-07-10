import { ChainablePromiseElement } from 'webdriverio';



class Locators {

    public getElement(element){
        return $(element);
    }

    public getLocatorByText(text){
        return "//*[text()='" + text + "']";
    }

}



export default new Locators(); 



