const fs = require('fs')
//const { argv } = require('yargs');
const yargs = require('yargs');
readFileData = function(){
    try{
        data = fs.readFileSync('customers.json')
        if(data.toString().length==0) throw new Error('errrr')
        data = JSON.parse(data.toString())
        if(!Array.isArray(data)) throw new Error('')
    }
    catch(e){
        data = []
        fs.writeFileSync('customers.json', "[]")
    }
    return data    
}
showAllData = function(){
    data = readFileData()
    if(data.length>0) console.table(data);
    else console.log("no notes found")
}
addData = function (customer) {
    data = readFileSync()
    data.push(customer)
    fs.writeFileSync('customers.json', json.stringFy(data))
}
showSingleNote = function(title){
    data = readFileData()
    result = data.find(element=>{
        return element.title == title
    })
    if(!result) console.log("not found")
    else console.table(result)
}

yargs.command({
    command: "addCustomer",
    builder: {
        name: {
            describe: 'omnia',
            type: 'string',
            demandOption: true
        },
        balance: {
            describe: 'balance',
            type: 'number',
            demandOption: true
        },
        accNumb: {
            describe: 'accountNmber',
            type: 'string',
            demandOption: true
        },
    },
    handler: function (argv) {
       // console.log(`${argv.name} ${argv.balance} ${argv.accNumb}`);
         newCustomer = {
            name: argv.name,
            balance: argv.balance,
            accNumb: argv.accNumb,
        }
        showSingleNote(argv.title)
        showAllData()
        addData(newCustomer) 
    }

    }),


    yargs.argv
 
 
