import {test,expect} from "@playwright/test"

const Base_Url = "https://restful-booker.herokuapp.com"
test("Create Book Request",async({request})=>{
//Static Data
const request_body = {
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}


let response = await request.post(`${Base_Url}/booking`,{data:request_body})

let response_body = await response.json();


// Verify status code

expect(response.status()).toBe(200)
expect(response.statusText()).toBe("OK")


expect(response_body).toHaveProperty("bookingid")
expect(response_body).toHaveProperty("booking")
expect(response_body.bookingid).toEqual(expect.any(Number))

expect(response_body.booking).toMatchObject(request_body)
})