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


    public arrGender = ["mr", "mrs"];
    //cad do same with other fields
    public gender = this.arrGender[Math.floor(Math.random() * this.arrGender.length)];

    public firstName = "Ivan";
    public lastName = "Petrovych";

    public password = this.createGuid12();

    public day = "10";
    public month = "April";
    public year = "2000";


    public company = "sdadasdasd5";
    public adress1 = "Shevchenka str.";
    public adress2 = "Shevchenka str.";

    public city = "New York";
    public State = "Alaska";
    public postcode = "79065";
    public country = "United States";
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