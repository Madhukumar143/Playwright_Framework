import {Page , expect , Locator} from '@playwright/test'


export class RegisterPage {

        private readonly page : Page;

        //Locators
        private readonly txtfirstname : Locator;
        private readonly txtlastname : Locator;
        private readonly txtemail : Locator;
        private readonly txttelephone : Locator;
        private readonly txtpasswrd : Locator;
        private readonly txtcnfpasswrd : Locator;
        private readonly checkedpolicy : Locator;
        private readonly buttoncontinue : Locator;
        private readonly msgconfirmation : Locator;


        //constructor

        constructor(page:Page) {
            this.page = page;
            this.txtfirstname= page.locator("#input-firstname")
            this.txtlastname= page.locator("#input-lastname")
            this.txtemail= page.locator('input[type="email"]')
            this.txtpasswrd= page.locator('input[name="password"]')
            this.txtcnfpasswrd= page.locator('input[name="confirm"]')
            this.txttelephone= page.locator('input[type="tel"]')
            this.checkedpolicy= page.locator("//input[@name='agree']")
            this.buttoncontinue= page.locator("//input[@value='Continue']")
            this.msgconfirmation= page.locator("//h1[normalize-space()='Your Account Has Been Created!']")
        }

        //Action Methods
        async fillfirstname(fname : string): Promise<void>{
            await this.txtfirstname.fill(fname);
        }

        async filllastname(lname : string): Promise<void>{
            await this.txtlastname.fill(lname);
        }

        async fillemail(email : string): Promise<void>{
            await this.txtemail.fill(email);
        }

        async filltelenum(phonenum : string): Promise<void>{
           await  this.txttelephone.fill(phonenum);
        }

        async fillpassword(password : string): Promise<void>{
            await this.txtpasswrd.fill(password);
        }

        async fillconfirmpassword(cnfpasswrd : string): Promise<void>{
            await this.txtcnfpasswrd.fill(cnfpasswrd);
        }

        async checkprivacypolicy(): Promise<void>{
            await this.checkedpolicy.click();
        };

        async clickoncontinue(): Promise<void>{
            await this.buttoncontinue.click();
        }

        async registerconfirmation (){
            if (await this.msgconfirmation.textContent() == "Your Account Has Been Created!"){
                return true;      
            }
            else{
                 return false;
            }
        }

        async completeregistration(userData:{
            firstName:string;
            lastName:string;
            email:string;
            telephone : string;
            password:string;
            cnfpassword:string;
        }):Promise<void>{
            await this.fillfirstname(userData.firstName);
            await this.fillfirstname(userData.lastName);
            await this.fillfirstname(userData.email);
            await this.fillfirstname(userData.telephone);
            await this.fillfirstname(userData.password);
            await this.fillfirstname(userData.cnfpassword);
            await this.checkprivacypolicy();
            await this.clickoncontinue();
        }
}