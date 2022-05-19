//Rent Calculator Input and Calculate button
const rentCalc = document.getElementById('rentCalc');

// get Element to insert form results into
const insertFormResults = document.getElementById('insertFormResults');

// for event listener on submit
const formDataElement = document.getElementById('form');

const multiply = (num1, num2) => {
    return Math.floor(num1*num2);
}


//variable declarations

// formData = empty object to make local variables global
let formData = {};

// Principle Formula based on Form Results = 
    // p = monthly rent payment
    let pmt = Number;
    
    // frequency = how many months does interest compound
    let months = 12;
    let monthsObj = { 'months': months };

    // time = how many years
    let years = 30;
    yearsObj = { 'years': years };

    let n = (months*years);


    // i = current interest rate (bank rate)
    let interest = Number;
    let taxAndInsurance = 375;
    // pV = principle 
    principle = Number;


////////////////////////
// Fills out form /////
//////////////////////
let getRentPayment = (e) => {
    e.preventDefault();
    rentCalc.setAttribute('hidden', true);
    let rent = document.getElementById('rent').value.trim();

    if (!rent) {
        alert('must enter a rent payment');
        return;
    } else {
        let rentPaymentObj = {'rent': rent};
        let incomeRate = 40;
        let incomePercent = (incomeRate/1000);
        let income = (rent/incomePercent);
        console.log(income);
        let incomeObj = { 'income': income };
         console.log('rentPayment is not null');
         formData = { rentPaymentObj, incomeObj };
    }
         console.log('formData', formData);
         getMortgageRates();
    };

// Now userData is the parsed result
let getMortgageRates = async () => {
    console.log('getMortgageRates initiated');
    let apiUrl = 'https://mortgageapi.zillow.com/getCurrentRates?partnerId=RD-CZMBMCZ&queries.1.propertyBucket.location.stateAbbreviation=TN&queries.1.propertyBucket.propertyValue=500000&queries.1.propertyBucket.loanAmount=400000'
    await fetch (apiUrl)
    .then(response => {
        if (response.ok) {
            response.json()
            .then(data => 
                rateObj = { 'rate': data.rates[1].rate, 'apr': data.rates[1].apr }
            ).then(rateObj =>
                formData = { ...formData, rateObj }
            ).then(formData =>
                calculatePrinciple(formData.rentPaymentObj.rent, formData.rateObj.rate)
            ).catch(err => 
                console.log(err)
            )
        }
    })
};

let calculatePrinciple = (pmt, interest) => {
    let compoundedMonthlyInterest = ((interest*.01)/12);
    let paymentLessTaxInsurance = (pmt-taxAndInsurance);

    principle = ((((compoundedMonthlyInterest)*((1+compoundedMonthlyInterest)^n))/((1+(compoundedMonthlyInterest^n))-1))/(paymentLessTaxInsurance));
    // let pV = (((paymentLessTaxInsurance)*((1+compoundedMonthlyInterest)^(n-1)))/((compoundedMonthlyInterest*((1+compoundedMonthlyInterest)^n))));
    /*
        Principle Formula = 
            m = monthly mortgage payment
            r = monthly rent payment
            n = # of payments
            i = current interest rate (bank rate)
            P = principle 
    */
    
    console.log('principle', (1/principle));

    let roundedPrinciple = Math.floor((1/principle));

    let principleObj = { 'principle': roundedPrinciple };
    let numberOfPeriodsObj = { 'numberOfPeriods': n }

    formData = { ...formData, principleObj, numberOfPeriodsObj };

    saveToLocalStorage();
    updateForm();
    return;
};
        
let saveToLocalStorage = () => {
    console.log(formData);
    localStorage.setItem('rentPayment', (formData.rentPaymentObj.rent));
    localStorage.setItem('numberOfPeriods', n);
    localStorage.setItem('interestRate', (formData.rateObj.rate));
    localStorage.setItem('principle', (formData.principleObj.principle));
};

