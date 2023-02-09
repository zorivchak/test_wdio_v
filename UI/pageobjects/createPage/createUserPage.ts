import { ChainablePromiseElement } from 'webdriverio';
import { findElement } from '../locators';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class CreatePage{

    private radioGender;

    private inputFirstName;
    private inputLastName;
    private inputPasswd;

    private cbxDays;
    private cbxMonths;
    private cbxYears;

    private inputCompany;
    private inputAddress1;
    private inputAddress2;
    private inputCity;
    private cbxStates;
    
    private inputPostcode;
    private cbxCountries;
    private inputOther;
    private inputPhone;
    private inputPhoneMobile;
    private inputAlias;
    private btnRegister;
    private textMyAccount;


    constructor(){
        this.radioGender = findElement('#id_gender1');

        this.inputFirstName = findElement('#customer_firstname');
        this.inputLastName = findElement('#customer_lastname');
        this.inputPasswd = findElement('#passwd');

        this.cbxDays = findElement('#days');
        this.cbxMonths = findElement('#months');
        this.cbxYears = findElement('#years');

        this.inputCompany = findElement('#company');
        this.inputAddress1 = findElement('#address1');
        this.inputAddress2 = findElement('#address2');
        this.inputCity = findElement('#city');
        this.cbxStates = findElement('#id_state');
    
        this.inputPostcode = findElement('#postcode');
        this.cbxCountries = findElement('#id_country');
        this.inputOther = findElement('#other');
        this.inputPhone = findElement('#phone');
        this.inputPhoneMobile = findElement('#phone_mobile');
        this.inputAlias = findElement('#alias');
        this.btnRegister = findElement('#submitAccount');
        this.textMyAccount = findElement('.page-heading');
    }


    async click_RadioGender(){
        await this.radioGender.click();
    }    

    async set_FirstName(name: string) {
        await this.inputFirstName.setValue(name);
    }

    async set_LastName(name: string) {
        await this.inputLastName.setValue(name);
    }

    async set_Password(password: string) {
        await this.inputPasswd.setValue(password);
    }


    /////////////////////////////////////

    async set_Day(day: string) {
        
        await this.cbxDays.selectByAttribute('value', day);
    }

    async set_Month(month: string) {
        await this.cbxMonths.selectByAttribute('value', month);
    }


    async set_Year(year: string) {
        await this.cbxYears.selectByAttribute('value', year);
    }


    /////////////////////////////////////////


    ///////////////////////////////////////
    async set_Company(comp: string) {
        await this.inputCompany.setValue(comp);
    }

    async set_Adress1(adress: string) {
        await this.inputAddress1.setValue(adress);
    }

    async set_Adress2(adress: string) {
        await this.inputAddress2.setValue(adress);
    }

    async set_City(city: string) {
        await this.inputCity.setValue(city);
    }


    async set_State(state: string) {
        await this.cbxStates.selectByAttribute('value', state);
    }

    async set_postCode(code: string) {
        await this.inputPostcode.setValue(code);
    }


    async set_Countries(country: string) {
        await this.cbxCountries.selectByAttribute('value', country);
    }


    async set_Other(other: string) {
        await this.inputOther.setValue(other);
    }

    async set_Phone(numb: string) {
        await this.inputPhone.setValue(numb);
    }

    async set_MobPhone(numb: string) {
        await this.inputPhoneMobile.setValue(numb);
    }

    async set_Alias(data: string) {
        await this.inputAlias.setValue(data);
    }


    async click_btnRegister(){
        await this.btnRegister.click();
    } 

    async getTextMyAcount(){
        return await this.textMyAccount;
    }
    
    async toBeExisting_getTextMyAcount(){
        await expect(this.getTextMyAcount()).toBeExisting();
    }
}





