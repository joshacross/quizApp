// const submitForm = document.getElementById('form');


// let rent = document.getElementById('rent').value;
// let pv = [];
// let rentPayment;

// submitForm.addEventListener('submit', getPV);

// function getPV (e) {
//     e.preventDefault();
//     console.log(rent);
//     rentPayment = e.target.value;
//     console.log(rentPayment);


// }

const multiply = (num1, num2) => {
    return num1*num2;
}

let rentPayment;


const formElement = document.getElementById('form');

formElement.addEventListener('submit', returnRent);

function returnRent(e) {

    e.preventDefault();

    const rent = document.querySelector('#rent').value.trim();

    rentPayment = rent;

    console.log(rent);

    getPV();
}

function getPV() {
        let pvResult = multiply(rentPayment, 210.4766315152);

        let presentValue = Math.floor(pvResult);


    alert('Paying ' + rentPayment + ' ' + 'could afford you a house up to ' + presentValue);
}
