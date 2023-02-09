/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
import { config } from '../../../wdio.conf';
import allureReporter from '@wdio/allure-reporter';
import { HeadreComponent } from '../components/headerComponent';


export class Page{

    header;

    constructor(){
        this.header = new HeadreComponent();
    }

    ///////////////////////////////////////////////////////////
    open () {
        return browser.url('/')
    }


    
}






