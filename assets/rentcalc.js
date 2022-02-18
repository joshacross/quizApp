

const multiply = (num1, num2) => {
    return num1*num2;
}

let rentPayment, nameValue, phoneNumber;

const formElement = document.getElementById('form');

formElement.addEventListener('submit', returnRent);

function returnRent(e) {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const rent = document.querySelector('#rent').value.trim();

    rentPayment = rent;
    nameValue = name;
    phoneNumber = phone;

    console.log(name, phone, rent);

    getPV();
}

function getPV() {
        let pvResult = multiply(rentPayment, 210.4766315152);

        let presentValue = Math.floor(pvResult)


    alert('CONGRATULATIONS ' + nameValue + '!!! 🎉 🎉 🎉  Paying $' + rentPayment + ' in rent could allow you to purchase a house up to $' + presentValue);
    savePV(name, phone, presentValue);
}

// save to local storage 
function savePV(name, phone, presentValue) {
    console.log('save to local storage');
    let passedValue = presentValue;
    localStorage.setItem('presentValue', passedValue);
    localStorage.setItem('name', nameValue);
    localStorage.setItem('phone', phoneNumber);
    localStorage.setItem('rent', rentPayment);
}