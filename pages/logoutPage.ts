import {Page , Locator } from '@playwright/test'
import { Homepage } from './homePage'


export class LogoutPage{
private readonly page : Page;
private readonly btnContinue :Locator;

constructor(page:Page){
    this.page = page;
    this.btnContinue = page.getByRole('link', { name: 'Continue' });
}

async clickContinue():Promise<Homepage>{
    await this.btnContinue.click();
    return new Homepage(this.page);
}

async isContinueButtonVisible(): Promise<boolean>{
    return await this.btnContinue.isVisible();
}

 }