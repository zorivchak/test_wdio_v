/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

class Page {
    /**
    * Opens a sub page of the page
    */

    //locators

    //locator for MAIN LOGO (css by class)
    public get mainLogo () {
        return $('.img-responsive');
    }

    //locator for button Login (css by class)
    public get login () {
        return $('.login');
    }

    



    ///////////////////////////////////////////////////////////
    public open () {
        //return browser.url(`https://the-internet.herokuapp.com/${path}`)
        return browser.url('http://automationpractice.com/index.php')
    }

    public async click_login(){
        await this.login.waitForDisplayed();
        await this.login.click();
    }

    
    
}


export default new Page();