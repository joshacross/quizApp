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


    alert('CONGRATULATIONS!!! 🎉 🎉 🎉  Paying $' + rentPayment + ' in rent could allow you to purchase a house up to $' + presentValue);
}
