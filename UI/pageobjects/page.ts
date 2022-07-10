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

    ///////////////////////////////////////////////////////////
    public open () {
        //return browser.url(`https://the-internet.herokuapp.com/${path}`)
        return browser.url('/')
    }

    public async click_login(){
        await Locators.getElement(this.login).waitForDisplayed();
        await Locators.getElement(this.login).click();
    }

}


export default new Page();



