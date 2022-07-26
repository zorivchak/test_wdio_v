import Page from  '../../UI/pageobjects/page/page';
import LoginPage from '../../UI/pageobjects/loginPage/login.page';
import BmCreatePage from '../../UI/BusinessModels/bm.createPage';
import CreatePage from '../../UI/pageobjects/createPage/create.page';



import UserData from './userdata';



import { ApiManager } from '../../Api/apiManager';
import { findPetById, createPet, deletePet } from '../../Api/controlers/petController';
import { findOrderById, createOrder, deleteOrder } from '../../Api/controlers/orderController';
import { findUserByName, createUser, deleteUser } from '../../Api/controlers/userController';
import { getPetBody, getOrderBody, getUserBody } from '../../Api/apiData';

const id: number = 70165;



describe('TEST API. PET', () => {

    

    it('PET. Test 1: Add new pet on the story.', async () => {
        const resp = await createPet(getPetBody(id));
        console.log(resp.data);
    });
    
    it('PET. Test 2: Search by ID.', async () => {
        const resp = await findPetById(id);
        console.log("resp.status: " + resp.status);
    });

    it('PET. Test 3: Delete.', async () => {
        const resp = await deletePet(id);
    });

});



describe('TEST API. ORDER', () => {

    const ordId: number = 2;

    it('STORE. Test 1: Add new pet on the story.', async () => {
        const resp = await createOrder(getOrderBody(ordId, id));
        console.log(resp.data);
    });

    it('STORE. Test 2: Search by ID.', async () => {
        const resp = await findOrderById(ordId);
        console.log("resp.status: " + resp.status);
    });

    it('STORE. Test 3: Delete.', async () => {
        const resp = await deleteOrder(ordId);
    });

});






describe('TEST API. USER', () => {

    const userName: string = "MyUsername1";

    it('USER. Test 1: Add new pet on the story.', async () => {
        const resp = await createUser(getUserBody(userName));
        console.log(resp.data);
    });

    it('USER. Test 2: Search by Name.', async () => {
        const resp = await findUserByName(userName);
        console.log("resp.status: " + resp.status);
    });

    it('USER. Test 3: Delete.', async () => {
        const resp = await deleteUser(userName);
    });

});












