import { ChainablePromiseElement } from 'webdriverio';



/**
 * sub page containing specific selectors and methods for a specific page
 */
class CreatePage {

    public get RadioMister () {
        return $('#id_gender1');
    }

    public get RadioMrs () {
        return $('#uniform-id_gender2');
    }

    public get inputFirstName () {
        return $('#customer_firstname');
    }


    public get inputLastName () {
        return $('#customer_lastname');
    }
    
    public get inputPasswd () {
        return $('#passwd');
    }

    public get cbxDays () {
        return $('#uniform-days');
    }

    public cbxDay (day : string) {
        return $(".//select[@id='days']//option[@value='" + day + "']");
    }


    public get cbxMonths () {
        //return $('#months');
        return $('#uniform-months');
        
    }

    public cbxMonth (month : string) {
        switch (month){
            case 'January': return $(".//select[@id='months']//option[@value='1']"); 
            case 'February': return $(".//select[@id='months']//option[@value='2']"); 
            case 'March ': return $(".//select[@id='months']//option[@value='3']");
            case 'April': return $(".//select[@id='months']//option[@value='4']");
            case 'May': return $(".//select[@id='months']//option[@value='5']");
            case 'June': return $(".//select[@id='months']//option[@value='6']");
            case 'July': return $(".//select[@id='months']//option[@value='7']");
            case 'August': return $(".//select[@id='months']//option[@value='8']");
            case 'September': return $(".//select[@id='months']//option[@value='9']");
            case 'October': return $(".//select[@id='months']//option[@value='10']");
            case 'November': return $(".//select[@id='months']//option[@value='11']");
            case 'December': return $(".//select[@id='months']//option[@value='12']");
        }
        
    }

    public get cbxYears () {
        return $('#uniform-years');
    }

    public cbxYear (year : string) {
        return $(".//select[@id='years']//option[@value='" + year + "']");
    }


    public get inputCompany () {
        return $('#company');
    }

    public get inputAddress1 () {
        return $('#address1');
    }
    
    public get inputAddress2 () {
        return $('#address2');
    }

    public get inputCity () {
        return $('#city');
    }

    public get cbxStates () {
        return $('#id_state');
    }


    public cbxState (state : string) {
        return $(".//select[@id='id_state']//option[text()='" + state + "']");
    }

    public get inputPostcode () {
        return $('#postcode');
    }

    public get cbxCountries () {
        return $('#id_country');
    }

    public cbxCountry (country : string) {
        return $(".//select[@id='id_country']//option[text()='" + country + "']");
    }

    public get inputOther () {
        return $('#other');
    }

    public get inputPhone () {
        return $('#phone');
    }

    public get inputPhoneMobile () {
        return $('#phone_mobile');
    }

    public get inputAlias () {
        return $('#alias');
    }

    public get btnRegister () {
        return $('#submitAccount');
    }
    
    

    public get textMyAccount () {
        return $(".//h1[text()='My account']");
    }
    
    

    //////////////////////////////////////////
    //click and sets
    public async click_RadioMister(){
        await (await this.RadioMister).click();
    }    

    public async click_RadioMrs(){
        await (await this.RadioMrs).click();
    }    

    public async set_FirstName(name: string) {
        let value = name ?? "Firstname";
        await this.inputFirstName.setValue(value);
    }

    public async set_LastName(name: string) {
        let value = name ?? "Lastname";
        await this.inputLastName.setValue(value);
    }

    public async set_Password(password: string) {
        let value = password ?? "pass123-+";
        await this.inputPasswd.setValue(value);
    }

    
    /////////////////////////////////////
    
    public async set_Day(day: string) {
        await this.cbxDays.scrollIntoView();
        await this.cbxDays.click();
        let value = day ?? "1";
        await this.cbxDay(value).click();
    }

    public async set_Month(month: string) {
        await this.cbxMonths.scrollIntoView();
        await this.cbxMonths.click();
        let value = month ?? "April";
        await this.cbxMonth(value).click();
        //await browser.pause(10000);
    }

    public async set_Year(year: string) {
        await this.cbxYears.scrollIntoView();
        await this.cbxYears.click();
        let value = year ?? "2017";
        await this.cbxYear(value).click();
    }
    
    
    /////////////////////////////////////////


    ///////////////////////////////////////
    public async set_Company(comp: string) {
        let value = comp ?? "JustCompany";
        await this.inputCompany.setValue(value);
    }

    public async set_Adress1(adress: string) {
        let value = adress ?? "Shevchenka str.";
        await this.inputAddress1.setValue(value);
    }

    public async set_Adress2(adress: string) {
        let value = adress ?? "Franka str.";
        await this.inputAddress2.setValue(value);
    }

    public async set_City(city: string) {
        let value = city ?? "New York";
        await this.inputCity.setValue(value);
    }
    

    public async set_State(state: string) {
        await this.cbxStates.click();
        let value = state ?? "Alaska";
        await this.cbxState(value).click();
        //await browser.pause(10000);
    }

    public async set_postCode(code: string) {
        let value = code ?? "23432";
        await this.inputPostcode.setValue(value);
    }


    public async set_Countries(country: string) {
        await this.cbxCountries.click();
        let value = country ?? "United States";
        await this.cbxCountry(value).click();
        //await browser.pause(10000);
    }
    

    public async set_Other(other: string) {
        let value = other ?? "Add. information";
        await this.inputOther.setValue(value);
    }
    
    public async set_Phone(numb: string) {
        let value = numb ?? "+36522415151651";
        await this.inputPhone.setValue(value);
    }

    public async set_MobPhone(numb: string) {
        let value = numb ?? "+36522415151651";
        await this.inputPhoneMobile.setValue(value);
    }

    public async set_Alias(data: string) {
        let value = data ?? "just data";
        await this.inputAlias.setValue(value);
    }

    
    public async click_btnRegister(){
        await this.btnRegister.click();
    } 
    
    

    public async setAllInformation(object){
        switch (object.gender){
            case object.arrGender[0]: await this.click_RadioMister(); break;
            case object.arrGender[1]: await this.click_RadioMrs(); break;
            default: console.log("wrong data " + object.gender); break;
        }
        await this.set_FirstName(object.firstName);
        await this.set_LastName(object.lastName);
        await this.set_Password(object.password);
        await this.set_Day(object.day);
        await this.set_Month(object.month);
        await this.set_Year(object.year);
        
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
    
}


export default new CreatePage();