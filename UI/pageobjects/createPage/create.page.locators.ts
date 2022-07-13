import { ChainablePromiseElement } from 'webdriverio';
import Userdata from '../../../test/specs/userdata';


/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class CreatePageLocators {

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
    textMyAccount = 'My account';
}


//export default new CreatePageLocators(); 