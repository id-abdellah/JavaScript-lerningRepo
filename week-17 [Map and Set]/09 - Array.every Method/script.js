/* ============================================================

    Array Methods

      Array.every(callbackfunc(element, index, array), this arg)

=============================================================== */

// some method بالنسبة لهادي بحالها بحال ال
// الاكان عنصر واحد تحقق فيه الشرط true كانت كترد ليك some فال

// true خاص غاع العناصر يتحقق فيهم الشرط باش ترجع ليك every اما فال
// false الا كان عنصر واحد متحققش فيه الشرط كترجع

let locations = {
  20: "place 1",
  30: "place 2",
  40: "place 3",
  50: "place 4",
  10: "place 5",
};

let mainLocation = 15;

let locationNumber = Object.keys(locations).map((e) => { return +e });

console.log(locationNumber)

let everyCheck = locationNumber.every(function (e) {
  return e > this
}, mainLocation);

console.log(everyCheck); // false