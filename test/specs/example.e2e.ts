import Page from  '../../UI/pageobjects/page/page';
import LoginPage from '../../UI/pageobjects/loginPage/login.page';
import BmCreatePage from '../../UI/BusinessModels/bm.createPage';
import CreatePage from '../../UI/pageobjects/createPage/create.page';
import allureReporter from '@wdio/allure-reporter';


import UserData from './userdata';


import axios from "axios";
import { petBody, petUrl, petBodyEdit, id } from '../../Api/apiData';
import { ApiManager } from '../../Api/apiManager';
import { findPetById } from '../../Api/controlers/petController';





describe('TEST API.', () => {

   
    it('Test 1: Add new pet on the story. Id = ' + id, async () => {
        //let apiManager = new ApiManager();
        //let resp = await apiManager.setUrl(petUrl).setMetod('post').setData(petBody).send();
        const resp = await findPetById("1");
        console.log(resp.data);
        console.log("resp.status: " + resp.status);


    });



/*
    it('Test 1: ADD pet name. Id = ' + id, async () => {
        await axios({
            method: 'post',
            url: petUrl,
            data: petBody
        });
    });

    */
/*
    it('Test 1: Add new pet on the story. Id = ' + id, async () => {
        let resp = await axios.post(petUrl, petBody);
        //console.log("await resp).data" + (await resp).data);
        console.log("resp.status: " + resp.status);
        console.log("resp.config: " + resp.config);
        console.log("resp.data: " + resp.data);
        console.log("resp.headers: " + resp.headers);
        console.log("resp.request: " + resp.request);
        console.log("resp.statusText: " + resp.statusText);
        console.log("resp.data.id " + resp.data.id);
        console.log("resp.data.category.name " + resp.data.category.name);
        console.log("resp.data.name " + resp.data.name);
        
        
        expect(resp.status).toEqual(200);


        //console.log("resp.data.id = " + resp.data.id);
        //expect((resp.data.id).toEqual(id));


    });

*/
/*

    it('Test 2: Chenge pet name. Id = ' + id, async () => {
        let resp = axios.put(petUrl, petBodyEdit);
        //console.log((await resp).data);
        await expect((await resp).status).toEqual(200);
    });
*/
/*
    it('Test 3: Delete pet. Id = ' + id, async () => {
        let resp = axios.delete(petUrl + id);
        await expect((await resp).status).toEqual(200);
    });

*/




/*

    let apiManager = new ApiManager();


    it('Test 1: Add new pet on the story. Id = ' + id, async () => {
        apiManager.post();
    });
    

    it('Test 2: Delete. Id = ' + id, async () => {
        apiManager.post();
    });
    
*/






/*


    it('Test 1: Add new pet on the story. Id = ' + id, async () => {
        let resp = await axios.post(petUrl, petBody);
        //console.log("await resp).data" + (await resp).data);
        console.log("resp.status: " + resp.status);

    });




    

    it('Test 2: Chenge pet name. Id = ' + id, async () => {
        let resp = axios.put(petUrl, petBodyEdit);
        //console.log((await resp).data);
        await expect((await resp).status).toEqual(200);
    });







    it('Test 2: Chenge pet name. Id = ' + id, async () => {
        let resp = axios.put(petUrl, petBodyEdit);
        console.log((await resp).data);
        await expect((await resp).status).toEqual(200);
    });


   

    
    it('Test 3: Delete pet. Id = ' + id, async () => {
        let resp = axios.delete(petUrl + id);
        await expect((await resp).status).toEqual(200);
    });

    */
});


















/*


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

});
*/

/*
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


*/