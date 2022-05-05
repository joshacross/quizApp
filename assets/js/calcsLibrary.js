/*~~~~~~~~~~~~~~~~~~~~~~~Table of Contents ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Itemized for quick search using commented points with #





~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/



/***************************************************
*  IF YOU ARE ADDING A NEW FUNCTION PLEASE ADD IT TO 
*  THE MODULE AT THE BOTTOM AND INCLUDE IT IN THE RETURN
***************************************************/

var averageGap = 2; //current "average ARM rate scenario"

//Core Mortgage Calculations, one for month and the other for years
function mortgagePayment(amount, yearRateInPercent, years) {
    return calcsLib.mortgagePayment(amount, yearRateInPercent, years);
}

function mortgageMonthPay(balance, annualRate, months) {
    return calcsLib.mortgageMonthPay(balance, annualRate, months);
}
//arm Scenarios setup
function armWorstCase(rate, initial, annual, lifetime, startYr) {
    return calcsLib.armWorstCase(rate, initial, annual, lifetime, startYr)
} //returns an Array of 13 for a worst case scenario ARM +++

function armAverageScenario(rate, initial, annual, lifetime, startYr) {
    return calcsLib.armAverageScenario(rate, initial, annual, lifetime, startYr);
}  //returns an Array of 13 for the average case scenario ARM +++

function armCustom(rate, startYr, customArray) {
    return calcsLib.armCustom(rate, startYr, customArray);
}  //returns an Array of 13 for a custom ARM+++

//arm Rate retrieval
function rateAtYear(rateArray, yr) {
    return calcsLib.rateAtYear(rateArray, yr);
}//returns annual rate at year "yr"

function rateAtMonth(rateArray, month) {
    return calcsLib.rateAtMonth(rateArray, month);
} //returns annual rate at month "month"

//interest and principal targeting
function interestOfPayment(balance, rateArray, term, selectedMonth) {
    return calcsLib.interestOfPayment(balance, rateArray, term, selectedMonth);
}

function principalOfPayment(balance, rateArray, term, selectedMonth) {
    return calcsLib.principalOfPayment(balance, rateArray, term, selectedMonth)
}

function totalInterestPaidAtMonth(balance, rateArray, term, selectedMonth) {
    return calcsLib.totalInterestPaidAtMonth(balance, rateArray, term, selectedMonth);
}

function totalPrincipalPaidAtMonth(balance, rateArray, term, selectedMonth) {
    return calcsLib.totalPrincipalPaidAtMonth(balance, rateArray, term, selectedMonth)
}

//calculates a payment for a fixed rate
function balanceOfAdjAtMonth(balance, rateArray, term, selectedMonth) {
    return calcsLib.balanceOfAdjAtMonth(balance, rateArray, term, selectedMonth);
}

function monthlyPaymentAt(balance, rateArray, term, selectedMonth) {
    return calcsLib.monthlyPaymentAt(balance, rateArray, term, selectedMonth);
}
//AMORTIZATION FUNCTIONS
function amortLoan(amt, rate, term, optPrinPay, lumpObj, payPerYer, payReturn, numPayStart, total, termOffset) {
    return calcsLib.amortLoan(amt, rate, term, optPrinPay, lumpObj, payPerYer, payReturn, numPayStart, total, termOffset);
}

function amortBuildArm(amt, rateArray, term, optPrinPay, lumpObj, startYr) {
    return calcsLib.amortBuildArm(amt, rateArray, term, optPrinPay, lumpObj, startYr);
}

function amortTable(data, startPrin, startInt) {
    return calcsLib.amortTable(data, startPrin, startInt);
}

function amortDiffTable(d1, d2, prop) {
    return calcsLib.amortDiffTable(d1, d2, prop);
}
//AMORTIZATION FUNCTIONS - END

//FIX VAL AND COMMA FUNCTIONS
function fixVal(value, numberOfCharacters, numberOfDecimals, padCharacter) {
    return calcsLib.fixVal(value, numberOfCharacters, numberOfDecimals, padCharacter);
}

function commaSeparateNumber(val) {
    return calcsLib.commaSeparateNumber(val);
}

// DO THESE BELONG HERE?
//Down Pay Popover Creation
function downPayPop(el, opt, price, array, isDown, popDiv, tbDiv) {
    return calcsLib.downPayPop(el, opt, price, array, isDown, popDiv, tbDiv);
}

function showDownPayPop(el, div, pop) {
    return calcsLib.showDownPayPop(el, div, pop);
}
//////////////////////////////////////////////////////////EXPERIMENTAL
function fixedBalanceAtMonth(startingLoanAmt, monthlyPmt, annualRate, pmtsMade) {
    return calcsLib.fixedBalanceAtMonth(startingLoanAmt, monthlyPmt, annualRate, pmtsMade);
}

function armBalanceAtMonth(startingLoanAmt, monthlyPmt, rateArray, pmtsMade, yearOfAdj) {
    return calcsLib.armBalanceAtMonth(startingLoanAmt, monthlyPmt, rateArray, pmtsMade, yearOfAdj);
}

function apprGovernor(price, appr, i, pow) {
    return calcsLib.apprGovernor(price, appr, i, pow);
}

function getMonthsPaid(month, year) {
    return calcsLib.getMonthsPaid(month, year);
}

function calcHistApprMonth(array, monthNum, yrBought, months, price, apprTier) {
    return calcsLib.calcHistApprMonth(array, monthNum, yrBought, months, price, apprTier);
}

function makeFirstOfMonth(date) {
    return calcsLib.makeFirstOfMonth(date);
}

function mortgageInsuranceAnalysis(basePrice, loanAmount, loanRatesAsArray, loanTerm, adjusmentYear, loanProgram, mortInsurancePaymentPerPeriod, ltvCutoffInPercent) {
    return calcsLib.mortgageInsuranceAnalysis(basePrice, loanAmount, loanRatesAsArray, loanTerm, adjusmentYear, loanProgram, mortInsurancePaymentPerPeriod, ltvCutoffInPercent);
}

function calcTaxBenefit(obj) {
    return calcsLib.calcTaxBenefit(obj);
}
// ** NOT BEING USED CURRENTLY
//function ipmt(rate, per, nper, pv, fv, type) {
//    return calcsLib.ipmt(rate, per, nper, pv, fv, type);
//}

