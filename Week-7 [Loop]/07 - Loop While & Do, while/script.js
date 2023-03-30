/* ========================================
    Loop 
      - While
=========================================== */

/*
  loop for بحال looping تقدر دير بيها
  
  ? Syntax:

    while (condition) {
      code...
    }
  
    * يعني ماحد الشرط محقق دير ليا هاد الكود
    * while كتكون فلداخل ديال ال step و مرحلة ال while مرحلة البداية كتكون قبل ال

*/



let arr = ["one", "two", "three", "four", "five", "six", "seven"];


let i = 0;  // the begenning part

while (i < arr.length) {  // Condition part
  console.log(arr[i])
  i++;  // Step part
  if (i === 5) {
    break;
  }
}


console.log(`

`)




/* ========================================
    Loop 
      - Do While
=========================================== */

// ولكن كاين فرق جوهري بينهم while بحال ال do while ال

let x = ["a", "b", "c", "d"];


let j = 0;
// j لل increment مغيطرا والو لا من طباعة ولا من false فاش كيكون الشرط
while (false) {
  console.log(x[j])
  j++
}



/* 
  ? Do While
*/

// * do while هنا فين كاين الفرق بينها و بين
// * هو اللول عاد ديك الساعة قلب الشرط واش صحيح ولا غلط Do منطقيا كتعني
// ! true or false كتنفذ المرحلة اللولة من التكرار بغض النظر عن الشرط واش Do ال

do {
  console.log(x[j])
  j++
} while (false);
console.log(j)