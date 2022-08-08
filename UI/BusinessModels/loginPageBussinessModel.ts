import { LoginPage } from "../pageobjects/loginPage/loginPage";



export async function set_loginEmailCreateSubmit(email: string){
    const loginPage = new LoginPage();
    await loginPage.set_loginEmailCreate(email);
    await loginPage.click_btnSubmitCreate();
}


export async function set_loginEmailCreate(email: string){
    const loginPage = new LoginPage();
    await loginPage.set_loginEmailCreate(email);
}


