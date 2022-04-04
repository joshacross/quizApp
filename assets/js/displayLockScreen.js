//declare variables 
const pv = 615000;

let detailClickedCount = 0;
let detailCountMax = 3;

let logPV = () => {localStorage.setItem('pv', pv)};

const displayClicked = document.querySelector('[id*="wpl_prp_cont"]');

let loadStorage = () => {
    console.log(localStorage);
    presentValue = localStorage.getItem('pv');
    console.log(presentValue);
    detailClickedArr = localStorage.getItem('detailClickedCount');
    console.log(detailClickedArr);

    if (detailClickedArr >= 3) {
        console.log('showPopup');
        showSurvey();
        return;
    } else {
        console.log('detailedClickedArr is less than 3')
        return;

    }

}

let detailClicked = () => {
    console.log('detailClicked');
    detailClickedCount++;
    localStorage.setItem('detailClickedCount', detailClickedCount);

    if (detailClickedCount >= detailCountMax ) {
        console.log('detail clicked 3 times');
        showSurvey();
    } else {
        console.log('detailClickedCount is less than 3');
        return;
    }
}



let showSurvey = () => {
    alert('YOOO Your Popup has appeared');
}

    // First off, lets get Local storage (load items);
// if (localStorage contains displayItemArr && displayItemArr >= 3 && (!displaySurvey) ) {
// show displaySurvey
// return
// else {}
// 

// when a display item is clicked
// localStorage.setItem('Click');

logPV();
loadStorage();

displayClicked.addEventListener('click', detailClicked);




/* 
Ok... im going to write this out in plain english so I can understand. I'm going to close my eyes and visualize how this app will work.

So first off a user comes oto our page from an ad... they see enter your name, email and the amount of rent you receive.

Which should be moved to be straight across. 

They look below for more information... Or we tst another way and it's basically the copy first and then goes to the form. Maybe it's a popup.? 

Regardless, so theey enter their info... 

A animation should come up that says one moment while we calculate....

Congratulations! 

And now, the ticker starts to count up to $650 stating they could buy up to a $650K house. 

Here are some of the houses in your price range that you could buy... 

House 1, house 2, house 3 --> Personally it should be on a carousel. 

So they click on house 1 - It pops up with info. Great choice. It looks like you would save approximately $125K well within your budget. Home features a 2 bedroom 2 1/2 bath - 1500sqft .... x away from nashville. 

--- 

There should be a ticker at the top that says that we are on step 2


Ok... 
_

Page loads, you are cuing in the code to display, cuing in the calculation BUT NOT we are getting from local storage firt...

Ok... So localStorage.getItem()

localStorage.getItem('presentValue');
localStorage.getItem('Displayclicked');

If (displayClicked >= 3) {
    code
} else {
    return;
}


const displayItem = document.getElementByClassName('display-item').addEventLIsten('click', addDisplayToLocal).onClick(addDisplayItem);


I also need to remove the form at the end...


Let me see if Ican do this all on page 1... Is it possible? I am not so certain... If I was to pool homes, i could get and show, but that would defeat the purpose of a fast page on lod, and the calculation screen is a buufer while those homes do load... because we are pullling from the database... 




*/

