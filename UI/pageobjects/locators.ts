import { ChainablePromiseElement } from 'webdriverio';



class Locators {

    public getElement(element){
        return $(element);
    }

}



export default new Locators(); 



