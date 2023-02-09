import { ChainablePromiseElement } from 'webdriverio';

import allureReporter from '@wdio/allure-reporter';
import { findElement } from '../locators';

const expectChai = require('chai').expect;

export class LoginPage{
                     
    private email;
    private emailCreate;
    private password;
    private btnSubmit;
    private btnSubmitCreate;
    private textErrorEmail;
    private arrErrorMessages;
    private textErrorExistedEmail;  
  

    constructor(){
        this.email = findElement('#email');
        this.emailCreate = findElement('#email_create');
        this.password = findElement('#passwd');
        this.btnSubmit = findElement('#SubmitLogin');
        this.btnSubmitCreate = findElement('#SubmitCreate');
        this.textErrorEmail = findElement('#create_account_error');
        this.arrErrorMessages = ["Invalid email address.",
                        "An account using this email address has already been registered. Please enter a valid password or request a new one. "];
        this.textErrorExistedEmail = findElement(".//li[text() = '"+ this.arrErrorMessages[1] +"'] ");  
    }
    

    async set_loginEmailCreate(email: string) {
        allureReporter.addStep('Allure. set loginEmailCreate');
        await this.emailCreate.setValue(email);
    }

    async set_loginEmail(email: string) {
        allureReporter.addStep('Allure. set loginEmail');
        await this.email.setValue(email);
    }

    async set_password(password: string) {
        allureReporter.addStep('Allure. set password');
        await this.password.setValue(password);
    }

    async click_btnSubmit() {
        allureReporter.addStep('Allure. click btn Submit');
        await this.btnSubmit.click();
    }

    async click_btnSubmitCreate() {
        allureReporter.addStep('Allure. click btnSubmit Create');
        await this.btnSubmitCreate.click();
    }

    async locatorErrorEmail() {
        allureReporter.addStep('Allure. Locator Error Email');
        return this.textErrorEmail;
    }
    async locatorTextErrorExistedEmail() {
        allureReporter.addStep('Allure. locator Text Error Existed Email');
        return await this.textErrorExistedEmail;
    }
    
    
    async toBeExisting_textErrorExistedEmail(){
        await expectChai(this.locatorTextErrorExistedEmail()).to.exist;
    }
    
    async toBeExisting_locatorErrorEmail() {
        //await expect(this.locatorErrorEmail()).toBeExisting();
        await expectChai(this.locatorErrorEmail()).to.exist;


    }

/*
    async setEmailSubmit(email : string){
        await this.set_loginEmailCreate(email);
        await this.click_btnSubmitCreate();
    }
    */
}




