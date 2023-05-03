
const yargs = require("yargs")
const data5 = require ("./data5")

// Add Data

yargs.command({
    command:"add",
    describe:"to add",
    builder:{
        fname:{
            describe:"first name",
            demandOption:true,
            type:"string",
        },
        lname:{
            describe:"last name",
            type:"string",
        }
    },
    handler:(person)=>{
        data5.addperson(person.id,person.fname,person.lname,person.age,person.city)
    }
})
yargs.parse()


// Delete Data

yargs.command({
    command:"delete",
    describe:"to delete the item",  
    handler:(person)=>{
        data5.deletedData(person.id)
    }
})
console.log(yargs.argv)


// Read Data


yargs.command({
    command:"read",
    describe:"to read the item",  
    builder:{
        id:{
            describe:"read the item",
            demandOption:true,
            type:"string",
        }     
    },
    handler:(person) => {
        data5.readData(person.id)
    }
})
console.log(yargs.argv)


// List Data


yargs.command({
    command:"list",
    describe:"to list items",  
    handler:() => {
        data5.listData()
    }
})
console.log(yargs.argv)