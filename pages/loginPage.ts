import { Page,Locator } from "@playwright/test";
import { MyAccountPage } from "./myAccountPage";

export class LoginPage{
    private readonly page : Page;

    private readonly txtEmailAddress : Locator;
    private readonly txtPassword : Locator;
    private readonly btnLogin : Locator;
    private readonly txtErrorMessage : Locator;

    constructor (page:Page){
        this.page = page;

        this .txtEmailAddress = page.getByLabel('E-Mail Address');
        this.txtPassword = page.getByLabel('Password');
        this.btnLogin = page.locator("//input[@value='Login']");
        this.txtErrorMessage = page.getByText('Warning: No match for E-Mail Address and/or Password.')

    }

    async setEmail(email:string){
        await this.txtEmailAddress.fill(email);
    }

    async setPassword(password:string){
        await this.txtPassword.fill(password)
    }

    async clickLogin(){
        await this.btnLogin.click();
        //return new MyAccountPage(this.page)
    }

    async login(email:string ,password:string){
        await this.setEmail(email);
        await this.setPassword(password);
        await this.clickLogin();
    }

    async getLoginErrorMessage():Promise<null|string>{
        return (this.txtErrorMessage.textContent());
    }
}