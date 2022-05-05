//declare variables 
const displayClicked = document.querySelector('[id*="prp_link"]');
const showSurvey = document.getElementById('showSurvey');
let pv = Number;

let detailClickedCount = 0;
let detailCountMax = 3;
let surveyCompleted = false;

let loadStorage = () => {
  surveyCompleted = localStorage.getItem('survey');
  detailClickedArr = localStorage.getItem('detailClickedCount');
  pv = localStorage.getItem('presentValue');

  if (detailClickedArr >= 3) {
      startSurvey();
      return;
  } else {
      return;
  }
};

//CONVERT PV TO A FORMATTED STRING
let pvFormated = parseInt(pv).toLocaleString();
console.log(pvFormated);

//IDENTIFY CONGRATULATIONS DIV
let headerInsertEl = document.getElementById("congratulations");
console.log(headerInsertEl);
// IDENTIFY CONGRATULATIONS TITLE DIV
let headerTitleEl = document.getElementById("congratulations-title");
console.log(headerTitleEl);

let income = parseInt((12 * (pv / 201.47766315152)) / 0.45).toLocaleString();
console.log(income);

// CREATE HEADER FUNCTION
let headerElement = () => {
  console.log("this is not nan");

  // create congratulations header
  let congratulationsEl = document.createElement("h1");
  congratulationsEl.textContent = "Congratulations!";

  // Create Heading and SubHeading for pv and subtext
  let divEl = document.createElement("div");
  let headingEl = document.createElement("h1");
  headingEl.textContent = "$" + pvFormated + "*";
  headingEl.setAttribute(
    "style",
    "background-color:#161e2f; color: #209d5c; font-size:60px;"
  );

  // create subheading
  let subHeadingEl = document.createElement("h2");
  subHeadingEl.textContent =
    "Congratulations!! You could qualify to receive up to " +
    "$" +
    pvFormated +
    ' towards the purchase of a new home. Check out homes on the market below for a list of what you can afford. When you are ready, click "Get Started" or chat with us online, and a member of our team can help answer any questions. Happy hunting!';

  subHeadingEl.setAttribute("style", "margin-top: 20px;");

  let disclaimerPolicyEl = document.createElement("a");
  disclaimerPolicyEl.setAttribute(
    "href",
    "https://rentcalculator.com/disclaimer"
  );
  disclaimerPolicyEl.textContent = "Terms and Conditions";

  let disclaimerEl = document.createElement("p");
  disclaimerEl.textContent =
    "The maximum purchase price of $" +
    pvFormated +
    ", is based on a borrowers average annual household income of $" +
    income +
    ", with no outstanding monthly debts at a 4% interest (4.18% APR) with an average Tennessee State tax and insurance. Please note, Some products and services may not be available in all states. Credit and collateral are subject to approval. Terms and conditions apply. Programs, rates, terms and conditions are subject to change and are subject to borrower(s) qualification. This is not a commitment to lend. The content in this website has not been approved, reviewed, sponsored or endorsed by any department or government agency. Rent Calculator and Nashville Area Homes are not Financial Lenders or associated with any financial entity. Loan and monthly payment buying scenarios used for informational purposes only and may not be specific to your situation. Rates expressed may not be available at this time. This document should not be construed as investment or mortgage advice or a commitment to lend. Your results may vary. There are no guarantees, promises, representations and/or assurances concerning the level of accuracy you may experience. For actual and current terms and rate information, please contact your lender directly. APR of 3.937% assumes a 3.750% simple fixed interest rate assuming $10,360 in fees included in APR. Monthly principal and interest payment based on a fully amortizing fixed interest loan of $417,979 with 360 monthly payments at the assumed simple interest rate (Current as of 5/5/2022). *Lender is not a tax consultation firm. Please seek advice from a tax professional.MLS Data provided by Listing Booster. Monthly expenses may or may not include condominium or HOA fees, if applicable; your payment may be greater. *Zillow Economic Data See " +
    disclaimerPolicyEl;

  //APPEND CHILDREN
  headerTitleEl.appendChild(congratulationsEl);
  divEl.appendChild(headingEl);
  divEl.appendChild(subHeadingEl);
  divEl.appendChild(disclaimerEl);
  headerInsertEl.appendChild(divEl);
};

//HIDE ELEMENTS FUNCTION
let hideElements = () => {
  console.log("isNan");
  headerInsertEl.setAttribute("style", "display: hidden;");
  headerTitleEl.setAttribute("style", "display: hidden;");
};

let startScript = () => {
  if (pvFormated === "NaN") {
    hideElements();
    return;
  } else {
    headerElement();
    return;
  }
};

let detailClicked = () => {
  detailClickedCount++;
  localStorage.setItem('detailClickedCount', detailClickedCount);

  if (detailClickedCount >= detailCountMax ) {
      startSurvey();
  } else {
      return;
  }
}

let startSurvey = () => {
  if (!surveyCompleted) {
      showSurvey.setAttribute('style', 'display: block;');
  completeSurvey();
  return;
  }
  else {
      return;
  }
}

let completeSurvey = () => {
  document.getElementById('surveyComplete').addEventListener('click', () => {
      showSurvey.setAttribute('style', 'display: none');
      surveyCompleted = true;
      localStorage.setItem('survey', surveyCompleted);
      return;
  });
}

loadStorage();
startScript();

displayClicked.addEventListener('click', detailClicked);