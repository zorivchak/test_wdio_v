import Page from  '../../UI/pageobjects/page';
import LoginPage from '../../UI/pageobjects/login.page';
import CreatePage from '../../UI/pageobjects/create.page';


import UserData from './userdata';





/*
describe('Main Page', () => {

    it('Load main page', async () => {
        await Page.open();
        await expect(Page.locatorMainLogo()).toBeExisting();
       
    });
});



describe('Login Page. Empty/Wrong email address. Error appears ', () => {

    beforeEach(async () => {
        await Page.open();
        await browser.pause(2000);
        await Page.click_login();
    });

    it('Inputs for user registration. Empty', async () => {
        await LoginPage.set_loginEmailCreate(UserData.emptyEmail);
    });

    it('Inputs for user registration. WrongStr', async () => {
        await LoginPage.set_loginEmailCreate(UserData.wrongEmail);
    });

    afterEach(async () => {
        await LoginPage.click_btnSubmitCreate();
        await expect(LoginPage.locatorErrorEmail()).toBeExisting();
    });
});


*/

describe('Login Page. Already existed email. Error appears ', () => {

    it('Inputs Already existed email. Empty', async () => {
        await Page.open();
        await Page.click_login();
        await LoginPage.set_loginEmailCreate(UserData.existedEmail);
        await LoginPage.click_btnSubmitCreate();
        await expect(LoginPage.locatorTextErrorExistedEmail()).toBeExisting();
    });

});

/*

describe('Login Page. Success User registeration ', () => {

    it('Create new user. User created successfully', async () => {
        await Page.open();
        await Page.click_login();
        await LoginPage.set_loginEmailCreate(UserData.newEmail);
        await LoginPage.click_btnSubmitCreate();
        
        await CreatePage.setAllInformation(UserData);
        await CreatePage.click_btnRegister();

        await expect(CreatePage.textMyAccount).toBeExisting();
    });

});



*/