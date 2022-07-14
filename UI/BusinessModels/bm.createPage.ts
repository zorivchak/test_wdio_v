import { ChainablePromiseElement } from 'webdriverio';
import Locators from '../pageobjects/locators'
//import Userdata from '../../../test/specs/userdata';

const CreatePage = require('./create.page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class BmCreatePage{

    createPage = new CreatePage();


    public async setPersonalInformation(object){
        await this.createPage.click_RadioGender(object.gender);
        
        await this.createPage.set_FirstName(object.firstName);
        await this.createPage.set_LastName(object.lastName);
        await this.createPage.set_Password(object.password);
        await this.createPage.set_Day(object.day);
        await this.createPage.set_Month(object.month);
        await this.createPage.set_Year(object.year);
    }


    public async setAdressInformation(object){
        await this.createPage.set_Company(object.company);
        await this.createPage.set_Adress1(object.adress1);
        await this.createPage.set_Adress2(object.adress2);

        await this.createPage.set_City(object.city);
        await this.createPage.set_State(object.State);
        await this.createPage.set_postCode(object.postcode);

        await this.createPage.set_Countries(object.country);
        await this.createPage.set_Other(object.other);

        await this.createPage.set_Phone(object.phone);
        await this.createPage.set_MobPhone(object.mobPhone);
        await this.createPage.set_Alias(object.alias);
    }



    public async setAllInformation(object){
        await this.setPersonalInformation(object);
        await this.setAdressInformation(object);
    }

}

export default new  BmCreatePage();
