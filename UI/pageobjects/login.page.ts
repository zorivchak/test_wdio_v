import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */


class LoginPage {
    /**
     * define selectors using getter methods
     */
    public get inputEmail () {
        return $('#email');
    }

    public get inputEmailCreate () {
        return $('#email_create');
    }

    

    public get inputPassword () {
        return $('#passwd');
    }

    public btnSubmit () {
        return $('#SubmitLogin');
    }

    public btnSubmitCreate () {
        return $('#SubmitCreate');
    }


    

    public get textErrorEmail () {
        return $('#create_account_error');
    }

    public get textErrorExistedEmail () {
        return $(".//li[text() = 'An account using this email address has already been registered. Please enter a valid password or request a new one. '] ");
    }

    
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async set_loginEmailCreate(email: string) {
        await this.inputEmailCreate.setValue(email);
    }


    public async set_loginEmail(email: string) {
        await this.inputEmail.setValue(email);
    }

    public async set_password(password: string) {
        await this.inputPassword.setValue(password);
    }

    public async click_btnSubmit() {
        await this.btnSubmit().click();
    }

    public async click_btnSubmitCreate() {
        await this.btnSubmitCreate().click();
        
    }



    /**
     * overwrite specific options to adapt it to page object
     */
    //public open () {
    //    return super.open('login');
    //}
}

export default new LoginPage();
