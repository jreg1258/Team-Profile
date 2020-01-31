const Manager = require("../lib/Manager")

describe("New Manager contains office number, and title is Manager", ()=>{
    const e = new Manager("joey", 1010, "joey@email.com", "14510b")

    test("Return office number",()=>{
        expect(e.getOffice()).toEqual("14510b")
    })
    test("Return Role", ()=>{
        expect(e.getRole()).toEqual("Manager")
    })
})