

import allureReporter from '@wdio/allure-reporter';

import UserData, { myUser } from './userdata';

import { Page } from '../../UI/pageobjects/page/mainPage';
import { LoginPage } from '../../UI/pageobjects/loginPage/loginPage';
import { setAllInformation } from '../../UI/BusinessModels/createUserPageBussinessModel';
import { CreatePage } from '../../UI/pageobjects/createPage/createUserPage';
import { goToLoginPage } from '../../UI/BusinessModels/mainPageBussinessModel';
import { set_loginEmailCreate, set_loginEmailCreateSubmit } from '../../UI/BusinessModels/loginPageBussinessModel';


//var chai = require('chai');
//var should = require('chai').should() 



/*
describe('Login Page. Already existed email. Error appears ', () => {

    it('Inputs Already existed email. Empty', async () => {
        allureReporter.addSeverity('Critical');
        allureReporter.addFeature('Allure. Login Page. Already existed email')

        await goToLoginPage();
        await set_loginEmailCreateSubmit(UserData.existedEmail);

        const loginPage = new LoginPage();
        await loginPage.toBeExisting_textErrorExistedEmail();
        //await expect(loginPage.locatorTextErrorExistedEmail()).toBeExisting();
  
    });
});



describe('Login Page. Empty/Wrong email address. Error appears ', () => {

    beforeEach(async () => {
        await goToLoginPage();
    });

    it('Inputs for user registration. Empty', async () => {
        allureReporter.addFeature('Allure . Empty/Wrong');
        await set_loginEmailCreate(UserData.emptyEmail);
    });

    it('Inputs for user registration. WrongStr', async () => {
        allureReporter.addFeature('Allure . Empty/Wrong')
        await set_loginEmailCreate(UserData.wrongEmail);
    });

    afterEach(async () => {
        const loginPage = new LoginPage();
        await loginPage.click_btnSubmitCreate();
        await loginPage.toBeExisting_locatorErrorEmail();
    });
});
*/


describe('Login Page. Success User registeration ', () => {

    it('Create new user. User created successfully', async () => {
        await goToLoginPage();
        await set_loginEmailCreateSubmit(UserData.newEmail);
        await setAllInformation(myUser);
        

        const createPage = new CreatePage();
        await createPage.click_btnRegister();
        await createPage.toBeExisting_getTextMyAcount();
    
    });

});


