const Employee = require("../lib/Employee")


describe("Create an object, using the Employee class",() => {
    const e = new Employee("Joey", 1010, "joey@email.com")
    expect(typeof(e)).toBe("object")

    test("Get name from Employee", ()=>{
        expect(e.getName()).toEqual("Joey")
    })

    test("Get id from Employee", ()=>{
        expect(e.getID()).toEqual(1010)
    })

    test("Get role from Employee", ()=>{
        expect(e.getRole()).toEqual("Employee")
    })
    test("Get email from Employee", ()=>{
        expect(e.getEmail()).toEqual("joey@email.com")
    })
})



