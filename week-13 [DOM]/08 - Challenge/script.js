document.body.style.padding = '0px';
document.body.style.margin = '0px';
// Header
const header = document.createElement('header');
document.body.prepend(header);

const logo = document.createElement('div');
logo.className = 'logo';
const logoText = document.createTextNode('Obito');
logo.appendChild(logoText);
header.appendChild(logo);

const ul = document.createElement('ul');
header.appendChild(ul);
const listitems = `
  <li>About</li>
  <li>Home</li>
  <li>Services</li>
  <li>Contact</li>
`;
ul.innerHTML = listitems;
const li = document.body.querySelectorAll('ul li');

// header styles

header.style.cssText = `
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  padding-inline: 15px;`;

logo.style.cssText = `
  font-size: 24px;
  font-weight: bold;
  color: #23a96e;
  letter-spacing: 1px;`;

ul.style.cssText = `
  list-style: none;
  display: flex;
  padding: 0;`;

li.forEach((l) => {
    l.style.cssText = 'padding: 4px 8px; color: #a1a1a0;';
});

// main
const mainSec = document.createElement('div');
mainSec.className = 'content';
header.after(mainSec);

mainSec.style.cssText = `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  padding: 15px;
  gap: 15px;
  background-color: #ececec;
`;

for (i = 0; i < 15; i++) {
    const product = document.createElement('div');
    product.className = 'product';
    mainSec.appendChild(product);

    const span = document.createElement('span');
    span.className = 'product-number';
    span.textContent = `${i + 1}`;
    product.appendChild(span);

    const proTitel = document.createElement('span');
    proTitel.className = 'product-titel';
    proTitel.textContent = 'Product';
    product.appendChild(proTitel);

    product.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding-block: 15px;
  `;

    span.style.cssText = `
    margin-block: 8px;
   font-size: 20px; 
   font-weight: bold`;

    proTitel.style.cssText = `font-size: 12px; color: #938e8d;`;
}

// Footer

const footer = document.createElement('footer');
mainSec.after(footer);
const footerText = document.createTextNode('Copyright 2023');
footer.appendChild(footerText);

footer.style.cssText = `
  background-color: #23a96e;
  color: white;
  text-align: center;
  padding-block: 18px;
  font-size: 18px;
`;
