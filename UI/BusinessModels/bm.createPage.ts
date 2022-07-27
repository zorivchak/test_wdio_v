import { ChainablePromiseElement } from 'webdriverio';
import { myUser, typeUser } from '../../test/specs/userdata';

//import Userdata from '../../../test/specs/userdata';

const CreatePage = require('./create.page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
 export class BmCreatePage{

    createPage = new CreatePage();


    async setPersonalInformation(myUser: typeUser){
        await this.createPage.click_RadioGender(myUser.gender);
        
        await this.createPage.set_FirstName(myUser.firstName);
        await this.createPage.set_LastName(myUser.lastName);
        await this.createPage.set_Password(myUser.password);
        await this.createPage.set_Day(myUser.day);
        await this.createPage.set_Month(myUser.month);
        await this.createPage.set_Year(myUser.year);
    }


    async setAdressInformation(myUser: typeUser){
        await this.createPage.set_Company(myUser.company);
        await this.createPage.set_Adress1(myUser.adress1);
        await this.createPage.set_Adress2(myUser.adress2);

        await this.createPage.set_City(myUser.city);
        await this.createPage.set_State(myUser.State);
        await this.createPage.set_postCode(myUser.postcode);

        await this.createPage.set_Countries(myUser.country);
        await this.createPage.set_Other(myUser.other);

        await this.createPage.set_Phone(myUser.phone);
        await this.createPage.set_MobPhone(myUser.mobPhone);
        await this.createPage.set_Alias(myUser.alias);
    }



    public async setAllInformation(myUser: typeUser){
        await this.setPersonalInformation(myUser);
        await this.setAdressInformation(myUser);
    }

}


