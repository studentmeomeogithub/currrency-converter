#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 10000//balance
let mypin = 3000 // pincode

let pinCode = await inquirer.prompt([{
    name:"pin",
    type:"number",
    message:"Enter your pin"
}]);

if(pinCode.pin === mypin ){
    console.log("Correct pin code proceed further")
    let operationAns = await inquirer.prompt([{
        name:"operation",
        type:"list",
        choices:["Widhdraw","Check balace"],
        message:"Please select your one option"

    }])
    if(operationAns.operation = "Widhdraw"){
        let amountAns = await inquirer.prompt([{
            name:"amount",
            message:"Enter your amount",
            type:"number"
        }])
        myBalance -= amountAns.amount;
        console.log("Your remaining amout is :" + myBalance )
    }else if(operationAns == "Check balace"){
        console.log(myBalance)
    }
    
}
