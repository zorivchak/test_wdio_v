import { ChainablePromiseElement } from 'webdriverio';


export const findElement = (locator: string) =>{
    return $(locator); 
}
