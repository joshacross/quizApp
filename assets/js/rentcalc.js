const formElement = document.getElementById('form');

const multiply = (num1, num2) => {
    return Math.floor(num1*num2);
}

let formData = [];

formElement.addEventListener('submit', returnRent);

function returnRent(e) {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const rent = document.querySelector('#rent').value.trim();
    const pvResult = multiply(rent, 201.47766315152);

    let presentValue = document.createElement('input');
    presentValue.value = pvResult;
    presentValue.setAttribute('hidden', true);
    formElement.appendChild(presentValue);
    console.log(presentValue);

    let formData = {'userName': name, 'userPhone': phone, 'userRent': rent, 'userPV': presentValue.value};

    alert('CONGRATULATIONS ' + formData.userName + '!!! 🎉 🎉 🎉  Paying $' + formData.userRent + ' in rent could allow you to purchase a house up to $' + formData.userPV);

//Send Form Data

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
        referrPolicy: 'strict-origin-when-cross-origin',
        body: JSON.stringify(data)
    });
        return response.json();
    }

  
sendForm('https://hooks.zapier.com/hooks/catch/9671423/b8om3hn/', formData)
    .then(data => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
    window.location.href = "https://rentcalculator.com/properties/?widget_id=2&kind=0&sf_unit_price=260&sf_min_price=0&sf_max_price="+formData.userPV;
}
