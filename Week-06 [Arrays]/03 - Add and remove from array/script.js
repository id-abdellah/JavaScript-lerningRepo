/*
    Arrays methods [Adding and Removing]
        
    Adding:
        - unshift("", "") add element to the first
        - push("", "") add element to the end 
    Removing:
        - shift() remove first element from array
        - pop() remove last element from array

*/

// ديال الاضافة methods ال

let friend = ["mohamed", "simo", "ahmed", "abdellah"];
console.log(friend);

friend.unshift(1, 2, 3, 4); // كضيف العناصر الجداد للبداية ديال المصفوفة
console.log(friend);

friend.push(5, 6, 7, 8); // كضيف العناصر الجداد للخر ديال المصفوفة
console.log(friend);

console.log("");
console.log("");


// ديال الحذف methods ال

let family = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(family)


family.shift(); // اولا هي كتحيد العنصر اللول من المصفوفة
// ثانيا ملي كتحيدو كترجعو ليك ف يمكن لك تحطو ف متغير
console.log(family);


family.pop(); // نفس اللولة غار هادي كتحيد العنصر اللخر من المصفوفة و تاهي كتردو ليك ويمكن ديرو فمتغير
console.log(family);