let updateForm = () => {

    const resultsHeaderEl = document.createElement('h1');
    resultsHeaderEl.textContent = 'Congratulations!'
    insertFormResults.appendChild(resultsHeaderEl)
    // create a column div container with responsive design:
    const principleContainerEl = document.createElement('div');
    principleContainerEl.classList.add('col');
    principleContainerEl.setAttribute('id', 'principleContainer');
    insertFormResults.appendChild(principleContainerEl);


    const principleEl = document.createElement('input');
    principleEl.setAttribute('style', 'display: block');
    const principleElLabel = document.createElement('p');
    principleElLabel.textContent = 'Your Converted Max Purchase Price Is:  ';
    principleEl.setAttribute('type', 'text');
    principleEl.setAttribute('style', 'margin: 0 auto;')
    principleEl.setAttribute('id', 'principle')
    principleEl.value = '$' + formData.principleObj.principle;
    principleContainerEl.appendChild(principleElLabel);
    principleContainerEl.appendChild(principleEl);

        // create a column div container with responsive design:
        const periodsContainerEl = document.createElement('div');
        periodsContainerEl.classList.add('col');
        periodsContainerEl.setAttribute('id', 'periodContainer');
        insertFormResults.appendChild(periodsContainerEl);
    

    const numberOfPeriodsEl = document.createElement('input');
    const numberOfPeriodsLabel = document.createElement('p');
    numberOfPeriodsLabel.textContent = 'Number of Periods:  '
    numberOfPeriodsEl.setAttribute('type', 'text');
    numberOfPeriodsEl.setAttribute('style', 'margin: 0 auto;');
    numberOfPeriodsEl.setAttribute('id', 'numberOfPeriods');
    numberOfPeriodsEl.value = 'n = ' + formData.numberOfPeriodsObj.numberOfPeriods;
    periodsContainerEl.appendChild(numberOfPeriodsLabel);
    periodsContainerEl.appendChild(numberOfPeriodsEl);

        // create a column div container with responsive design:
        const interestRateContainerEl = document.createElement('div');
        interestRateContainerEl.classList.add('col');
        interestRateContainerEl.setAttribute('id', 'interestRateContainer');
        insertFormResults.appendChild(interestRateContainerEl);
    


    const interestRateEl = document.createElement('input');
    const interestRateLabel = document.createElement('p');
    interestRateLabel.textContent = '*Lowest Interest Rate:  '
    interestRateEl.setAttribute('type', 'text');
    interestRateEl.setAttribute('style', 'margin: 0 auto;');
    interestRateEl.setAttribute('id', 'interestRate');
    interestRateEl.value = formData.rateObj.rate + '%'
    interestRateContainerEl.appendChild(interestRateLabel);
    interestRateContainerEl.appendChild(interestRateEl);

        // create a column div container with responsive design:
        const rentPaymentContainerEl = document.createElement('div');
        rentPaymentContainerEl.classList.add('col');
        rentPaymentContainerEl.setAttribute('id', 'rentContainer');
        insertFormResults.appendChild(rentPaymentContainerEl);
    


    const rentPaymentEl = document.createElement('input');
    const rentPaymentLabel = document.createElement('p');
    rentPaymentLabel.textContent = 'Rent Payment:  '
    rentPaymentEl.setAttribute('type', 'text');
    rentPaymentEl.setAttribute('style', 'margin: 0 auto;');
    rentPaymentEl.setAttribute('id', 'rentPayment');
    rentPaymentEl.value = '$' + formData.rentPaymentObj.rent;
    rentPaymentContainerEl.appendChild(rentPaymentLabel);
    rentPaymentContainerEl.appendChild(rentPaymentEl);

        // create a column div container with responsive design:
        const incomeContainerEl = document.createElement('div');
        incomeContainerEl.setAttribute('style', 'display:flex; flex-wrap: wrap; flex-direction: column; justify-content: center;')
        incomeContainerEl.setAttribute('id', 'incomeContainer');
        insertFormResults.appendChild(incomeContainerEl);
    


    const incomeLabel = document.createElement('p');
    const incomeDisplayEl = document.createElement('p');
    const incomeEl = document.createElement('input');
    incomeLabel.textContent = 'Income: $'
    incomeDisplayEl.textContent = formData.incomeObj.income;
    incomeEl.setAttribute('type', 'range');
    incomeEl.setAttribute('min', 1);
    incomeEl.setAttribute('max', 100);
    incomeEl.setAttribute('value', 40);
    incomeEl.setAttribute('style', 'margin: 0 auto;');
    incomeEl.setAttribute('id', 'rentPayment');
    incomeEl.value = '$' + (formData.incomeObj.income * 100);
    insertFormResults.appendChild(incomeContainerEl);
    insertFormResults.appendChild(incomeLabel);
    insertFormResults.appendChild(incomeDisplayEl);
    insertFormResults.appendChild(incomeEl);

    //Disclaimer - Privacy
    const privacyPolicyContainer = document.getElementById('Disclaimer');
    const disclaimerEl = document.createElement('p');
    disclaimerEl.setAttribute('style', 'font-size:x-small;');
    const disclaimerLabel = document.createElement('p');
    disclaimerLabel.textContent = '*Disclaimer';
    disclaimerLabel.setAttribute('style', 'font-size:x-small');
    const privacyPolicyURL = document.createElement('a');
    privacyPolicyURL.setAttribute('href', './privacy-policy');
    privacyPolicyURL.innerText = 'Privacy Policy';
    disclaimerEl.textContent = 'The maximum principle value of $' + formData.principleObj.principle + ' is based on a borrowers ' +
    'combined average annual household income of $' + formData.incomeObj.income + ' per year, with no outstanding monthly debts, at a ' + formData.rateObj.rate + '% interest, ' + formData.rateObj.apr + '% apr, and an average Tennessee State tax and insurance of $' + taxAndInsurance +  '. '
    + 'Some products and services may not be available in all states.'
    + 'Credit and collateral are subject to approval. '
    + 'Terms and conditions apply. Programs, rates, terms and conditions are subject to change and are subject to borrower qualification. '
    + 'This is not a commitment to lend. The content in this website has not been approved, reviewed, sponsored or endorsed by any department or goverment ageny. '
    + 'Rent Calculator in association with Nashville Area Homes are not financial lenders or associated with any financial entity. ' 
    + 'See ' + privacyPolicyURL + ' for more details.';
    privacyPolicyContainer.appendChild(disclaimerLabel);
    privacyPolicyContainer.appendChild(disclaimerEl);

}

