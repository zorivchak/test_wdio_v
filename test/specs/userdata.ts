class UserData {
    /**
     * define selectors using getter methods
     */
    public emptyEmail = " ";
    //wrong
    public wrongEmail = "wrongEmail";
    //existed
    public existedEmail = "test@gmail.com";
    //correct for create new
    public newEmail = this.createGuid12() + "@gmail.com";


    public arrGender = [" Mr. ", " Mrs. "];
    //cad do same with other fields
    public gender = this.arrGender[Math.floor(Math.random() * this.arrGender.length)];

    public firstName = "Ivan";
    public lastName = "Petrovych";

    public password = this.createGuid12();

    public day = "10";
    public month = "4";
    public year = "2000";


    public company = "sdadasdasd5";
    public adress1 = "Shevchenka str.";
    public adress2 = "Shevchenka str.";

    public city = "New York";
    public State = "2";
    public postcode = "79065";
    public country = "21";
    public other = "Other information";

    public phone = "+655225544234";
    public mobPhone = "+65522554444";
    public alias = "Other information";


    public createGuid12(){
        return 'xxyxyxxxyxxy'.replace(/[xy]/g, function(c) {
            let r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
      }
    
}

export default new UserData();


export type typeUser = {
    arrGender: string[];
    gender: string;
    firstName: string;
    lastName: string;

    password: string;

    day: string;
    month: string;
    year: string;

    company: string;
    adress1: string;
    adress2: string;

    city: string;
    State: string;
    postcode: string;
    country: string;
    other: string;

    phone: string;
    mobPhone: string;
    alias: string;

  };
  

export const myUser: typeUser = {
    arrGender: [" Mr. ", " Mrs. "],
    gender: " Mr. ",
    firstName: "Ivan",
    lastName: "Petrovych",

    password: "my_password_123_",

    day: "10",
    month: "4",
    year: "2000",

    company: "sdadasdasd5",
    adress1: "Shevchenka str.",
    adress2: "Shevchenka str.",

    city: "New York",
    State: "2",
    postcode: "79065",
    country: "21",
    other: "Other information",

    phone: "+655225544234",
    mobPhone: "+65522554444",
    alias: "Other information"
  };




