export const baseUrl = 'https://petstore.swagger.io/v2/';
export const petUrl = baseUrl + 'pet/';


export const storeOderUrl = baseUrl + 'store/order/';

export const userUrl = baseUrl + 'user/';


//export const id = 5028;
//export const id = 7016;


export function getPetBody(id){
  return {
    "id": id,
    "category": {
      "id": 500101,
      "name": "dog"
    },
    "name": "Rex",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 502101,
        "name": "taksa"
      }
    ],
    "status": "available"
  }
}


export function getOrderBody(id, petId){
  return {
    "id": id,
    "petId": petId,
    "quantity": 0,
    "shipDate": "2022-07-26T09:07:40.165Z",
    "status": "placed",
    "complete": true
  }
}


export function getUserBody(name){
  return {
    "id": 14253,
    "username": name,
    "firstName": "Ivan",
    "lastName": "Shevchenko",
    "email": "shevIvan_09@gmail.com",
    "password": "stringShevchenko",
    "phone": "stringShevchenko",
    "userStatus": 0
  }
}