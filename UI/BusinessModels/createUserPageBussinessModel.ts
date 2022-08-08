import { myUser, typeUser } from '../../test/specs/userdata';
import { CreatePage } from '../pageobjects/createPage/createUserPage';

//import Userdata from '../../../test/specs/userdata';



export async function setPersonalInformation(myUser: typeUser){
        const createPage = new CreatePage();

        await createPage.click_RadioGender();
        await createPage.set_FirstName(myUser.personalData.firstName);
        await createPage.set_LastName(myUser.personalData.lastName);
        await createPage.set_Password(myUser.personalData.password);
        await createPage.set_Day(myUser.personalData.day);
        await createPage.set_Month(myUser.personalData.month);
        await createPage.set_Year(myUser.personalData.year);
    }



export async function  setAdressInformation(myUser: typeUser){
        const createPage = new CreatePage();
        await createPage.set_Company(myUser.adress.company);
        await createPage.set_Adress1(myUser.adress.adress1);
        await createPage.set_Adress2(myUser.adress.adress2);

        await createPage.set_City(myUser.adress.city);
        await createPage.set_State(myUser.adress.State);
        await createPage.set_postCode(myUser.adress.postcode);

        await createPage.set_Countries(myUser.adress.country);
        await createPage.set_Other(myUser.adress.other);

        await createPage.set_Phone(myUser.adress.phone);
        await createPage.set_MobPhone(myUser.adress.mobPhone);
        await createPage.set_Alias(myUser.adress.alias);
    }



export async function setAllInformation(myUser: typeUser){
        await setPersonalInformation(myUser);
        await setAdressInformation(myUser);
    }




