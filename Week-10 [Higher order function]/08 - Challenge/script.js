/* =============================================================
    Challenge
================================================================ */

/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = '1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z';
console.log(myString)

let solution = myString
    .split('')
    .filter(function (e) {
        return isNaN(parseInt(e));
    })
    .filter(function (e) {
        return e === ',' ? '' : e;
    })
    .map(function (e) {
        return e === '_' ? ' ' : e;
    })
    .reduce(function (a, b) {
        return `${a}${b}`;
    })
    .slice(true, -true);

console.log(solution); // Elzero Web School
