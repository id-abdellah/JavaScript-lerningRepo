/* ============================================================

    Array Methods

      Array.some(callBackFunction(element, index, array), this argument);

        - this argument => value to use as This when executing callbackfunction


      Using:
        - check if element exists in array
        - check if number in range
=============================================================== */


// false او true كدير شرط على حسابو كترد method هاد ال
// كيرد غاع العناصر لي تحقق فيهم الشرط filter وهو ان ال filter الفرق بينها وبين ال
// وكتحبس اللوب على المصفوفة يعني مع كيتحقق الشرط كتحبس boolean اما هي انفوا كيتحقق الشرط كترد غا


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// يعني دبا فهادي غيدير لوب ويبقا يقلب, انفوا يوصل 7 حيت كبر من 6 غيحبس اللوب حيت تحقق الشرط
let check = numbers.some(function (e) {
  return e > 6
});

console.log(check);


// غتعود على ديك القيمة function فل this وملي تستعملي value, obj تقد تحط فيه this arg بالنسبة ل

let secondCheck = numbers.some(function (e) {
  return e >= this;
}, 10);

console.log(secondCheck);





console.log("")


let rangeOfNumber = {
  min: 10,
  max: 20,
};

let thirdCheck = numbers.some(function (e) {
  return e > this.min && e < this.max
}, rangeOfNumber);

console.log(thirdCheck)