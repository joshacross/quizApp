let formData = [];
let principle = Number;
let firstName = '';
let lastName = '';
let phone = Number;
let rent = Number;
let pvResult = Number;

const multiply = (num1, num2) => {
    return Math.floor(num1*num2);
}
//calculate button
let calculateBtn = document.getElementById('calculateBtn');
	
// let loadStorage = () => {
//     principle = localStorage.getItem('principle');
//     firstName =  localStorage.getItem('first_name');
//     lastName = localStorage.getItem('last_name');
//     phone = localStorage.getItem('phone');
//     rent = localStorage.getItem('rent');

//     if ( principle !== null || firstName !==null || lastName !== null || phone !== null || rent !== null && rent !== NaN ) {
//         let formData = {
//             'first_name': firstName, 
//             'last_name': lastName, 
//             'phone': phone, 
//             'rentPayment': rent, 
//             'principle': principle
//         }

//         const firstNameEl = document.getElementById('firstName');
//         const lastNameEl = document.getElementById('lastName');
//         const phoneEl = document.getElementById('phone');
//         const rentEl = document.getElementById('rent');
    
//         firstNameEl.value = firstName;
//         lastNameEl.value = lastName
//         phoneEl.value = phone
//         rentEl.value = rent
    
//         return (formData);
//     } else {
//         console.log('no storage loaded');
//     }



// }

// After calculateBtn is clicked: 
let returnRent = () => { 
    console.log('formDataArr', formData);
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const rent = document.getElementById('rent').value.trim();
    const pvResult = multiply(rent, 150.47766315152);

    console.log('firstName', firstName)
    console.log('lastName', lastName);
    console.log('phone', phone);
    console.log('rent', rent);
    console.log('pvResult', pvResult);



    let formDataObj = {'first_name': firstName,'last_name': lastName, 'phone': phone,'rentPayment': rent, 'principle': pvResult}

    formData.push(formDataObj);

        return (formData);

}
//Save to Local Storage

let setStorage = () => {

    console.log('formData in setStorage', formData[0].first_name);
    localStorage.setItem('principle', formData[0].principle);
    localStorage.setItem('first_name', formData[0].first_name);
    localStorage.setItem('last_name', formData[0].last_name);
    localStorage.setItem('phone', formData[0].phone);
    localStorage.setItem('rent', formData[0].rentPayment);
    return;
}

// after verifyPhoneBtn is clicked
let sendTextConfirmation = () => {
    // const phone = document.getElementById('phone').value.trim();
    // let phoneID = '+' + '1' + phone;
    // console.log(phoneID);

    // //////// TWILIO INFORMATION WEBHOOK AND ENVIRONMENT VARIABLES
    // const accountSid = process.env.TWILIO_ACCOUNT_SID;
    // const authToken = process.env.TWILIO_AUTH_TOKEN;
    // const client = require('twilio')(accountSid, authToken);
    
    // client.verify.services('VA74b70157d8fcec820e82ec4f9fb81125')
    //              .verifications
    //              .create({to: + phoneID , channel: 'sms'})
    //              .then(verification => console.log(verification.sid));
    console.log('twilio text-confirmation');
    return;
    
}
//send phone to twilio webhook
//await for response
// send callback response confirmation number

// after textConfirmation is inputed and user clicks Verify.
let sendData = () => {

    // /////////TWILIO VERIFICATION CALLBACK ///////////

    console.log('formDataPrinciple', formData[0].principle);
    console.log('sendData() initiated');
    async function sendForm (url='', data = {}) {

        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'omit',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // },
            // redirect: 'follow',
            refererPolicy: 'strict-origin-when-cross-origin',
            body: JSON.stringify(data)
        });
            return response.json();
        }

        setStorage();


    sendForm('https://hooks.zapier.com/hooks/catch/9671423/b8om3hn/', formData)
        .then(data => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
        parent.location.href = "https://rentcalculator.com/properties/?widget_id=2&kind=0&sf_unit_price=260&sf_min_price=0&sf_max_price="+principle;
}

let start = (e) => {
e.preventDefault();
returnRent();
setStorage();
sendTextConfirmation();
sendData();
};

// loadStorage();

//Event Listeners:

//Calculate and send phone one-text verification
calculateBtn.addEventListener('click', start);