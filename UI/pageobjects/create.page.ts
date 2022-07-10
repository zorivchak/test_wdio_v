import { ChainablePromiseElement } from 'webdriverio';
import Locators from './locators';
import Userdata from '../../test/specs/userdata';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class CreatePage {




    radioGender = Userdata.gender;

    inputFirstName = '#customer_firstname';
    inputLastName = '#customer_lastname';
    inputPasswd = '#passwd';

    cbxDays = '#days';
    cbxMonths = '#months';
    cbxYears = '#years';

    inputCompany = '#company';
    inputAddress1 = '#address1';
    inputAddress2 = '#address2';
    inputCity = '#city';
    cbxStates = '#id_state';
    
    inputPostcode = '#postcode';
    cbxCountries = '#id_country';
    inputOther = '#other';
    inputPhone = '#phone';
    inputPhoneMobile = '#phone_mobile';
    inputAlias = '#alias';
    btnRegister = '#submitAccount';
    textMyAccount = ".//h1[text()='My account']";
    



    //////////////////////////////////////////
    //click and sets
    
    public async click_RadioGender(gender){
        await Locators.getElement(Locators.getLocatorByText(gender)).click();
    }    

    public async set_FirstName(name: string = "Firstname") {
        await Locators.getElement(this.inputFirstName).setValue(name);
    }

    public async set_LastName(name: string = "Lastname") {
        await Locators.getElement(this.inputLastName).setValue(name);
    }

    public async set_Password(password: string = "pass123-+") {
        await Locators.getElement(this.inputPasswd).setValue(password);
    }


    /////////////////////////////////////

    public async set_Day(day: string = "1") {
        await Locators.getElement(this.cbxDays).scrollIntoView();
        await Locators.getElement(this.cbxDays).selectByAttribute('value', day);
    }

    public async set_Month(month: string = "4") {
        await Locators.getElement(this.cbxMonths).scrollIntoView();
        await Locators.getElement(this.cbxMonths).selectByAttribute('value', month);
    }


    public async set_Year(year: string = "2017") {
        await Locators.getElement(this.cbxYears).scrollIntoView();
        await Locators.getElement(this.cbxYears).selectByAttribute('value', year);
    }


    /////////////////////////////////////////


    ///////////////////////////////////////
    public async set_Company(comp: string = "JustCompany") {
        await Locators.getElement(this.inputCompany).setValue(comp);
    }

    public async set_Adress1(adress: string = "Shevchenka str.") {
        await Locators.getElement(this.inputAddress1).setValue(adress);
    }

    public async set_Adress2(adress: string = "Franka str.") {
        await Locators.getElement(this.inputAddress2).setValue(adress);
    }

    public async set_City(city: string = "New York") {
        await Locators.getElement(this.inputCity).setValue(city);
    }


    public async set_State(state: string = "2") {
        await Locators.getElement(this.cbxStates).scrollIntoView();
        await Locators.getElement(this.cbxStates).selectByAttribute('value', state);
    }

    public async set_postCode(code: string = "78245") {
        await Locators.getElement(this.inputPostcode).setValue(code);
    }


    public async set_Countries(country: string = "21") {
        await Locators.getElement(this.cbxCountries).scrollIntoView();
        await Locators.getElement(this.cbxCountries).selectByAttribute('value', country);
    }


    public async set_Other(other: string = "Add. information") {
        await Locators.getElement(this.inputOther).setValue(other);
    }

    public async set_Phone(numb: string = "+36522415151651") {
        await Locators.getElement(this.inputPhone).setValue(numb);
    }

    public async set_MobPhone(numb: string = "+36522415151651") {
        await Locators.getElement(this.inputPhoneMobile).setValue(numb);
    }

    public async set_Alias(data: string = "just data") {
        await Locators.getElement(this.inputAlias).setValue(data);
    }


    public async click_btnRegister(){
        await Locators.getElement(this.btnRegister).click();
    } 


    public async setPersonalInformation(object){
        await this.click_RadioGender(object.gender);
        
        await this.set_FirstName(object.firstName);
        await this.set_LastName(object.lastName);
        await this.set_Password(object.password);
        await this.set_Day(object.day);
        await this.set_Month(object.month);
        await this.set_Year(object.year);

    }

    public async setAdressInformation(object){
        await this.set_Company(object.company);
        await this.set_Adress1(object.adress1);
        await this.set_Adress2(object.adress2);

        await this.set_City(object.city);
        await this.set_State(object.State);
        await this.set_postCode(object.postcode);

        await this.set_Countries(object.country);
        await this.set_Other(object.other);

        await this.set_Phone(object.phone);
        await this.set_MobPhone(object.mobPhone);
        await this.set_Alias(object.alias);
    }

    public async setAllInformation(object){
        await this.setPersonalInformation(object);
        await this.setAdressInformation(object);
    }

}


export default new CreatePage(); 



