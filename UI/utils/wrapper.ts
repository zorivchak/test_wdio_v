

class BasePage {

public async searchElement(locator: string, shouldWaitForElement: boolean = true, timeout: number = 5000) 
    {
        shouldWaitForElement && await $(locator).waitForDisplayed({timeout: timeout})
        return $(locator);
    }
}
//дописати вейтер як 3 параметр