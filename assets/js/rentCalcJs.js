const multiply = (num1, num2) => {
    return Math.floor(num1*num2);
}

let formData = [];

	
function returnRent(e) {
    e.preventDefault();
	// e.stopPropagation(); e.stopImmediatePropagation();
    const name = document.getElementById('et_pb_contact_name_0').value.trim();
    const phone = document.getElementById('et_pb_contact_phone_0').value.trim();
    const rent = document.getElementById('et_pb_contact_rent_0').value.trim();

    phone.setAttribute('hidden', 'false');
    phone.setAttribute('required', 'true');

    if ((name) || (phone) || (rent)) {

    const pvResult = multiply(rent, 201.47766315152);
    
    let presentValue = document.createElement('input');
    presentValue.value = pvResult;
    presentValue.setAttribute('hidden', true);
    let formEl = document.getElementById('form');
    formEl.appendChild(presentValue);
    console.log(presentValue);

    let formData = {'userName': name, 'userPhone': phone, 'userRent': rent, 'userPV': presentValue.value};

let setStorage = () => {
    localStorage.setItem('pv', presentValue.value);
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);
    localStorage.setItem('rent', rent);
}
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

    setStorage();

  
sendForm('https://hooks.zapier.com/hooks/catch/9671423/b8om3hn/', formData)
    .then(data => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
    window.location.href = "https://rentcalculator.com/properties/?widget_id=2&kind=0&sf_unit_price=260&sf_min_price=0&sf_max_price="+formData.userPV;
} else {
    console.log('must enter a value');
    return;
    }
}

document.addEventListener('DOMContentLoaded', () => {
	formElement = document.getElementById('form');
	console.log(formElement);
    formElement.addEventListener('submit', returnRent);
	// formElement.addEventListener('submit', returnRent); 
});