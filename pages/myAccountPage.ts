import {Page , Locator ,expect} from '@playwright/test'
import { LogoutPage } from './logoutPage'

export class MyAccountPage{
    private readonly page : Page;

    private readonly msgHeading : Locator;
    private readonly lnkLogout : Locator;

    constructor (page:Page){
        this.page = page;

        this.msgHeading = page.locator('h2:has-text("My Account")');
        this.lnkLogout = page.locator('a').filter({ hasText: 'Logout' }).last()

    }

    async isMyAccountPageExists():Promise<boolean>{
        try{
            const isvisible = await this.msgHeading.isVisible();
            return isvisible;
        }
        catch(error){
            console.log(`error checking my account page heading visibility : ${error}`);
            return false;
        }
    }

    async clickLogout():Promise<LogoutPage>{
        try{
            await this.lnkLogout.click();
            return new LogoutPage(this.page);
        }
        catch(error){
            console.log(`unable to click logout link : ${error}`);
            throw error;
        }
    }
    async getPageTitle():Promise<string>{
        return (await this.page.title());
    }


}
