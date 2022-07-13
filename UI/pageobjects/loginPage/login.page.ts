import { ChainablePromiseElement } from 'webdriverio';

import Locators from '../locators';
import LoginPageLocators from './login.page.locators';
import allureReporter from '@wdio/allure-reporter';

/**
 * sub page containing specific selectors and methods for a specific page
 */


class LoginPage{
                     
    loginPageLocators = new LoginPageLocators();



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async set_loginEmailCreate(email: string) {
        allureReporter.addStep('Allure. set loginEmailCreate');
        await Locators.getElement(this.loginPageLocators.emailCreate).setValue(email);
    }

    public async set_loginEmail(email: string) {
        allureReporter.addStep('Allure. set loginEmail');
        await Locators.getElement(this.loginPageLocators.email).setValue(email);
    }

    public async set_password(password: string) {
        allureReporter.addStep('Allure. set password');
        await Locators.getElement(this.loginPageLocators.password).setValue(password);
    }

    public async click_btnSubmit() {
        allureReporter.addStep('Allure. click btn Submit');
        await Locators.getElement(this.loginPageLocators.btnSubmit).click();
    }

    public async click_btnSubmitCreate() {
        allureReporter.addStep('Allure. click btnSubmit Create');
        await Locators.getElement(this.loginPageLocators.btnSubmitCreate).click();
    }

    public async locatorErrorEmail() {
        allureReporter.addStep('Allure. Locator Error Email');
        return await Locators.getElement(this.loginPageLocators.textErrorEmail);
    }
    public async locatorTextErrorExistedEmail() {
        allureReporter.addStep('Allure. locator Text Error Existed Email');
        return await Locators.getElement(this.loginPageLocators.textErrorExistedEmail);
    }

    
}

export default new LoginPage();



