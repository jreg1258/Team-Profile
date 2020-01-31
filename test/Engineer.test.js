const Engineer = require("../lib/Engineer")

describe("New Engineer contains github and title is Engineer", ()=>{
    const e = new Engineer("joey", 1010, "joey@email.com", "jreg1258")

    test("Return github",()=>{
        expect(e.getGitHub()).toEqual("jreg1258")
    })
    test("Return Role", ()=>{
        expect(e.getRole()).toEqual("Engineer")
    })
})