// above is creating...

/* 05-18-22

    I should add a button below the new form to calculate and update ORRRR show 

*/


/*
Issue: 
When document loads, load local storage.
If rentPayment, numberOfPeriods, interestRate, and/or principle are NOT true, then 
pull rate and wait.
else {
    updateForm();
}

ISSUE #2: 
onBlur. create input element for 
Review TaskMasterPro for ideas

ISSUE #3:
If principle exists, update do not create a new one. That needs to be changed inside the major functions

ISsue #4: 
When either one is updated, adjust formula - because they are all variables, we should be able to adjust the formula accordingly everytime one is updated. 

Issue #5:
Create damn sliders bitch

Issue #6:
It would be helpful to use a library such as bootstrap for this shit so it's easier

Issue $7:
Needs to be added to Wordpress

Issue #8: 
After it is added, gather bills and send to Michael

Issue #9
I might not want to add this new code because it actually works, rather than his code does not

Issue #10:
Needs to be recreated in react and next.js

Issue #11: 
environment variables to hide partnerID#s and codebase so it's not exposed

creates a login:
Create an account to see homes that you could purchase with the rent that you pay per month.

Create user with 0Auth and Hubspot as a CMS platform

Grant access to extra and have an entire website of stuff ready
*/


//     // declare form controls:
//     console.log('formData principle', formData.principleObj.principle);
//     let principleValue = formData.principleObj.principle;
//     console.log('principleAmount', principleAmount);
// principleAmount.value = principleValue;
// const rentPayment = document.getElementById('rent-payment')
// const currentRate = document.getElementById('current-rate')
// const numberOfPayment = document.getElementById('number-of-payments')
// const downPayment = document.getElementById('down-payment')
// const taxInsurance = document.getElementById('tax-insurance')

