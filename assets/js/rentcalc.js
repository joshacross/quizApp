
// for event listener on submit
const formDataElement = document.getElementById('form');

const multiply = (num1, num2) => {
    return Math.floor(num1*num2);
}

let formData = {};

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
         formData = { ...formData, rentPaymentObj }
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
                console.log(formData)
            ).catch(err => 
                console.log(err)
            )
        }
    })
};

// let getRate = (rateObj) => {
//     let rateData = rateObj.rates[1].rate;
//     let rateObj = { 'rate': rateData };
    
//     formData = {...formData, rateObj };
    
//     futureValue(rateData, monthlyRent);
// };

// let futureValue = (rate, rent) => {
//     console.log('rent', rent);
//     console.log(rate);


//     let fV = (rentPayment*((1+rate)^360));
//     console.log('futureVale', fV);

//     return Math.floor(fV);
// };
        
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
