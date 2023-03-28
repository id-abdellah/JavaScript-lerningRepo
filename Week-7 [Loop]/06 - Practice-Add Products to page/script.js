let products = ["Iphone", "Monitor", "Ipade", "Pen", "Mouse", "Cables", "Desktop"];
let color = ["Red", "Blue", "Green"];

let showCount = 4; // تحديد عدد المنتجات لي غتعرضها فالصفحة حيت ماشي من المنطقي تعرض كلشي

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`)
  document.write(`<h3>[${i + 1}] ${products[i]}</h3>`)
  for (let c = 0; c < color.length; c++) {
    document.write(`<div>${color[c]}</div>`)
  }
  document.write(`</div>`)
}