function calcTaxDeductionsFromLoan(loanAmount, interestPaid, annualPropertyTax, taxRateInPercent, interestRateInPercent, customCap) {
    return calcsLib.calcTaxDeductionsFromLoan(loanAmount, interestPaid, annualPropertyTax, taxRateInPercent, interestRateInPercent, customCap);
}

function interestPaidForYear(loanAmount, loanRate, loanTerm, yearOf, loanType) {
    return calcsLib.interestPaidForYear(loanAmount, loanRate, loanTerm, yearOf, loanType);
}

function urlWithValues(baseUrlString, loanAmount, rateAsPercent, termInYears) {
    return calcsLib.urlWithValues(baseUrlString, loanAmount, rateAsPercent, termInYears);
}


/*********************************************************
*                   Calcs Library Module.
*                    -------------------
*   Using this module moving forward. 
*   All functions are accessible via: calcsLib.functionName
*********************************************************/

var calcsLib = (function () {
    var averageGap = 2;

    function mortgagePayment(amount, yearRateInPercent, years) {
        var calcNumberOfPayments = years * 12;
        var monthlyPayment = mortgageMonthPay(amount, yearRateInPercent, calcNumberOfPayments)
        return monthlyPayment;
    }

    function mortgageMonthPay(balance, annualRate, months) {
        var result = 0;
        var pmts = months;
        var monthlyRateInDec = annualRate / 1200;
        if (annualRate != 0) {
            var topEq = monthlyRateInDec * Math.pow((1 + monthlyRateInDec), pmts);
            var botEq = Math.pow((1 + monthlyRateInDec), pmts) - 1;
            result = balance * (topEq / botEq);
        }
        else {
            result = balance / months;
        }
        return result;
    }

    function loanAmtFromPayment(monthPay, annualRate, term, arrPerRates) {
        arrPerRates = arrPerRates || [];
        var reduced = arrPerRates.length > 0 ? arrPerRates.reduce(function (total, num) { return total + num }) : 0;        
        var a1 = (1 - Math.pow(1 + annualRate / 1200, - (12 * term))) / (annualRate / 1200);
        var modsPerYear = reduced / 12;       
        var loanAmt = (monthPay * a1) / (1 + (modsPerYear * a1));        
        return loanAmt;
    }

    //arm Scenarios setup
    function armWorstCase(rate, initial, annual, lifetime, startYr) {
        var startRate = rate;
        var rateArray = [];
        var firstInc = initial;
        var yearCap = annual;
        var lifeCap = lifetime;
        var startYear = startYr;
        var maxRate = parseFloat(lifeCap) + parseFloat(startRate);
        //new        
        var endYrAdj = (startYear < 15) ? 13 : 20;
        if (startYear == 21 || startYear == 321) {
            startYear = 1;
        }
        for (i = 0; i < startYear; i++) {
            rateArray.push(startRate);
        }

        if ((startRate + firstInc) >= maxRate) {
            while (rateArray.length < endYrAdj) {
                rateArray.push(maxRate);
            }
            return rateArray;
        } else {
             rateArray.push(startRate + firstInc);
        }
        var arrayLength = rateArray.length;
        var remainingYears = endYrAdj - arrayLength;
        var lastRate = rateArray[arrayLength - 1]

        for (j = 0; j < remainingYears; j++) {
            if ((lastRate + yearCap) > maxRate) {
                rateArray.push(maxRate);
                lastRate = maxRate;
            }
            else {
                lastRate = lastRate + yearCap;
                rateArray.push(lastRate);
            }
        }
        return rateArray;
    } //returns an Array of 13 for a worst case scenario ARM +++
    function armAverageScenario(rate, initial, annual, lifetime, startYr) {
        var startRate = rate;
        var rateArray = [];
        var firstInc = initial;
        var yearCap = annual;
        var lifeCap = lifetime;
        var startYear = startYr;
        //new
        var endYrAdj = (startYear < 15) ? 13 : 20;

        var maxRate = startRate + averageGap;


        for (i = 0; i < startYear; i++) {
            rateArray.push(startRate);
        }

        if ((startRate + firstInc) >= maxRate) {
            while (rateArray.length < endYrAdj) {
                rateArray.push(maxRate);
            }
            return rateArray;
        } else {
            rateArray.push(startRate + firstInc);
        }

        var arrayLength = rateArray.length;
        var remainingYears = endYrAdj - arrayLength;
        var lastRate = rateArray[arrayLength - 1]

        for (j = 0; j < remainingYears; j++) {
            if ((lastRate + yearCap) > maxRate) {
                rateArray.push(maxRate);
                lastRate = maxRate;
            }
            else {
                lastRate = lastRate + yearCap;
                rateArray.push(lastRate);
            }
        }
        return rateArray;

    }  //returns an Array of 13 for the average case scenario ARM +++
    function armCustom(rate, startYr, customArray) {

        var startRate = rate;
        var rateArray = [];
        var customRates = customArray;
        var startYear = startYr;

        for (i = 0; i < startYear; i++) {
            rateArray.push(startRate);
        }

        rateArray = rateArray.concat(customRates);
        return rateArray;
    }  //returns an Array of 13 for a custom ARM+++
    //arm Rate retrieval
    function rateAtYear(rateArray, yr) {

        var aryL = rateArray.length;

        if (yr >= aryL) {
            return rateArray[aryL - 1]
        }

        return rateArray[yr];
    }//returns annual rate at year "yr"
    function rateAtMonth(rateArray, month) {
        var yr = Math.floor(month / 12);

        var aryL = rateArray.length;
        if (yr >= aryL) {
            var val = rateArray[aryL - 1];
            return val;
        }
        return rateArray[yr];
    } //returns annual rate at month "month"
    //interest and principal targeting
    function interestOfPayment(balance, rateArray, term, selectedMonth) {
        var bal = balanceOfAdjAtMonth(balance, rateArray, term, selectedMonth);
        var intr = rateAtMonth(rateArray, selectedMonth) / 1200

        return bal * intr;
    }
    function principalOfPayment(balance, rateArray, term, selectedMonth) {
        var pmt = monthlyPaymentAt(balance, rateArray, term, selectedMonth);
        var intr = interestOfPayment(balance, rateArray, term, selectedMonth);

        return pmt - intr;
    }
    function totalInterestPaidAtMonth(balance, rateArray, term, selectedMonth) {

        var sumOfInterest = 0;
        var yrsConverted = selectedMonth;
        for (zz = 0; zz < yrsConverted; zz++) {
            sumOfInterest += interestOfPayment(balance, rateArray, term, zz);
        }
        return sumOfInterest;
    }
    function totalPrincipalPaidAtMonth(balance, rateArray, term, selectedMonth) {

        var sumOfInterest = 0;
        var yrsConverted = selectedMonth;
        for (zz = 0; zz < yrsConverted; zz++) {
            sumOfInterest += principalOfPayment(balance, rateArray, term, zz);
        }
        return sumOfInterest;
    }
    //calculates a payment for a fixed rate
    function balanceOfAdjAtMonth(balance, rateArray, term, selectedMonth) {

        var loanTerm = term * 12;
        var bal = balance;
        for (monthZZ = 0; monthZZ < selectedMonth; monthZZ++) {
            var rt = rateAtMonth(rateArray, monthZZ);
            var pmt = mortgageMonthPay(bal, rt, loanTerm - monthZZ);
            bal = bal * (1 + (rt / 1200)) - pmt;
        }
        return bal;

    }
    function monthlyPaymentAt(balance, rateArray, term, selectedMonth) {
        var totalMonths = term * 12;
        var inMonth = selectedMonth;
        if (inMonth > totalMonths) {
            return 0;
        }
        var loanBal = balanceOfAdjAtMonth(balance, rateArray, term, selectedMonth);
        var timeLeft = totalMonths - inMonth;
        var loanRt = rateAtMonth(rateArray, inMonth);
        var mPay = mortgageMonthPay(loanBal, loanRt, timeLeft)
        return mPay;
    }

    //AMORTIZATION FUNCTIONS
  
    /**
     * @param {integer} amt - This is your loan amount.
     * @param {float} rate - This is the rate of your loan.
     * @param {integer} term - This is the term, in years, of your loan
     * @param {integer} optPrinPay - Add here if you would like to make additional principal payments per month. This will obviously shorten the loan length.
     * @param {object} lumpObj - Add here if you want to add a lump sum payment to your loan. { amt: payment, start: whichYear }
     * 
     * @param {integer} payReturn - seems to always be the term
     * @param {integer} numPayStart - doesnt look like we using the final two in app
     * @param {integer} total - doesnt look like we using the final two in app
     * */
    function amortLoan(amt, rate, term, optPrinPay, lumpObj, payPerYer, payReturn, numPayStart, total, termOffset) {
        //lumObj needs to have prop amount and paymentNum
        //checks if param isn't null || undefined, if it is, give it a value after the ||
        optPrinPay = optPrinPay || { amt: 0, start: 1 };
        termOffset = termOffset || 0;
        lumpObj = lumpObj || { amt: 0, start: 1 };
        payPerYer = payPerYer || 12;
        payReturn = payReturn || term;
        numPayStart = numPayStart || 1;
        total = total || 0;
        var full = [];
        var remain = Number(amt);
        var payTerm = payPerYer * Number(term);
        payTerm = payTerm - termOffset;

        var numPay = payTerm;

        var returnNow = (payPerYer * Number(payReturn)) - 1;
        var perRate = (rate / 100 / payPerYer);
        var payNum = numPayStart;
        var initAmt = remain;
        var payment = Number(((initAmt * perRate) / (1 - Math.pow((1 + perRate), -numPay))));
        var origPayment = payment;
        var lOpt = 0;
        var lLump = 0;

        for (var i = 0; i < numPay; i++) {
            var int = remain * perRate;
            var prin = (payment - int);

            lOpt = (payNum >= optPrinPay.start) ? optPrinPay.amt : 0;

            // WF only apply
            if (optPrinPay.end && payNum > optPrinPay.end) {
                lOpt = 0;
            }

            lLump = (payNum == lumpObj.start) ? lumpObj.amt : 0;

            prin = prin + lOpt + lLump;

            if (remain <= prin) {
                prin = remain;
                payment = remain + int - lOpt;
                total += remain + int;
            } else {
                total += prin + int;
            }

            remain -= prin;
            var yrObj = {
                principal: prin,
                interest: int,
                payment: payment + lOpt,//Math.round(prin) + Math.round(int),
                total: total,
                balance: remain,
                num: payNum,
                rate: rate
            };
            full.push(yrObj);
            payNum++;
            if (i == returnNow || remain <= 0) {
                if (remain < 0) {
                    full[full.length - 1].balance = 0;
                }
                break;
            }
        }
        var returnObj = {
            amort: full,
            details: [{
                amount: amt,
                rate: rate,
                term: term,
                apr: (calcsLib.calcAPR(amt, numPay, origPayment, 0, rate)).toFixed(3),
            }]
        };
        return returnObj;
    }

     /* @param {integer} - This is your loan amount.
     * @param {integer} rateArray - This an array of rates built depending from your ARM scenario. Three function build this array armWorstCase, armAverageScenario, armCustom
     * @param {integer} term - This is the term, in years, of your loan
     * @param {integer} optPrinPay - Add here if you would like to make additional principal payments per month. This will obviously shorten the loan length.
     * @param {object} lumpObj - Add here if you want to add a lump sum payment to your loan. { amt: payment, start: whichYear }
     * @param {integer} startYr - Pass in the type of ARM. If Loan is 7/1 ARM. Pass in 7;
     * */
    function amortBuildArm(amt, rateArray, term, optPrinPay, lumpObj, startYr) {
        optPrinPay = optPrinPay || { amt: 0, start: 1 };
        lumpObj = lumpObj || null;
        amt = parseFloat(amt);
        term = parseFloat(term);
        optPrinPay.amt = parseFloat(optPrinPay.amt);
        startYr = parseFloat(startYr);
        var startPrice = amt;
        var startTotal = 0;
        var startTerm = term;
        var startReturn = startYr;
        var startPay = 1;
        var newRate = rateArray.slice((startYr - 1), rateArray[rateArray.length]);
        var u = newRate;
        var l = u.length;
        var armSched = [];
        var endDet = [];
        for (var i = 0; i < l; i++) {
            var thisRate = u[i];
            var getAmort = amortLoan(startPrice, thisRate, startTerm, optPrinPay, lumpObj, 12, startReturn, startPay, startTotal);
            startPrice = getAmort.amort[getAmort.amort.length - 1].balance;
            startTotal = getAmort.amort[getAmort.amort.length - 1].total;
            startTerm = term - startYr;
            startReturn = 1;
            startPay = (getAmort.amort[getAmort.amort.length - 1].num) + 1;
            if (i == (l - 2)) {
                startReturn = startTerm;
            }
            startYr++;
            armSched = armSched.concat(getAmort.amort);
            endDet.push(getAmort.details[0]);
        }
        var returnObj = {
            amort: armSched,
            details: endDet
        };
        return returnObj;
    }

    // This uses a 6 month rate change. rateArray is expected to be length 5. 
    function amortBuildArmWF(amt, rateArray, term, optPrinPay, lumpObj, startYr) {
        optPrinPay = optPrinPay || { amt: 0, start: 1 };
        lumpObj = lumpObj || null;
        amt = parseFloat(amt);
        term = parseFloat(term);
        optPrinPay.amt = parseFloat(optPrinPay.amt);
        startYr = parseFloat(startYr);
        var startPrice = amt;
        var startTotal = 0;
        var startTerm = term;
        var startReturn = startYr;
        var startPay = 1;
        var u = rateArray;
        var l = u.length;
        var armSched = [];
        var endDet = [];
        for (var i = 0; i < l; i++) {
            var thisRate = u[i];
            var getAmort = amortLoan(startPrice, thisRate, startTerm, optPrinPay, lumpObj, 12, startReturn, startPay, startTotal);
            if (getAmort.amort.length > 0) {
                startPrice = getAmort.amort[getAmort.amort.length - 1].balance;
                startTotal = getAmort.amort[getAmort.amort.length - 1].total;
                startTerm = term - startYr;
                startReturn = 0.5;
                startPay = (getAmort.amort[getAmort.amort.length - 1].num) + 1;
                if (i == (l - 2)) {
                    startReturn = startTerm;
                }
                startYr+= 0.5;
                armSched = armSched.concat(getAmort.amort);
                endDet.push(getAmort.details[0]);
            }
        }
        var returnObj = {
            amort: armSched,
            details: endDet
        };
        return returnObj;
    }

    function amortTable(data, startPrin, startInt) {
        var tblBase = "<table class='altTable fullWidth'>";
        var tblHdrs1 = "<th class='text-center'>Payment</th><th class='text-center'>Interest</th><th class='text-center'>Principal</th><th class='text-center'>Balance</th>";
        var tblHdrs2 = "<th class='text-center'>Paid</th><th class='text-center'>Interest</th><th class='text-center'>Principal</th><th class='text-center'>Balance</th>";
        var tblMonth = tblBase + "<tr class='text-center'><th class='text-center'>Month</th>" + tblHdrs1 + "</tr>";
        var tblYear = tblBase + "<tr class='text-center'><th class='text-center'>Year</th>" + tblHdrs2 + "</tr>";
        var totalPrin = startPrin || 0;
        var totalInt = startInt || 0;
        var yrCheck = 0;
        var yrCount = (data[0].num - 1) / 12;
        for (var i = 0; i < data.length; i++) {
            var p = data[i].principal;
            var int = data[i].interest;
            var tot = data[i].total;
            var num = data[i].num;
            var bal = data[i].balance;
            var pay = data[i].payment;

            if (i === data.length - 1) {
                //On the last payment, you are only responsible for the previous month's balance. It is not the same as the principal when making additional payments
                totalPrin += data[i - 1].balance;
            } else {
                totalPrin += p;
            }
            totalInt += int;
            if (bal < 0) {
                bal = 0;
            }
            tblMonth += "<tr class='text-center'><td>" + num + "</td><td>$" + commaSeparateNumber(pay.toFixed(0)) + "</td><td>$" + commaSeparateNumber(int.toFixed(0)) + "</td><td>$" + commaSeparateNumber(p.toFixed(0)) + "</td><td>$" + commaSeparateNumber(bal.toFixed(0)) + "</td></tr>";
            yrCheck = num % 12;
            if (yrCheck == 0 || i == (data.length - 1)) {
                yrCount++;
                tblYear += "<tr class='text-center'><td>" + yrCount + "</td><td>$" + commaSeparateNumber(tot.toFixed(0)) + "</td><td>$" + commaSeparateNumber(totalInt.toFixed(0)) + "</td><td>$" + commaSeparateNumber(totalPrin.toFixed(0)) + "</td><td>$" + commaSeparateNumber(bal.toFixed(0)) + "</td></tr>";
            }
        }
        var tblReturn = {
            tblMonth: tblMonth,
            tblYear: tblYear
        };
        return tblReturn;
    }
    function amortDiffTable(d1, d2, prop) {
        prop = prop || "balance";
        var h1 = d1.length;
        var h2 = d2.length;
        //var diff = h1 - h2;
        var low = h1;
        if (h2 < h1) {
            //diff = h2 - h1;
            low = h2;
        }
        var tblBase = "<table class='altTable fullWidth'>";
        var tblHdr = "<tr><th><span class='capFirst'>" + prop + "</span> Diff.</th></tr>";
        var tblMonth = tblBase + tblHdr;
        var tblYear = tblBase + tblHdr;
        var yrCheck = 0;
        for (var i = 0; i < low; i++) {
            var e1 = d1[i][prop];
            var e2 = d2[i][prop];
            var num = d1[i].num;
            var curDiff = e1 - e2;
            var row = "<tr><td align='center'>$" + commaSeparateNumber(curDiff.toFixed(0)) + "</td></tr>"
            tblMonth += row;
            yrCheck = num % 12;
            if (yrCheck == 0 || num == (low)) {
                tblYear += row;
            }
        }
        var tblReturn = {
            tblMonth: tblMonth,
            tblYear: tblYear
        };
        return tblReturn;
    }
    //AMORTIZATION FUNCTIONS - END

    //FIX VAL AND COMMA FUNCTIONS
    function fixVal(value, numberOfCharacters, numberOfDecimals, padCharacter) {
        var i, stringObject, stringLength, numberToPad;            // define local variables

        value = value * Math.pow(10, numberOfDecimals);                 // shift decimal point numberOfDecimals places
        value = Math.round(value);                                   //  to the right and round to nearest integer

        stringObject = new String(value);                            // convert numeric value to a String object
        stringLength = stringObject.length;                          // get length of string
        while (stringLength < numberOfDecimals) {                     // pad with leading zeroes if necessary
            stringObject = "0" + stringObject;                     // add a leading zero
            stringLength = stringLength + 1;                       //  and increment stringLength variable
        }

        if (numberOfDecimals > 0) {			           // now insert a decimal point
            stringObject = stringObject.substring(0, stringLength - numberOfDecimals) + "." +
                stringObject.substring(stringLength - numberOfDecimals, stringLength);
        }

        if (stringObject.length < numberOfCharacters && numberOfCharacters > 0) {
            numberToPad = numberOfCharacters - stringObject.length;      // number of leading characters to pad
            for (i = 0; i < numberToPad; i = i + 1) {
                stringObject = padCharacter + stringObject;
            }
        }

        return stringObject;                                       // return the string object
    }

    function commaSeparateNumber(val) {
        while (/(\d+)(\d{3})/.test(val.toString())) {
            val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
        }
        return val;
    }

    //Down Pay Popover Creation
    function downPayPop(el, opt, price, array, isDown, popDiv, tbDiv) {
        var tbl = "<table class='altTable fullWidth'><tr><th>% Down</th><th style='text-align:right;'>Amount</th></tr>";
        for (var i = 0; i < array.length; i++) {
            var perc = array[i];
            var val = price * (perc / 100);
            var finalVal = val;
            if (!isDown) {
                finalVal = price - val;
            }
            tbl += "<tr><td>" + perc + "%</td><td class='calcCursor' onmousedown=\"showDownPayPop(this,'" + tbDiv + "','" + el + "');\">$" + commaSeparateNumber(finalVal) + "</td></tr>";
        }
        tbl += "</table>";
        $(popDiv).html(tbl);
        $(el).popover(opt);
        $(el).on("blur", function () {
            $(el).popover("hide");
        });
    }

    function showDownPayPop(el, div, pop) {
        var val = el.innerHTML;
        var newVal = parseFloat(val.replace(/,/g, "").replace("$", ""));
        $(div).val(newVal);
        $(div).trigger('change');
        $(pop).popover("hide");
    }
    //////////////////////////////////////////////////////////EXPERIMENTAL
    function fixedBalanceAtMonth(startingLoanAmt, monthlyPmt, annualRate, pmtsMade) {
        var originalBalance = startingLoanAmt;
        var payment = monthlyPmt;
        var ratePerPeriod = annualRate / 1200;
        var numberOfPaymentsMade = pmtsMade;

        var appreciatedLoan = originalBalance * (Math.pow(1 + ratePerPeriod, numberOfPaymentsMade));

        var amortizationCoefficient = (Math.pow(1 + ratePerPeriod, numberOfPaymentsMade) - 1) / ratePerPeriod;
        var amortizedPayments = appreciatedLoan - (payment * amortizationCoefficient);

        return amortizedPayments;

    }
    function armBalanceAtMonth(startingLoanAmt, monthlyPmt, rateArray, pmtsMade, yearOfAdj) {
        var result = 0;
        var monthOfAdj = yearOfAdj * 12;
        var baseRate = rateArray[0];
        if (monthOfAdj >= pmtsMade || monthOfAdj == 0) {
            result = fixedBalanceAtMonth(startingLoanAmt, monthlyPmt, baseRate, pmtsMade);
        }
        else {

            var balanceAfterFixedTime = fixedBalanceAtMonth(startingLoanAmt, monthlyPmt, baseRate, monthOfAdj);
            result = balanceAfterFixedTime;
            var remainingPmts = pmtsMade - monthOfAdj;
            for (remainingPmts; remainingPmts > 0; remainingPmts - 12) {
                var rt = rateAtMonth(remainingPmts);
                if (remainingPmts - 12 > 0) {
                    result = fixedBalanceAtMonth(result, monthlyPmt, rt, 12);
                }
                else {
                    result = fixedBalanceAtMonth(result, monthlyPmt, rt, remainingPmts);
                }
            }
        }
        return result;
    }
    // Used to be millFactor(). Now we scale based on difference from median
    function apprGovernor(price, appr, i, pow, medianPrice) {
        !pow ? pow = 1 : pow = pow;
        if (medianPrice === 0 || medianPrice == undefined) medianPrice = price;
        if (medianPrice === false) {
            medianPrice = price;
            i = Math.floor(i / 12);
        }

        var scaleFactor = [.2, .4, .6, .8];
        var factor = 0;
        var percentDiff = Math.abs(((price - medianPrice) / medianPrice) * 100);

        if (percentDiff > 400) {
            factor = scaleFactor[3]
        } else if (percentDiff > 350) {
            factor = scaleFactor[2]
        } else if (percentDiff > 300) {
            factor = scaleFactor[1]
        } else if(percentDiff > 250) {
            factor = scaleFactor[0]
        }

        appr = appr * (1 - factor) 
        price = price * Math.pow((1 + appr / 100), pow); // Initial calc
        return price;

    }
    function getMonthsPaid(month, year) {
        var date = new Date();
        var paramDate = new Date(year + "/" + month + "/01");
        //paramDate = paramDate.add(1).days();
        var paramMonth = paramDate.getMonth();
        var paramYear = paramDate.getFullYear();
        var thisYear = date.getFullYear();
        var thisMonth = date.getMonth();
        var noMonths;
        noMonths = (thisYear - paramYear) * 12;
        noMonths -= (paramMonth + 1);
        noMonths += thisMonth + 1;
        return noMonths;
    }
    function calcHistApprMonth(array, monthNum, yrBought, months, price, apprTier) {
        var tempObj = [];
        for (var i = 0; i < array.length; i++) {
            var split = (array[i].date).split("-");
            var yr = split[split.length - 1];
            var start = new Date("01/01/" + yr);
            var rate = array[i]["tier" + apprTier];
            var avg = (rate / 12) / 100;
            var tempDate = start;
            for (var u = 0; u < 12; u++) {
                var up = 1;
                if (u == 0) {
                    up = 0;
                }
                tempDate = tempDate.add(up).months();
                var finalDate = (tempDate.getMonth() + 1) + "/01/" + tempDate.getFullYear();
                var obj = {
                    rate: avg,
                    date: finalDate
                };
                tempObj.push(obj);
            }
        }
        var today = new Date();
        today = makeFirstOfMonth(today);
        var purchaseDate = new Date((monthNum) + "/01/" + yrBought);
        purchaseDate = makeFirstOfMonth(purchaseDate);
        var final = [{
            month: purchaseDate,
            appr: Number(price)
        }];
        if (today == purchaseDate) {
            final = final;
        } else {
            var count = 0;
            var price = final[count].appr;
            var newPrice = price;
            var length = (months + monthNum);
            if (length > tempObj.length) {
                length = tempObj.length;
            }
            for (var n = monthNum; n < length; n++) {
                price = final[count].appr;
                var apprRate = tempObj[n].rate;
                var change = price * apprRate;
                newPrice = price + change;
                final.push({
                    month: tempObj[n].date,
                    appr: Math.round(newPrice)
                });
                count++;
            }
        }
        return final;
    }
    function makeFirstOfMonth(date) {
        var localDate = (date.getMonth() + 1) + "/01/" + date.getFullYear();
        return localDate;
    }
    function mortgageInsuranceAnalysis(basePrice, loanAmount, loanRatesAsArray, loanTerm, adjusmentYear, loanProgram, mortInsurancePaymentPerPeriod, ltvCutoffInPercent) {
        var armChange = adjusmentYear; //use 0 for a fixed loans
        var price = basePrice || 0;
        var amt = loanAmount || 0;
        var rateArray = loanRatesAsArray || [5];
        var term = loanTerm || 30;
        var mI = mortInsurancePaymentPerPeriod || 0;
        var ltv = parseInt(ltvCutoffInPercent) / 100 || .78;
        var cumulativePaidArray = [];
        var cutoffYr = 0;
        var baseLTV = (loanAmount / basePrice) * 100;
        var paymentsMade = 0;
        var paymentTracker = 0;
        var yearBalance = loanAmount;
        for (var years = 0; years < loanTerm || currentLTV < ltv; years++) {
            rate = rateAtYear(rateArray, years)
            var monthlyMortPay = mortgagePayment(yearBalance, rate, term - years);
            paymentsMade = years * 12;
            yearBalance = armBalanceAtMonth(amt, monthlyMortPay, rateArray, paymentsMade, armChange);
            var currentLTV = yearBalance / price;
            if (loanProgram.toLowerCase() == 'usda') {
                if (yearBalance <= 0 || years > term) {
                    break;
                }
                mI = yearBalance * .0035;
                paymentTracker += mI;
                cumulativePaidArray.push({
                    "year": years,
                    "totalPaid": paymentTracker
                })
            }
            else if (loanProgram.toLowerCase() == 'fha') {
                if (baseLTV > 90 || years < 11) {
                    if (yearBalance < 0 || years > term) {
                        break;
                    }
                    //mI = yearBalance * //mortInsurance from FHA MI
                    paymentTracker += mI * 12;
                    cumulativePaidArray.push({
                        "year": years,
                        "totalPaid": paymentTracker
                    })
                }
                else {
                    break;
                }

            }
            else if (currentLTV > ltv) {
                cumulativePaidArray.push({
                    "year": years,
                    "totalPaid": paymentTracker
                })
                cutoffYr = years;
                paymentTracker += mI * 12;
            }
            else {
                break;
            }
        }

        var mortInsurAnalysisObject = {
            cutoffYear: cutoffYr,
            totalMortInsurPaid: paymentTracker,
            totalPaidBreakdown: cumulativePaidArray,
            totalPayments: paymentsMade,
        }

        return mortInsurAnalysisObject;
    }
    function totalNumOfPayments(balance, payment, rate, paymentsPerPeriod) {
        var numOfPayments = paymentsPerPeriod || 12; //assumes monthly
        var periodRate = rate / (numOfPayments*100);

        var result = -Math.log(1 - (periodRate * balance) / payment) / Math.log(1 + periodRate);
        return result;
    }
    
    function calcTaxDeductionsFromLoan(loanAmount, interestPaid, annualPropertyTax, taxRateInPercent, interestRateInPercent, customCap) {
        //property tax benefit caps at 10000
        //interest benefit is capped at 750000 * the interest rate of the loan, but 350000 if married filing separately
        var totalLoanCap = customCap || 750000;
        var interestPaidCap = totalLoanCap * interestRateInPercent / 100;
        interestPaid > interestPaidCap ? interestPaidCap : interestPaid;
        annualPropertyTax = annualPropertyTax > 10000 ? 10000 : annualPropertyTax;
        var taxRate = taxRateInPercent / 100;

        var benefit = (interestPaid + annualPropertyTax) * taxRate;
        var adjustedBenefit = benefit;

        return adjustedBenefit;
    }

    function interestPaidForYear(loanAmount, loanRate, loanTerm, yearOf, loanType) {
        var type = loanType || "Fixed";
        var interestForYear = 0;
        if (yearOf > 0) {
            var monthlyPmt = calcsLib.mortgagePayment(loanAmount, loanRate, loanTerm)
            var annualPmt = monthlyPmt * 12;
            var monthsPaid = yearOf * 12;
            var prinPaidForYear = fixedBalanceAtMonth(loanAmount, monthlyPmt, loanRate, monthsPaid - 12) - fixedBalanceAtMonth(loanAmount, monthlyPmt, loanRate, monthsPaid);
            interestForYear = annualPmt - prinPaidForYear;
        }
        return interestForYear;
    }

    function urlWithValues(baseUrlString, loanAmount, rateAsPercent, termInYears) {
        if (baseUrlString.charAt(baseUrlString.length - 1) != "/") {
            baseUrlString += "/";
        }
        baseUrlString += loanAmount + "/" + rateAsPercent + "/" + termInYears + "/"

        return baseUrlString
    }



    // @param {int} periodPay - Periodic contribution.
    // @param {int} periodFreq - Times per year periodPay is added.
    // @param {int} lumpSum - Starting investment value.
    // @param {int} rate - Assumed rate of return.
    // @param {int} evalLen - Number of years to evaluate.
    // @returns {object} - Object with: 
    //      ending balance, 
    //      array of balance each year, 
    //      array of accumulative contributions
    function calculateInvestment(periodPay, periodFreq, lumpSum, rate, evalLen) {
        var total;
        var totalContribute;
        var balanceArray = [];
        var contributionsArray = [];

        periodFreq = 12 / periodFreq;
        rate = rate / 100;
        total = lumpSum;
        totalContribute = lumpSum;
        balanceArray.push(lumpSum)
        contributionsArray.push(lumpSum)

        for (var i = 0; i < evalLen; i++) {
            var yearAdd = 0;
            for (var j = 0; j < 12; j++) {
                if (j % periodFreq == 0) {
                    yearAdd += periodPay;
                    totalContribute += periodPay;
                }
                yearAdd = yearAdd * (1 + (rate / 12));
            }
            total = (total) * (1 + rate) + yearAdd;
            balanceArray.push(total.toFixed(2))
            contributionsArray.push(totalContribute.toFixed(2));
        }

        return {
            balance: total.toFixed(2),
            contributions: totalContribute.toFixed(2),
            interstGained: total - totalContribute,
            balanceArray: balanceArray,
            contributionsArray: contributionsArray
        }
    }

    function findInterestRate(amount, payment, numPay) {
        //David Cantrell method of finding interest rate   
        var final = 0;

        if (amount > 0)
        {
            var log1 = Math.log(1 + (1 / numPay));
            var log2 = Math.log(2);
            var finalLog = (log1 / log2);
            var nextStep = Math.pow((1 + (payment / amount)), (1 / finalLog));
            var thirdStep = Math.pow(nextStep - 1, finalLog);
            final = 1200 * (thirdStep - 1);
        }
        return final;
    }

    function calcAPR(loanAmount, numPay, payment, costs, origRate) {
        var apr = 0;
        if (loanAmount > 0) {
            var stockFees = 2000;
            var finalCosts = stockFees + costs;
            var finalAmount = loanAmount - finalCosts;
            if (finalAmount < 0) {
                finalAmount = 0;
            }
            var apr = findInterestRate(finalAmount, payment, numPay);
            $("#spAPRRate").html(fixVal(apr, 0, 3) + "%");
            $("#spOrigRate").html(fixVal(origRate, 0, 3) + "%");
            $("#spAPRTotal").html("$" + commaSeparateNumber(fixVal(loanAmount, 0, 0, " ")));
            $("#spAPRNumpay").html(numPay);
            if (costs == 0) {
                $("#spAPRAfford").show();
            } else {
                $("#spAPRAfford").hide();
            }
            $("#spAPRFees").html("$" + commaSeparateNumber(fixVal(finalCosts, 0, 0, " ")));

            var date = new Date();
            var dateString = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
            $('#spAPRDate').text(dateString);
        }
        return apr;
    }

    function calcAvgPercentChange(apprTier, rateData, yrs, startPrice, medianPrice) {
        var medianPrice = medianPrice || 300000;
        var prices = [];
        prices[0] = startPrice;
        for (var i = 1; i < (Number(yrs) * 12) + 1; i++) {
            var thisRate = 0;
            rateDataPoint = rateData[i - 1] || rateData[rateData.length - 1];
            thisRate = rateDataPoint["tier" + apprTier];
            // COVID ADJUSTMENT 2.0. Commented out on 6/16/2020
            if (i < 12) {
                // thisRate -= 0.2916; // == -3.5 for first year.
            }
            prices[i] = calcsLib.apprGovernor(prices[i - 1], thisRate, i, 1, medianPrice)
        }
        var total = (prices[prices.length - 1] - prices[0]) / prices[0];
        var finalPerAvg = (Math.pow((1 + total), (1 / yrs)) - 1) * 100;
        return Number(finalPerAvg.toFixed(2));
    }

    function propTaxValue(purPrice, rate) {
        return Math.round(parseFloat(purPrice * (rate / 100)));
    }

    function propTaxRate(purPrice, propTax) {
        if (purPrice === 0) {
            return 0;
        }
        return (propTax / purPrice) * 100;
    }

    function yearDifference(year, forecastYear) {
        if (year == 0) {
            var result = 0;
        }
        else if (year == .5) {
            result = forecastYear["mbaMonth6"] - forecastYear["mbaCurrent"];
        }
        else if (year % 1 == .5) {
            var yearVal = Math.floor(year);
            var preHalfYearChange = forecastYear["mbaYear" + (yearVal)] - forecastYear["mbaCurrent"];
            var halfYrChange = (forecastYear["mbaYear" + (yearVal + 1)] - forecastYear["mbaYear" + (yearVal)])/2
            result = preHalfYearChange + halfYrChange;
        }
        else {
            result = forecastYear["mbaYear" + year] - forecastYear["mbaCurrent"];
        }
        return result;
    }

    function getInterestPaidAtYear(lnObj, yrs) {
        var sumOfInterest = 0;
        var yrsConverted = (yrs * 12)
        for (zz = 0; zz < yrsConverted; zz++) {
            sumOfInterest += getInterestPaid(lnObj, zz);
        }
        return sumOfInterest;
    }

    function getInterestPaid(mortObj, months) {
        var bal = getBalanceAtMonth(mortObj, months);
        var intr = mortObj.getAnnualRateAtMonth(months) / 1200
        return bal * intr;
    }

    function getBalanceAtMonth(loanObj, months) {

        var loanTerm = loanObj.term * 12;
        var program = loanObj.getLoanProgram();
        var bal = loanObj.getLoanAmount();

        if (program == -5 || program == -7 || program == -10) {
            var intOnlyYear = program;
            var intOnlyMonth = -(intOnlyYear * 12);
            if (intOnlyMonth > months) {
                return bal;
            }
            else {
                loanTerm -= intOnlyMonth;
                months -= intOnlyMonth;
            }
        }

        for (monthTrack = 0; monthTrack < months; monthTrack++) {
            var rt = getRateAtMonth(loanObj, monthTrack);
            var pmt = mortgageMonthPay(bal, rt, loanTerm - monthTrack);            
            bal = bal * (1 + (rt / 1200)) - pmt;
        }
        return bal;
    }

    function getInterestPaid(mortObj, months) {
        var bal = getBalanceAtMonth(mortObj, months);
        var intr = mortObj.getAnnualRateAtMonth(months) / 1200

        return bal * intr;
    }

    function getMonthlyPaymentAt(loanObj, inMonth) {
        if (inMonth >= loanObj.term * 12) {
            return 0;
        }
        else if (loanObj.getLoanProgram() >= 5 && loanObj.getLoanProgram() !== 999 && inMonth / 12 < Math.abs(loanObj.getLoanProgram())) {
            return loanObj.getLoanAmount() * (loanObj.baseRate / 1200)
        }
        else if (loanObj.getLoanProgram() > 0 && loanObj.loanType == 0) {
            return loanObj.monthlyFixedPay();
        }

        var loanBal = getBalanceAtMonth(loanObj, inMonth);
        var timeLeft = (loanObj.term * 12) - inMonth;
        var loanRt = loanObj.getAnnualRateAtMonth(inMonth);
        var mPay = mortgageMonthPay(loanBal, loanRt, timeLeft)

        return mPay;
    }
    function mortInsurCheckActive(lnObj, month, balance) {
        var year = Math.floor(month / 12);
        if (year >= lnObj.term) {
            return false;
        }
        var loanProgram = lnObj.getLoanProgram();

        if (loanProgram == 4) {
            return false;
        }
        if (loanProgram == 3) {
            return true;
        }
        var propVal = testIfRefiLoan(lnObj) ? lnObj.property.estHomeValue : lnObj.property.propPrice;
        var ltv = balance / propVal || (getBalanceAtMonth(lnObj, month) / propVal);
        var lnAmt = lnObj.getLoanAmount() || lnObj.loanAmount;
        var dPay = lnObj.downPay;
        
        var startLtv = dPay == 0 ? lnAmt / propVal : (propVal - dPay) / propVal;

        if (loanProgram == 2) {
            if (startLtv > .9) {
                return true
            }
            else if (year < 11) {
                return true
            }
            else {
                return false
            }
        }

        else if (ltv > .78) {
            return true
        }


        return false;

        /*if (ltv > .78)
            return true;
        else if (checkFHA != -2)
            return false;
    
        if (startLtv < .1)
            return true;
        else if (year < 12)
            return true;
        return false;*/
    }

    function getMonthHomeInsFromPrice(price) {
        return Math.round(price * 0.0035 / 12);
    }

    function roundedEighth(num) {
        return Math.ceil(num * 8) / 8
    }

    function calcAvgPercentChangeMSA(rateData, objProp, yrs, startPrice) {
        var prices = [];
        prices[0] = startPrice;
        for (var i = 1; i < Number(yrs) + 1; i++) {
            var thisRate = 0;
            if (objProp != "") {
                rateDataPoint = rateData[i - 1] || rateData[rateData.length - 1]
                thisRate = rateDataPoint[objProp];
                // COVID ADJUSTMENT 2.0. Commented out on 6/16/2020
                if (i == 1) {
                    //thisRate -= 3.5
                }
            }
            prices[i] = calcsLib.apprGovernor(prices[i - 1], thisRate, i, 1, false);
        }
        var total = (prices[prices.length - 1] - prices[0]) / prices[0];
        var finalPerAvg = (Math.pow((1 + total), (1 / yrs)) - 1) * 100;
        return Number(finalPerAvg.toFixed(2));
    }

    function getApprTier(propPrice, medianPrice) {
        var percentDiff = ((propPrice - medianPrice) / medianPrice) * 100;
        var tier = 3;
        if (percentDiff > 40) {
            tier = 5;
        } else if (percentDiff > 20) {
            tier = 4;
        } else if (percentDiff < -40) {
            tier = 1;
        } else if (percentDiff < -20) {
            tier = 2;
        }
        return tier;
    }





    return {
        mortgagePayment: mortgagePayment,
        mortgageMonthPay: mortgageMonthPay,
        armWorstCase: armWorstCase,
        armAverageScenario: armAverageScenario,
        armCustom: armCustom,
        rateAtYear: rateAtYear,
        rateAtMonth: rateAtMonth,
        interestOfPayment: interestOfPayment,
        principalOfPayment: principalOfPayment,
        totalInterestPaidAtMonth: totalInterestPaidAtMonth,
        totalPrincipalPaidAtMonth: totalPrincipalPaidAtMonth,
        balanceOfAdjAtMonth: balanceOfAdjAtMonth,
        monthlyPaymentAt: monthlyPaymentAt,
        amortLoan: amortLoan,
        amortBuildArm: amortBuildArm,
        amortTable: amortTable,
        amortDiffTable: amortDiffTable,
        fixVal: fixVal,
        commaSeparateNumber: commaSeparateNumber,
        downPayPop: downPayPop,
        showDownPayPop: showDownPayPop,
        fixedBalanceAtMonth: fixedBalanceAtMonth,
        armBalanceAtMonth: armBalanceAtMonth,
        apprGovernor: apprGovernor,
        getMonthsPaid: getMonthsPaid,
        calcHistApprMonth: calcHistApprMonth,
        makeFirstOfMonth: makeFirstOfMonth,
        mortgageInsuranceAnalysis: mortgageInsuranceAnalysis,
        totalNumOfPayments: totalNumOfPayments,
    // ** Not being used currently **
        //calcTaxBenefit: calcTaxBenefit,
        //ipmt: ipmt,
        calcTaxDeductionsFromLoan: calcTaxDeductionsFromLoan,
        interestPaidForYear: interestPaidForYear,
        urlWithValues: urlWithValues,
        calculateInvestment: calculateInvestment,
        findInterestRate: findInterestRate,
        calcAPR: calcAPR,
        loanAmtFromPayment: loanAmtFromPayment,        
        calcAvgPercentChange: calcAvgPercentChange,
        propTaxValue: propTaxValue,
        propTaxRate: propTaxRate,
        yearDifference: yearDifference,
        getInterestPaidAtYear: getInterestPaidAtYear,
        getBalanceAtMonth: getBalanceAtMonth,
        getInterestPaid: getInterestPaid,
        getMonthlyPaymentAt: getMonthlyPaymentAt,
        mortInsurCheckActive: mortInsurCheckActive,
        roundedEighth: roundedEighth,
        getMonthHomeInsFromPrice: getMonthHomeInsFromPrice,
        calcAvgPercentChangeMSA: calcAvgPercentChangeMSA,
        getApprTier: getApprTier,
        amortBuildArmWF: amortBuildArmWF
    }
}());
