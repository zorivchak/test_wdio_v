/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
import { config } from '../../wdio.conf';
import Locators from './locators';

class Page {
    /**
    * Opens a sub page of the page
    */

    mainLogo = '.img-responsive';
    login = '.login';
    women = 'Women';

    ///////////////////////////////////////////////////////////
    public open () {
        //return browser.url(`https://the-internet.herokuapp.com/${path}`)
        return browser.url('/')
    }

    public async click_login(){
        await Locators.getElement(this.login).waitForDisplayed();
        await Locators.getElement(this.login).click();
    }

    public async click_women(){
        //let locator = await Locators.getLocatorByText(this.women);
        await Locators.getElement(Locators.getLocatorByText(this.women)).click();
        await browser.pause(10000);
    }

}


export default new Page();



