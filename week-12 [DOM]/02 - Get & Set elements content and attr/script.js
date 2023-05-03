/* ===========================================================
    Get & Set Elements Content and Attributes

        - innerHTML
        - textContent


        - Change attributes directly

        - Change attributes with methods
        - - - - getAttribute()
        - - - - setAttribute()
============================================================== */



// ? innerHTML  &  textContent

// اولا نديرو تجارب و نشرحو من بعد

let myEl = document.querySelector(".js");

console.log(myEl.innerHTML); // JavaScript <span>spanDiv</span> &lt;entitySpan&gt;
console.log(myEl.textContent); // JavaScript spanDiv <entitySpan>

/**
 * و بكلشي tags كاامل لي فلداخل ديال العنصر لي كامل كيما هو يعني بال html كيرجع ليك ال innerHTML اولا ال
 * textContent اما ال
 * tags النص فقط و مكتبينش ال pure Text كترجع ليك بحال داكشي لي كيتطبع فالصفحة يعني
*/


// نغيرو فيه set يعني جبنا المحتوى. دبا غنديرو get لفوق درنا
let myElInh = document.querySelector(".inh");
let myElTxc = document.querySelector(".txc");
myElInh.innerHTML = "a Text from <span>JS</span> file"; // ديالها tags بال html content هادي غيحطها ك
myElTxc.textContent = "a Text from <span>JS</span> file"; // pure text وتحط tags اما هادي لا غتحيد ال


console.log("")



/* ===================== Attributes ================= */

// ? ديال العناصر مباشرة attributes يمكن ليك تحكم فال
// الا كانت السمة ديجا كاينة كيبدل القيمة. مكانتش كيزيدها
document.links[0].href = "https://google.com";
document.links[0].title = "this is link 1";
document.links[0].id = "lin";
document.links[0].className = "lin-one"; // js file دبا فاش ضفت ليه كلاس يمكن لينا نستدعيه من بعد فهاد ل



// ? Attributes Methods

/**
 * و كينفعك فالشرط attribute. كيعطيك القيمة ديال ال getAttribute ال
 * و يلا مكاينش كيديرو من جديد attribute ف كيبدل القيمة ديال ال setAttribute اما ال
*/

let mylink = document.querySelector(".mylin");

// getAttribute
console.log(mylink.getAttribute("class"))
console.log(mylink.getAttribute("href"))

// setAttribute( "attrName", "Value" )
mylink.setAttribute("href", "https://twitter.com")
mylink.setAttribute("title", "second lin")
