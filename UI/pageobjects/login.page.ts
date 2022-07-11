import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';
import Locators from './locators';

/**
 * sub page containing specific selectors and methods for a specific page
 */


class LoginPage {
    /**
     * define selectors using getter methods
     * 
     */
    email = '#email';
    emailCreate = '#email_create';
    password = '#passwd';
    btnSubmit = '#SubmitLogin';
    btnSubmitCreate = '#SubmitCreate'
    textErrorEmail ='#create_account_error';
    

    arrErrorMessages = ["Invalid email address.",
                        "An account using this email address has already been registered. Please enter a valid password or request a new one. "];


    textErrorExistedEmail = ".//li[text() = '"+ this.arrErrorMessages[1] +"'] ";                        
   
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async set_loginEmailCreate(email: string) {
        await Locators.getElement(this.emailCreate).setValue(email);
    }

    public async set_loginEmail(email: string) {
        await Locators.getElement(this.email).setValue(email);
    }

    public async set_password(password: string) {
        await Locators.getElement(this.password).setValue(password);
    }

    public async click_btnSubmit() {
        await Locators.getElement(this.btnSubmit).click();
    }

    public async click_btnSubmitCreate() {
        await Locators.getElement(this.btnSubmitCreate).click();
    }

    public async locatorErrorEmail() {
        return await Locators.getElement(this.textErrorEmail);
    }
    public async locatorTextErrorExistedEmail() {
        return await Locators.getElement(this.textErrorExistedEmail);
    }

    
}

export default new LoginPage();



