import { baseUrl } from "../apiData";
import { ApiManager } from "../apiManager"

export const findPetById = async (id: string) =>{
    const request = new ApiManager();
    return await request.setUrl(`${baseUrl}pet/${id}`).setMetod("GET").send();
}


//створення

//ітд


//і дописати контролери для всіх Swagger Swagger 
