/* =============================================================
    DOM [Deal with Childeren]
        - .children
        - .childNodes
        - .firstChild
        - .lastChild
        - .firstElementChild
        - .lastElementChild
================================================================ */

/*
    Html file

    <div>
        Hello Div
        <p>Hello P</p>
        <span>Hello Span</span>
        <!-- Comment -->
        Hello
    </div>

*/

let myEl = document.getElementById("unique");


// ? children
// كيرجع ليك العناصر لي في العنصر لي بغيتي
// فراه مكيوصلش ليهم. هو كيرجع غا العناصر comment اولا text الا كان
// اي مصفوفة و تقد تختار ب الاندكس htmlCollection كيرجعهم لك على    
console.log(myEl.children)
console.log(myEl.children[0])
console.log(myEl.children[1])


console.log("")


// ? childNodes
// text, comment, element ... لي فالعنصر سواء Nodes كيرجع ليك غا الى
console.log(myEl.childNodes)
// nodes حيت كل مسافة خاوية محسوبة html files حيت المسافات لي فال nodes فهاد الحالة غيرج سبعة د
// وتاهو تقدر تخدم بالاندكس وتجيب لي بغيتي


console.log("")


// ? firstChild  &  lastChild
// text or element or comment .... كيجيب ليك العنصر الاول و معندوش علاقة مع نوع ديالو سواء كان
// lastChild نفس القضية بالنسبة لل
console.log(myEl.firstChild); // hello div
console.log(myEl.lastChild); // hello

// Notes: "firstChild" is the same result as "childNodes[0]"


console.log("")


// ? firstElementChild  &  lastElementChild
// كترجع ليك العنصر الاول اولا العنصر اللخر
// "Element"
console.log(myEl.firstElementChild); // P
console.log(myEl.lastElementChild); // Span