

const multiply = (num1, num2) => {
    return Math.floor(num1*num2);
}

let formData = [];

let getRentPayment = async (e) => {
    e.preventDefault();
    const rentPayment = document.getElementById('rent').value.trim();
    console.log('rentPayment', rentPayment);

    if (!rentPayment) {
       await console.log ('rentPayment is null');
    } else {
        console.log('rentPayment is not null')
    }
};

// add eventListener to form button

const formDataElement = document.getElementById('form').addEventListener('submit', getRentPayment);

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


