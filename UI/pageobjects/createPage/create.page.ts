import { ChainablePromiseElement } from 'webdriverio';
//import Locators from '../locators';
//import Userdata from '../../../test/specs/userdata';

const CreatePageLocators = require('./create.page.locators');

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
        this.textMyAccount = findElement('My account');
    }


    public async click_RadioGender(gender){
        await this.radioGender.click();
    }    

    public async set_FirstName(name: string) {
        await this.inputFirstName.setValue(name);
    }

    public async set_LastName(name: string) {
        await this.inputLastName.setValue(name);
    }

    public async set_Password(password: string) {
        await this.inputPasswd.setValue(password);
    }


    /////////////////////////////////////

    public async set_Day(day: string) {
        
        await this.cbxDays.selectByAttribute('value', day);
    }

    public async set_Month(month: string) {
        await this.cbxMonths.selectByAttribute('value', month);
    }


    public async set_Year(year: string) {
        await this.cbxYears.selectByAttribute('value', year);
    }


    /////////////////////////////////////////


    ///////////////////////////////////////
    public async set_Company(comp: string) {
        await this.inputCompany.setValue(comp);
    }

    public async set_Adress1(adress: string) {
        await this.inputAddress1.setValue(adress);
    }

    public async set_Adress2(adress: string) {
        await this.inputAddress2.setValue(adress);
    }

    public async set_City(city: string) {
        await this.inputCity.setValue(city);
    }


    public async set_State(state: string) {
        await this.cbxStates.selectByAttribute('value', state);
    }

    public async set_postCode(code: string) {
        await this.inputPostcode.setValue(code);
    }


    public async set_Countries(country: string) {
        await this.cbxCountries.selectByAttribute('value', country);
    }


    public async set_Other(other: string) {
        await this.inputOther.setValue(other);
    }

    public async set_Phone(numb: string) {
        await this.inputPhone.setValue(numb);
    }

    public async set_MobPhone(numb: string) {
        await this.inputPhoneMobile.setValue(numb);
    }

    public async set_Alias(data: string) {
        await this.inputAlias.setValue(data);
    }


    public async click_btnRegister(){
        await this.btnRegister.click();
    } 

    public async getTextMyAcount(){
        return await this.textMyAccount;
    }
    

}





