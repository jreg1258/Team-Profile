const Manager = require("./Employee")
const Engineer = require("./Engineer")
const Intern = require("./Intern")
const fs = require("fs")


module.exports = {
    detectRole(newMember){
        const member = newMember
        return member.title
    },
    html(name, position, email, info){
const newHTML = 
`<div class="card bg-warning text-muted text-center p-3" id="card">
<blockquote class="blockquote mb-0">
<h1 class="mb-0">${(name)}</h1>
<h2 class="p-1"><cite>${(position)}</cite></h2>
<div class="card-body mx-auto bg-info">
<h4>${(email)}</h4>
<p class="text-muted">${(info)}</p>
</blockquote>
</div>`

return newHTML
    },
    createCard(newMember){
        const member = newMember
        
         const newHtml = this.html(member.name, member.title, member.email, member.info)
         console.log(newHtml)
         return newHtml
    }
}
