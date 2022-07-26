import { petUrl } from "../apiData";
import { ApiManager } from "../apiManager"


export const findPetById = async (id) =>{
    const request = new ApiManager();
    return await request.setUrl(`${petUrl}${id}`).setMetod("GET").send();
}

export const createPet = async (petBody) =>{
    const request = new ApiManager();
    return await request.setUrl(`${petUrl}`).setMetod("POST").setData(petBody).send();
}

export const deletePet = async (id) =>{
    const request = new ApiManager();
    return await request.setUrl(`${petUrl}${id}`).setMetod("DELETE").send();
}
