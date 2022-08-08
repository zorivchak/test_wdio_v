import { storeOderUrl, petUrl } from "../apiData";
import { ApiManager } from "../apiManager"






export const findOrderById = async (id) =>{
    const request = new ApiManager();
    return await request.setUrl(`${storeOderUrl}${id}`).setMetod("GET").send();
}

export const createOrder = async (orderBody) =>{
    const request = new ApiManager();
    return await request.setUrl(`${storeOderUrl}`).setMetod("POST").setData(orderBody).send();
}

export const deleteOrder = async (id) =>{
    const request = new ApiManager();
    return await request.setUrl(`${storeOderUrl}${id}`).setMetod("DELETE").send();
}