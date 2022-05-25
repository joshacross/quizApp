const multiply = (num1, num2) => {
    return Math.floor(num1 * num2);
}

let formDatajs = [];


function returnRent(e) {
    //e.preventDefault();
    // e.stopPropagation(); e.stopImmediatePropagation();
    //const name = document.getElementById('et_pb_contact_name_0').value.trim();
    const fname = document.getElementById('et_pb_contact_firstname_0').value.trim();
	const lname = document.getElementById('et_pb_contact_lastname_0').value.trim();
    const phone = document.getElementById('et_pb_contact_phone_0').value.trim();
    const rent = document.getElementById('et_pb_contact_rent_0').value.trim();
    if ((fname) || (lname) || (phone) || (rent)) {

        const pvResult = multiply(rent, 200.123456789);

        let presentValue = document.createElement('input');
        presentValue.value = pvResult
        presentValue.setAttribute('hidden', true);
        let formEl = document.getElementsByTagName('form');
        formEl[0].appendChild(presentValue);
        //console.log(presentValue);

        let formDatajs = {'firstName': fname, 'lastName': lname, 'userPhone': phone, 'userRent': rent, 'userPV': presentValue.value};

        let setStorage = () => {
            localStorage.setItem('pv', presentValue.value);
            localStorage.setItem('firstName', fname);
            localStorage.setItem('lastName', lname);
            localStorage.setItem('phone', phone);
            localStorage.setItem('rent', rent);
        }
//Send Form Data

        async function sendForm(url = '', data = {}) {

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


        sendForm('https://hooks.zapier.com/hooks/catch/9671423/b8om3hn/', formDatajs)
                .then(data => {
                    console.log(data);
                }).catch((err) => {
            console.log(err);
        });
        window.location.href = "https://rentcalculator.com/properties/?widget_id=2&kind=0&sf_unit_price=260&sf_min_price=0&sf_max_price=" + formDatajs.userPV + '&wplorderby=p.price_si&wplorder=DESC&wplpage=1'
    } else {
        console.log('must enter a value');
        return;
    }
}
var verify = 'no';
var otpCode = 0;
let otphtml = 'no';
function twillio_otp(phone) {
    var ajaxurl = '/wp-admin/admin-ajax.php';
    //Sending data
    jQuery.ajax({
        url: ajaxurl,
        data: {
            action: 'verify_twillio',
            phone_number: phone
        },
        method: 'POST',
        dataType: "json",
        // async: false,
        success: function (response) {
            otpCode = response.code;
            alert(response.msg)
        },
    });
}

document.addEventListener('DOMContentLoaded', function () {
	//console.log('hello');
	formElement = document.getElementsByTagName('form');
//console.log(formElement)
    //formElement = document.getElementById('form').getElementsByTagName("form");
    var firstForm = jQuery('body').find('form.et_pb_contact_form').first();
	//console.log(firstForm)
    var htmlOTP = '<p style="display:none" id="et_pb_contact_rent_otp" class="et_pb_contact_field et_pb_contact_rent_otp et_pb_contact_field_last" data-id="otp" data-type="input"><label for="et_pb_contact_rent_otp" class="et_pb_contact_form_label">OTP Code</label><input type="text" id="et_pb_contact_rent_otp_input" class="input" value="" name="et_pb_contact_rent_otp"  data-field_type="input" data-original_id="rent" placeholder="OTP Code" pattern="[0-9\s-]{0,6}" title="Only numbers allowed.Maximum length: 6 characters."></p>';
    if (jQuery(firstForm).find('.et_pb_contact_rent_otp').length) {
        //console.log('Already Added');
    } else {
        jQuery(firstForm).find('.et_contact_bottom_container').before(htmlOTP);
    }
    jQuery(firstForm).find('button.et_pb_contact_submit.et_pb_button').attr('type', 'button');
    jQuery(firstForm).on('click', '.et_pb_contact_submit', function () {
		//console.log('Clicked');
        const phone = document.getElementById('et_pb_contact_phone_0').value.trim();
        if (phone) {
// 			console.log('Clicked'+ phone);
// 			console.log('otpCode'+ otpCode);
            jQuery('body').find('.et_pb_contact_rent_otp').show();
            if (otpCode == 0) {
				//console.log('otpCode Not Found'+ otpCode);
                twillio_otp(phone);
            } else {
                const opt_cell_number = document.getElementById('et_pb_contact_rent_otp_input').value.trim();
                if (opt_cell_number) {
                    if (otpCode == opt_cell_number) {
						if(verify === 'no'){
							verify = 'yes';
							alert('Thank you for cell number verification.');
						}
						jQuery(firstForm).submit();
                        jQuery(firstForm).find('button.et_pb_contact_submit.et_pb_button').attr('type', 'sumbit');
                    } else {
                        alert('Please enter correct OTP code.');
                    }
                } else {
                    alert('Please enter OTP code.');
                }
            }
        }
    });
	    jQuery(firstForm).submit(function(e) {
			returnRent(e);
			  });

});