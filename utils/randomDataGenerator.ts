import { faker } from '@faker-js/faker';

export class randomUtil{
    static getFirstname(){
        return faker.person.firstName();
    }
    
    static getLastname(){
        return faker.person.lastName();
    }

    static getFullname(){
        return faker.person.fullName();
    }

    static getemail(){
        return faker.internet.email();
    }

    static getphoneno(){
        return faker.phone.number();
    }

    static getUserName():string{
        return faker.internet.username();
    }

    static getPassword():string{
        return faker.internet.password();
    }

    static getRandomState():string{
        return faker.location.state();
    }

    static getRandomCountry():string{
        return faker.location.country();
    }

    static getRandomCity():string{
        return faker.location.city();
    }

    static getRandomPin():string{
        return faker.location.zipCode();
    }

    static getRandomAddress():string{
        return faker.location.streetAddress();
    }

    static getRandompassword(length : number = 10):string {
        return faker.internet.password({length});
    }

    static getRandomAlphaNumeric(length:number):string{
        return faker.string.alphanumeric({length});
    }

    static getRandomNumeric(length :number):string{
        return faker.string.numeric({length});
    }

    static getRandomuuid():string{
        return faker.string.uuid();
    }

}