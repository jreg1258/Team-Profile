const Intern = require("../lib/Intern")

describe("New Intern contains school, and title is Intern", ()=>{
    const e = new Intern("joey", 1010, "joey@email.com", "boulevard")

    test("Return school",()=>{
        expect(e.getSchool()).toEqual("boulevard")
    })
    test("Return Role", ()=>{
        expect(e.getRole()).toEqual("Intern")
    })
})