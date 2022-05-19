let formData = [];

const multiply = (num1, num2) => {
    return Math.floor(num1*num2);
}



// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal but also will create obj and save to localStorage
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];


const verifyBtn = document.getElementById('verify');

const phoneVerificationBtn = document.getElementById('phoneVerificationBtn');

const verificationContainer = document.getElementById('verificationContainer');


	
let returnRent = () => { 
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const rent = document.getElementById('rent').value.trim();
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
 

let sendData = (e) => {
    
    /////////TWILIO VERIFICATION CALLBACK ///////////
        e.preventDefault();

        
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
            window.location.href = "https://rentcalculator.com/properties/?widget_id=2&kind=0&sf_unit_price=260&sf_min_price=0&sf_max_price="+formData.userPV;

}


btn.onclick = () => {
    modal.style.display = "block";

};


// When the user clicks on the button, open the modal
btn.onclick = (e) => {
    e.preventDefault();
    returnRent();
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = () => {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  verifyBtn.addEventListener('click', ()=> {
    console.log('verifyBtn clicked');
    
    const phone = document.getElementById('phone').value.trim();
    
        formData = { ...formData, 'phone': phone };
    
        let setStorage = () => {
            localStorage.setItem('phone', phone);
        }
    
        setStorage();
    phoneVerificationBtn.addEventListener('submit', sendData);
});

    
