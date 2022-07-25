
import axios from "axios";
//import { petBody, petUrl, id } from "./apiData";

interface Request {
  url: string,
  method: string,
  data: object
}


  export class ApiManager{

 

    private request:Request;


    setUrl(url: string){
      this.request.url = url;
      return this;
    }

    
    setMetod(method: string){
      this.request.method = method;
      return this;
    }


    setData(data: object){
      this.request.data = data;
      return this;
    }


    send(){
      return axios(this.request);
    }



  }
    





    

  