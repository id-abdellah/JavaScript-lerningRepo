let a = "10";   // string
let b = 20;     // number
let c = true;   // boolean


console.log(a + b)  // 1020  [in this case (+) work as concatenate not an arithmetic operator ]
// to solve this u should convert a string (a) to number:
console.log(+a +b)




console.log(a - b)  // in this case there are a posibility to make arithmetic operator, because (-) won't be a concatenate operator so the language converts (a) from string to a number




console.log(false - true)   // false is (0) and true is (1), the outbut will be [-1]

console.log(b + c)  // 20 + 1 = 21



console.log(a + b + c)  // in this case the output is [1020true]??
// because when you combined between [a + b] => [1020] because of (a) are string, so if add a boolean value it will be converted auto to string, and this is the type coercion
// to solve this problem u should convert (a) => number
console.log(+a + b + c)