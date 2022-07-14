import { ChainablePromiseElement } from 'webdriverio';


/**
 * sub page containing specific selectors and methods for a specific page
 */


export default class LoginPageLocators {
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

}

//export default new LoginPageLocators(); 