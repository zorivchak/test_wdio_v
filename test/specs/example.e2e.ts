

import allureReporter from '@wdio/allure-reporter';

import UserData from './userdata';

import { Page } from '../../UI/pageobjects/page/page';
import { LoginPage } from '../../UI/pageobjects/loginPage/login.page';
import { BmCreatePage } from '../../UI/BusinessModels/bm.createPage';
import { CreatePage } from '../../UI/pageobjects/createPage/create.page';







describe('Login Page. Already existed email. Error appears ', () => {

    it('Inputs Already existed email. Empty', async () => {
        allureReporter.addSeverity('Critical');
        allureReporter.addFeature('Allure. Login Page. Already existed email')

        const mainPage = new Page();
        await mainPage.open();
        await mainPage.header.click_login();


        const loginPage = new LoginPage();
        await loginPage.set_loginEmailCreate(UserData.existedEmail);
        await loginPage.click_btnSubmitCreate();
        await expect(loginPage.locatorTextErrorExistedEmail()).toBeExisting();
    });
});



describe('Login Page. Empty/Wrong email address. Error appears ', () => {

    beforeEach(async () => {
        const mainPage = new Page();
        await mainPage.open();
        await mainPage.header.click_login();
    });

    it('Inputs for user registration. Empty', async () => {
        allureReporter.addFeature('Allure . Empty/Wrong');
        const loginPage = new LoginPage();
        await loginPage.set_loginEmailCreate(UserData.emptyEmail);
    });

    it('Inputs for user registration. WrongStr', async () => {
        allureReporter.addFeature('Allure . Empty/Wrong')
        const loginPage = new LoginPage();
        await loginPage.set_loginEmailCreate(UserData.wrongEmail);
    });

    afterEach(async () => {
        const loginPage = new LoginPage();
        await loginPage.click_btnSubmitCreate();
        await expect(loginPage.locatorErrorEmail()).toBeExisting();
    });
});


describe('Login Page. Success User registeration ', () => {

    it('Create new user. User created successfully', async () => {
        const mainPage = new Page();
        await mainPage.open();
        await mainPage.header.click_login();

        const loginPage = new LoginPage();
        await loginPage.set_loginEmailCreate(UserData.newEmail);
        await loginPage.click_btnSubmitCreate();
        
        const bm = new BmCreatePage();
        await bm.setAllInformation(UserData);

        const createPage = new CreatePage();
        await createPage.click_btnRegister();

        await expect(createPage.getTextMyAcount()).toBeExisting();
    });

});

