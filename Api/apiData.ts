export const baseUrl = 'https://petstore.swagger.io/v2/';
export const petUrl = baseUrl + 'pet/';

//export const id = 5028;
export const id = 7015;


export const petBody = {
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

/*
export const petBodyEdit = {
    "id": id,
    "name": "Bolto123",

  }
*/

  export const petBodyEdit = {
    "id": id,
    "category": {
      "id": 500101,
      "name": "dog"
    },
    "name": "Bolto",
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
  

