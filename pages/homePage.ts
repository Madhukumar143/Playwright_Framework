import { Page,expect, Locator } from '@playwright/test';

export class Homepage{

    private readonly page: Page;

    //locators
    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister : Locator;
    private readonly lnkLogin : Locator;
    private readonly textSearchBox : Locator;
    private readonly buttonSearch : Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.lnkMyAccount = page.locator('span').filter({ hasText: 'My Account' })
        this.lnkRegister = page.locator('a').filter({ hasText: 'Register' }).first()
        this.lnkLogin = page.locator('a').filter({ hasText: 'Login' }).first()
        this.textSearchBox = page.getByRole('textbox', { name: 'Search' })
        this.buttonSearch = page.locator('i.fa.fa-search')
    }


    //Action methods
    async isHomepageExists() {
        let title : string = await this.page.title();
        if (title === "Your Store") {
            return true;
            }
        else{
        return false;
            }
        }

   //click on my account
   async ClickmyAccount(){
    try {
        await this.lnkMyAccount.click();
    }
    catch(error){
        console.log("Exception occured while clicking My account",`${error}`);
        throw error;
    }
   }


   //Click Login
   async ClickLogin(){
    try {
        await this.lnkLogin.click();
    }
    catch(error){
        console.log("Exception occured while clicking Login",`${error}`);
        throw error;
    }
   }

   //Click Register
   async ClickRegister(){
    try {
        await this.lnkRegister.click();
    }
    catch(error){
        console.log("Exception occured while clicking  Register",`${error}`);
        throw error;
    }
   }

   //Enter productname in searchbox


   async Searchforproduct(pName:string){
    try {
        await this.textSearchBox.fill(pName);
    }
    catch(error){
        console.log("Exception occured while Searching for product",`${error}`);
        throw error;
    }
   }

    //Click SearchButton
    async ClickSearchButton(){
    try {
        await this.buttonSearch.click();
    }
    catch(error){
        console.log("Exception occured while clicking searchbutton",`${error}`);
        throw error;
    }
   }   
}