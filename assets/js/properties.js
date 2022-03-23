//DECLARE PARAMETERS
let hashParams = window.hashes[0].split('=');
console.log(hashParams);
  // GET PRESENT VALUE IN PARAMETERS
let pv = parseInt(hashParams[5]);
console.log(pv);
      
//CONVERT PV TO A FORMATTED STRING
let pvFormated = parseInt(pv).toLocaleString();
      console.log(pvFormated);

//IDENTIFY CONGRATULATIONS DIV
let headerInsertEl = document.getElementById('congratulations');
      console.log(headerInsertEl);
// IDENTIFY CONGRATULATIONS TITLE DIV
let headerTitleEl = document.getElementById('congratulations-title');
console.log(headerTitleEl);          
      
// CREATE HEADER FUNCTION
let headerElement = () => {
console.log('this is not nan')

// create congratulations header
let congratulationsEl = document.createElement('h1');
congratulationsEl.textContent = ('Congratulations!');

// Create Heading and SubHeading for pv and subtext
let divEl = document.createElement('div');
  let headingEl = document.createElement('h1');
      headingEl.textContent = ('$' + pvFormated);
        headingEl.setAttribute('style', 'background-color:#161e2f; color: #209d5c; font-size:60px;' );

  // create subheading
  let subHeadingEl = document.createElement('h2');
      subHeadingEl.textContent = ('Congratulations!! You can receive up to ' + '$' + pvFormated + ' towards the purchase of a new home. Check out homes on the market below for a list of what you can afford. When you are ready, click "Get Started" or chat with us online, and a member of our team can help answer any questions. Happy hunting!' );

      subHeadingEl.setAttribute('style', 'margin-top: 20px;');

//APPEND CHILDREN
headerTitleEl.appendChild(congratulationsEl);
divEl.appendChild(headingEl);
divEl.appendChild(subHeadingEl);
headerInsertEl.appendChild(divEl);
};

      //HIDE ELEMENTS FUNCTION
let hideElements = () => {
console.log('isNan');
  headerInsertEl.setAttribute('style', 'display: hidden;');
    headerTitleEl.setAttribute('style', 'display: hidden;');
};
      
let startScript = () => {
if (pvFormated === 'NaN') {
hideElements();
return;
} else {
headerElement();
return;
}
}

startScript();