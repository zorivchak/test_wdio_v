
import allureReporter from '@wdio/allure-reporter';
import { findElement } from '../locators';

export class HeadreComponent{
    
    private loginButton;

    constructor(){
        this.loginButton = findElement('.login');
    }


    public async click_login(){
        allureReporter.addStep('Allure. Click login');
        await this.loginButton.waitForDisplayed();
        await this.loginButton.click();
    }
}

