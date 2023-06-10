/* =============================================================
    BOM [ Browser Object Model ]

        - Assignments
================================================================ */


/*

let userData = prompt('Choose Two Numbers');

let userDataConverted = userData
  .split('-')
  .map((a) => {
    return +a;
  })
  .sort(function (a, b) {
    return b - a;
  });

for (let i = userDataConverted[1]; i <= userDataConverted[0]; i++) {
  console.log(i);
}

*/




/* ============================= Ass 02 ============================= */



/*

function popUp() {
  const container = document.createElement('div');
  container.className = 'container';
  container.style.cssText = `
    width: 300px; 
    height: 150px; 
    background-color: #f5f3f4;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
  `;
  container.innerHTML = `<h1>Welcome</h1>
    <p><i>Welcome To Obito world</i></p>`;

  const closeBtn = document.createElement('button');
  closeBtn.innerText = 'x';
  closeBtn.style.cssText = `
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    color: white;
    background-color: red;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -15px;
    right: -15px;
  `;
  closeBtn.addEventListener('click', () => {
    container.style.display = 'none';
  });
  container.append(closeBtn);

  document.body.append(container);
}

setTimeout(popUp, 5000);

*/

/* ============================= Ass 03 ============================= */
const rdDiv = document.querySelector('.redirect-div');
const rdDivSpan = document.querySelector('.redirect-div span');

rdDiv.addEventListener('click', () => {
    let onee = setInterval(() => {
        rdDivSpan.innerHTML -= 1;
        if (rdDivSpan.innerHTML == 0) {
            clearInterval(onee);
            window.open('https://elzero.org', '_blank', 'width: 600, height=600');
        }
    }, 1000);
});
