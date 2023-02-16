const prompt = require('prompt-sync')({sigint: true})

let tdl = [];
let tdlC = [];
console.log()
console.log(`=================================`)
console.log()
console.log(`Welcome to the To-Do List Manager`)
console.log()
console.log(`~ Select an action ~`)
console.log(`[1] Create a to-do item`)
console.log(`[2] Complete a to-do item`)
console.log(`[3] Exit`)

let pr = prompt(`> `)

while(pr !== "3") {
    if (pr === "1") {
        console.log()
        console.log ("Name a to-do item:")
        let create = prompt(`> `)
        tdl.push(create)
    } else if (pr === "2" && tdl.length === 0) {
        console.log()
        console.log("You have nothing to complete!")    
    } else if (pr === "2" && tdl.length > 0) {
        console.log()
        console.log("Select a to-do item to complete:")
        for (let i = 0; i < tdl.length; i++) {
            console.log(i+1 + `. [Incomplete] ` + tdl[i])
        } 
        let item = Number(prompt(`> `))
        while (item <= 0 || item > tdl.length) {
            console.log("What? Try again")
            item = Number(prompt(`> `))
        }
        tdlC = tdlC.concat(tdl.splice(item-1,1))
            console.log()
        for (let i = 0; i < tdlC.length; i++) {
            console.log(i+1 + `. [Completed] ` + tdlC[i])    
        }    
    } else {
        console.log()
        console.log("Invalid choice!")
    }
    console.log()
    console.log(`=================================`)    
if (tdl.length === 0) {
    console.log()
    console.log('Your to-do list is empty.')
} else {
    console.log()
    console.log('You have ' + String(tdl.length) + ' to-do item(s).')
    for(let i = 0; i < tdl.length; i++){
    console.log(i+1 + `. [Incomplete] ` + tdl[i])
    }
    for(let i = tdl.length; i < (tdl.length + tdlC.length); i++)
    console.log(i+1 + `. [Completed] ` + tdlC[i-tdl.length])
}
console.log()
console.log(`~ Select an action ~`)
console.log(`[1] Create a to-do item`)
console.log(`[2] Complete a to-do item`)
console.log(`[3] Exit`)
pr = prompt(`> `)
console.log()    
}

console.log(`Exiting`)
