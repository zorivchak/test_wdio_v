/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
import { config } from '../../../wdio.conf';
import Locators from '../locators';
import PageLocators from './page.locators';
import allureReporter from '@wdio/allure-reporter';


class Page{
    pageLocators = new PageLocators();


    ///////////////////////////////////////////////////////////
    public open () {
        return browser.url('/')
    }

    public async click_login(){
        allureReporter.addStep('Allure. Click login');
         await Locators.getElement(this.pageLocators.login).waitForDisplayed();
        await Locators.getElement(this.pageLocators.login).click();
    }

    public async locatorMainLogo(){
        allureReporter.addStep('Allure. Get locator Main Logo');
        return await Locators.getElement(this.pageLocators.mainLogo);
    }


}


export default new Page();



