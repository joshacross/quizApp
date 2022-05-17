// get Element to insert form results into
const insertFormResults = document.getElementById('insertFormResults');

// for event listener on submit
const formDataElement = document.getElementById('form');

const multiply = (num1, num2) => {
    return Math.floor(num1*num2);
}


//variable declarations
let formData = {};
// Principle Formula = 
    // p = monthly rent payment
    pmt = Number;
    // n = # of payments
    n = (12*30);
    // i = current interest rate (bank rate)
    i = Number;
    // pV = principle 
    principle = Number;



////////////////////////
// Fills out form /////
//////////////////////
let getRentPayment = (e) => {
    e.preventDefault();
    let rent = document.getElementById('rent').value.trim();

    if (!rent) {
        alert('must enter a rent payment');
        return;
    } else {
        let rentPaymentObj = {'rent': rent};
         console.log('rentPayment is not null');
         formData = { rentPaymentObj }
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
                rateObj = { 'rate': data.rates[1].rate }
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

let calculatePrinciple = (pmt, i) => {
    let compoundedMonthlyInterest = ((i*.01)/12);
    let paymentLessTaxInsurance = (pmt-375);

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
    formData = { ...formData, principleObj };
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
    const principleElLabel = document.createElement('p');
    principleElLabel.textContent = 'Congratulations! Your Converted Max Purchase Price Is:';
    const principleEl = document.createElement('input');
    principleEl.setAttribute('type', 'text');
    principleEl.setAttribute('style', 'margin: 0 auto;')
    principleEl.value = '$' + formData.principleObj.principle;
    insertFormResults.appendChild(principleElLabel);
    insertFormResults.appendChild(principleEl);


    

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

}
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
