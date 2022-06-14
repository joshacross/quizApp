const tableEl = document.getElementById('table-data');
let P = 3000;
let rate = .02;
let total = Number;
let arr = [P];
let calendar = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];


let arrayLoop = () => {
    for (let i = 1; i <= 29; i++) {
            // create table row
            let tableRowEl = document.createElement('tr');
            let yearEl = document.createElement('td');
            yearEl.textContent = 'year' + i;
            tableRowEl.appendChild(yearEl);
            tableEl.appendChild(tableRowEl);
            // 
            let payment = (P+(P*rate));
            P = payment;
            console.log('payment', P);
            arr.push(P);
            console.log('arr', arr);
            calendar.forEach(() => {
              let tableData = document.createElement('td');
              tableData.textContent = '$' + Math.round(arr[i]).toLocaleString();
              tableRowEl.appendChild(tableData);
              // tableDataContainer.appendChild(tableDataDiv);
            });
            let totalEl = document.createElement('td');
            totalEl.textContent = '$' + Math.round(arr[i]*12).toLocaleString();
            tableRowEl.appendChild(totalEl);
      }

    const sum = arr.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);

    let grandTotalRowEl = document.createElement('tr');
    let grandTotalStringEl = document.createElement('td');
    grandTotalStringEl.textContent = 'Total = ';
    let grandTotalDataEl = document.createElement('td');
    grandTotalDataEl.textContent = '$' + Math.round(sum*12).toLocaleString();
    grandTotalRowEl.appendChild(grandTotalStringEl);
    grandTotalRowEl.appendChild(grandTotalDataEl);
    tableEl.appendChild(grandTotalRowEl);

}

// showTableOnPage = () => {
//   for (let i = 0; i<calender.length; i++) {
//     let calendarEl = document.createElement('td');
//     let calendarDiv = document.createElement('div');
//   }
// }


// showTableOnPage = () => {
//   const janEl = document.getElementById('jan');
//   const febEl = document.getElementById('feb');
//   const marEl = document.getElementById('mar');
//   const aprEl = document.getElementById('apr');
//   const mayEl = document.getElementById('may');
//   const junEl = document.getElementById('jun');
//   const julEl = document.getElementById('jul');
//   const augEl = document.getElementById('aug');
//   const septEl = document.getElementById('sept');
//   const octEl = document.getElementById('oct');
//   const novEl = document.getElementById('nov');
//   const decEl = document.getElementById('dec');
    
//     for (let i = 0; i <=29; i++) {
//       janEl.textContent = arr[i];
//       febEl.textContent = arr[i];
//       marEl.textContent = arr[i];
//       aprEl.textContent = arr[i];
//       mayEl.textContent = arr[i];
//       junEl.textContent = arr[i];
//       julEl.textContent = arr[i];
//       augEl.textContent = arr[i];
//       septEl.textContent = arr[i];
//       octEl.textContent = arr[i];
//       novEl.textContent = arr[i];
//       decEl.textContent = arr[i];
//     }
//   }
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
// showTableOnPage();

// (D) ATTACH TABLE TO CONTAINER
