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

    mainLogo = '.logo.img-responsive';
    login = '.login';
    women = 'Women';

    ///////////////////////////////////////////////////////////
    public open () {
        return browser.url('/')
    }

    public async click_login(){
        await Locators.getElement(this.login).waitForDisplayed();
        await Locators.getElement(this.login).click();
    }

    public async locatorMainLogo(){
        return await Locators.getElement(this.mainLogo);
    }


}


export default new Page();



