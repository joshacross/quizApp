const multiply = (num1, num2) => {
    return Math.floor(num1*num2);
}

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let formData = [];

	
let returnRent = (e) => {
    e.preventDefault();
	// e.stopPropagation(); e.stopImmediatePropagation();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const rent = document.getElementById('et_pb_contact_rent_0').value.trim();
    const pvResult = multiply(rent, 150.47766315152);

    let formData = {'first_name': firstName, 'last_name': lastName, 'rentPayment': rent, 'principle': pvResult};


    let setStorage = () => {
        localStorage.setItem('principle', pvResult);
        localStorage.setItem('first_name', firstName);
        localStorage.setItem('last_name', lastName);
        localStorage.setItem('rent', rent);
    }
        setStorage();
        return formData;
    }

let showVerificationInput = (e) => {
    e.preventDefault();
    btn.setAttribute('hidden', true);
    let verificationNumber = document.getElementById('phoneVerificationNumber');
    const phoneVerificationBtn = document.getElementById('phoneVerificationBtn');
    phoneVerificationBtn.addEventListener('submit', phoneVerified);
    verificationNumber.setAttribute('hidden', false);
    phoneVerificationBtn.setAttribute('hidden', false);
}

let phoneVerified = (e) => {
    e.preventDefault();
    const phone = document.getElementById('phone').value.trim();

    let formData = { ...formData, 'phone': phone };

    let setStorage = () => {
        localStorage.setItem('phone', phone);
    }

    setStorage();
    
    /////////TWILIO VERIFICATION INSERT ///////////
    document.getElementById('verify');
    if (twilioVerifiedComplete) {
        
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
    
//Send Form Data

document.addEventListener('DOMContentLoaded', () => {
	const formElement = document.getElementById('form');
	console.log(formElement);
    formElement.addEventListener('submit', returnRent);
    const verify = document.getElementById('verify');
    verify.addEventListener('click', showVerificationInput);
	// formElement.addEventListener('submit', returnRent); 
});