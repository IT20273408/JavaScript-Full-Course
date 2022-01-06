//Logical AND (&&)
//console.log(true && true);
//console.log(false && true);

/*let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan  = highIncome && goodCreditScore;

console.log(eligibleForLoan);*/

//Logical OR (||)
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan  = highIncome || goodCreditScore;
console.log('Eligable',eligibleForLoan);


//NOT(!)
let applicationRefused = ! eligibleForLoan;
console.log('Application Refused', applicationRefused);

