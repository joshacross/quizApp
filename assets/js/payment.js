// PeriodicPaymentAmount = LoanAmount*(PeriodicInterestRate/100)/(1-(1+PeriodicInterestRate/100)-NumberOfPeriods)

// loanAmount = (periodicInterestRate/100)/1-1+PeriodicInterestRate/100)-360)


let calculation = (rent) => { 
     ((0.0575/100)/(1-(1*(0.0575/100)-360)))/rent;
}

console.log(calculation (3000));