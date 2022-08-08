import { userUrl } from "../apiData";
import { ApiManager } from "../apiManager"


export const findUserByName = async (name) =>{
    const request = new ApiManager();
    return await request.setUrl(`${userUrl}${name}`).setMetod("GET").send();
}

export const createUser = async (userBody) =>{
    const request = new ApiManager();
    return await request.setUrl(`${userUrl}`).setMetod("POST").setData(userBody).send();
}

export const deleteUser = async (name) =>{
    const request = new ApiManager();
    return await request.setUrl(`${userUrl}${name}`).setMetod("DELETE").send();
}
