import { ChainablePromiseElement } from 'webdriverio';
import Locators from '../locators';
//import Userdata from '../../../test/specs/userdata';

const CreatePageLocators = require('./create.page.locators');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class CreatePage{

    createPageLocators = new CreatePageLocators();


    public async click_RadioGender(gender){
        await Locators.getElement(Locators.getLocatorByText(gender)).click();
    }    

    public async set_FirstName(name: string) {
        await Locators.getElement(this.createPageLocators.inputFirstName).setValue(name);
    }

    public async set_LastName(name: string) {
        await Locators.getElement(this.createPageLocators.inputLastName).setValue(name);
    }

    public async set_Password(password: string) {
        await Locators.getElement(this.createPageLocators.inputPasswd).setValue(password);
    }


    /////////////////////////////////////

    public async set_Day(day: string) {
        
        await Locators.getElement(this.createPageLocators.cbxDays).selectByAttribute('value', day);
    }

    public async set_Month(month: string) {
        await Locators.getElement(this.createPageLocators.cbxMonths).selectByAttribute('value', month);
    }


    public async set_Year(year: string) {
        await Locators.getElement(this.createPageLocators.cbxYears).selectByAttribute('value', year);
    }


    /////////////////////////////////////////


    ///////////////////////////////////////
    public async set_Company(comp: string) {
        await Locators.getElement(this.createPageLocators.inputCompany).setValue(comp);
    }

    public async set_Adress1(adress: string) {
        await Locators.getElement(this.createPageLocators.inputAddress1).setValue(adress);
    }

    public async set_Adress2(adress: string) {
        await Locators.getElement(this.createPageLocators.inputAddress2).setValue(adress);
    }

    public async set_City(city: string) {
        await Locators.getElement(this.createPageLocators.inputCity).setValue(city);
    }


    public async set_State(state: string) {
        await Locators.getElement(this.createPageLocators.cbxStates).selectByAttribute('value', state);
    }

    public async set_postCode(code: string) {
        await Locators.getElement(this.createPageLocators.inputPostcode).setValue(code);
    }


    public async set_Countries(country: string) {
        await Locators.getElement(this.createPageLocators.cbxCountries).selectByAttribute('value', country);
    }


    public async set_Other(other: string) {
        await Locators.getElement(this.createPageLocators.inputOther).setValue(other);
    }

    public async set_Phone(numb: string) {
        await Locators.getElement(this.createPageLocators.inputPhone).setValue(numb);
    }

    public async set_MobPhone(numb: string) {
        await Locators.getElement(this.createPageLocators.inputPhoneMobile).setValue(numb);
    }

    public async set_Alias(data: string) {
        await Locators.getElement(this.createPageLocators.inputAlias).setValue(data);
    }


    public async click_btnRegister(){
        await Locators.getElement(this.createPageLocators.btnRegister).click();
    } 

    public async getTextMyAcount(){
        return await Locators.getLocatorByTextH1(this.createPageLocators.textMyAccount);
    }
    

}


export default new CreatePage(); 