// principleAmount.setAttribute('value', formData.principleObj.principle);
    // principleAmount.value = "$" + formData.principleObj.principle;
    //  principleAmount
    //  rentPayment
    //  currentRate
    //  numberOfPayment
    //  downPayment
    //  taxInsurance


// add eventListener to form button

formDataElement.addEventListener('submit', getRentPayment);

// // wait for document to load

// // once document loads, 

	
// function returnRent(e) {
//     e.preventDefault(); 
//     const rent = document.getElementById('rent').value.trim();
//     let rentObject = { 'rent': rent };

//     pushFormData = () => {
//         let formDataPush = () => {formData.push.localStorage(rentObject);};

//         console.log('localStorage', localStorage);

//         if (rent) {
//             console.log('rentObjAfter', rent);
//         } else {
//             console.log('rentObjectAfter is Null');
//         }
//         formDataPush();
//     }

// 	// e.stopPropagation(); e.stopImmediatePropagation();
//     // const name = document.getElementById('et_pb_contact_name_0').value.trim();
//     // // const phone = document.getElementById('et_pb_contact_phone_0').value.trim();
//     // const rent = document.getElementById('et_pb_contact_rent_0').value.trim();


// };
// //     if ((name) || (phone) || (rent)) {

// //     const pvResult = multiply(rent, 201.47766315152);
    
// //     let presentValue = document.createElement('input');
// //     presentValue.value = pvResult;
// //     presentValue.setAttribute('hidden', true);
// //     let formEl = document.getElementById('form');
// //     formEl.appendChild(presentValue);
// //     console.log(presentValue);

// //     let formData = {'userName': name, 'userPhone': phone, 'userRent': rent, 'userPV': presentValue.value};

// // let setStorage = () => {
// //     localStorage.setItem('pv', presentValue.value);
// //     localStorage.setItem('name', name);
// //     localStorage.setItem('phone', phone);
// //     localStorage.setItem('rent', rent);
// // }
// // //Send Form Data

// // async function sendForm (url='', data = {}) {

// //     const response = await fetch(url, {
// //         method: 'POST',
// //         mode: 'cors',
// //         cache: 'no-cache',
// //         credentials: 'omit',
// //         // headers: {
// //         //     'Accept': 'application/json',
// //         //     'Content-Type': 'application/json'
// //         // },
// //         // redirect: 'follow',
// //         refererPolicy: 'strict-origin-when-cross-origin',
// //         body: JSON.stringify(data)
// //     });
// //         return response.json();
// //     }

// //     setStorage();

  
// // sendForm('https://hooks.zapier.com/hooks/catch/9671423/b8om3hn/', formData)
// //     .then(data => {
// //         console.log(data);
// //     }).catch((err) => {
// //         console.log(err);
// //     });
// //     window.location.href = "https://rentcalculator.com/properties/?widget_id=2&kind=0&sf_unit_price=260&sf_min_price=0&sf_max_price="+formData.userPV;
// // } else {
// //     console.log('must enter a value');
// //     return;
// //     }

// pullLocal();

// document.addEventListener('DOMContentLoaded', () => {
//     setTimeout (() => {
//         formElement = document.getElementById('form').getElementsByTagName('form');
//         console.log('delayed for 5 seconds');
//     }, '5000' );
// 	//console.log('DOMContentLoaded');
// 	formElement[0].addEventListener('submit', returnRent); 
// });
