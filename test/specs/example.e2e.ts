import Page from  '../../UI/pageobjects/page/page';
import LoginPage from '../../UI/pageobjects/loginPage/login.page';
import BmCreatePage from '../../UI/BusinessModels/bm.createPage';
import CreatePage from '../../UI/pageobjects/createPage/create.page';
import allureReporter from '@wdio/allure-reporter';


import UserData from './userdata';







describe('Login Page. Already existed email. Error appears ', () => {

    it('Inputs Already existed email. Empty', async () => {
        allureReporter.addSeverity('Critical');
        allureReporter.addFeature('Allure. Login Page. Already existed email')
        await Page.open();
        await Page.click_login();
        await LoginPage.set_loginEmailCreate(UserData.existedEmail);
        await LoginPage.click_btnSubmitCreate();
        await expect(LoginPage.locatorTextErrorExistedEmail()).toBeExisting();
    });

    it('should save a screenshot of the browser view', async () => {
        await browser.saveScreenshot('./screenshot.png');
    });

});


describe('Login Page. Empty/Wrong email address. Error appears ', () => {

    beforeEach(async () => {
        await Page.open();
        await browser.pause(2000);
        await Page.click_login();
    });

    it('Inputs for user registration. Empty', async () => {
        allureReporter.addFeature('Allure . Empty/Wrong')
        await LoginPage.set_loginEmailCreate(UserData.emptyEmail);
    });

    it('Inputs for user registration. WrongStr', async () => {
        allureReporter.addFeature('Allure . Empty/Wrong')
        await LoginPage.set_loginEmailCreate(UserData.wrongEmail);
    });

    afterEach(async () => {
        await LoginPage.click_btnSubmitCreate();
        await expect(LoginPage.locatorErrorEmail()).toBeExisting();
    });
});


