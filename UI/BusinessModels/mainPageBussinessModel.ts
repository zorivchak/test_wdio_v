import { Page } from "../pageobjects/page/mainPage";




export async function goToLoginPage(){
    const mainPage = new Page();
    await mainPage.open();
    await mainPage.header.click_login();
}

 