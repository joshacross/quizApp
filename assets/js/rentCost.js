let P = 3000
let total = Number;

let arr = [P];

let arrayLoop = () => {
    for (let i = 0; i < 29; i++) {

            let rate = .03875;
            let payment = (P+(P*rate));
            P = payment;
            console.log('payment', P);
            arr.push(payment);
            console.log('array', arr);
      }

    const sum = arr.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);

    console.log('sum', sum)
    total = sum*12;
    console.log('total', total)
    return total;
}

showTableOnPage = () => {

    const containerEl = document.getElementById('container');
    let divContainerEl = document.createElement('div');

    let arrayData = document.createElement('h6');
    
    arrayData = arr.join(", ");
    let title = document.createElement('h1');
    title.textContext = total;
    divContainer = document.createElement('div');
    divContainer.appendChild(title);
  }
//   //append the compiled table to the DOM
//   document.body.appendChild(table);
//     //array = arr

//   //create a Table Object
//   let tableEl = document.createElement('table');
//   for (let row of arr) {
//     tableEl.insertRow();
//     for (let cell of row) {
//       let newCell = tableEl.rows[tableEl.rows.length - 1].insertCell();
//       newCell.textContent = cell;
//     }
//   }
//   document.body.appendChild(tableEl);





arrayLoop();
showTableOnPage();

// (D) ATTACH TABLE TO CONTAINER
