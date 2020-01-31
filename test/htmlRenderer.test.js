const htmlRender = require("../lib/htmlRenderer")
const Manager = require("../lib/Manager")
const Engineer = require("../lib/Engineer")
const Intern = require("../lib/Intern")
const fs = require("fs")
const path = require("path")

jest.spyOn(console, "log")


describe("Render HTML", ()=>{
    const e = new Intern("Joey", 1010, "joey@email.com", "Harvard")
    const newHtml = htmlRender.html(e.name, e.title, e.email, e.info)
    const readFile = fs.readFile("../teaml.html")

    test("Detects role of new team member", () => {
        expect(htmlRender.detectRole(e)).toEqual("Intern")
        })
    test("Check HTML generation", ()=>{
        expect(newHtml).toEqual(
`<div class="card bg-warning text-muted text-center p-3" id="card">
<blockquote class="blockquote mb-0">
<h1 class="mb-0">Joey</h1>
<h2 class="p-1"><cite>Intern</cite></h2>
<div class="card-body mx-auto bg-info">
<h4>joey@email.com</h4>
<p class="text-muted">Harvard</p>
</blockquote>
</div>
</div>
</div>`)
    })
    test("Place team member info into team", ()=>{
        expect(fs.readFile("../team.html", function(err,data){
            return data
        })).toEqual(console.log(
`<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<link rel="stylesheet" href="./style.css">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Document</title>
</head>
<body>
<div class="card-columns">
<div class="card bg-warning text-muted text-center p-3" id="card">
<blockquote class="blockquote mb-0">
<h1 class="mb-0">Joey</h1>
<h2 class="p-1"><cite>Intern</cite></h2>
<div class="card-body mx-auto bg-info">
<h4>joey@email.com</h4>
<p class="text-muted">Harvard</p>
</blockquote>
</div>
</div>
</div>`)
    )
    })
})
