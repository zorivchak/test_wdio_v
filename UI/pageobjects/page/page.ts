/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
import { config } from '../../../wdio.conf';
import allureReporter from '@wdio/allure-reporter';
import { HeadreComponent } from '../components/headerComponent';


export class Page{

    public header;

    constructor(){
        this.header = new HeadreComponent();
    }
    

        
    //mainLogo = '.logo.img-responsive';
    //login = '.login';
    //women = 'Women';

    ///////////////////////////////////////////////////////////
    public open () {
        return browser.url('/')
    }
}






