/* =============================================================
    DOM [ CSS Styling And Stylesheet ]

        - style
        - cssText

        - removeProperty("PropName") [inline & sylesheet]
        - setProperty( propertyName, value, priority )

================================================================ */


/* *** style *** */

// element.style.propertyName = value;

// inline style كدير
// camelCase هادي باينة. فحالة كانت الخاصية قيمة وحدة كتحطها كيما هي. فحالة جوج كلمات اولا كتر كتخدم بال
// وهادي كتكتب بيها كل خاصية فسطر واحد






/* *** cssText *** */

// element.style.cssText = "...; ...";


// inline style تاهي كدير
// ولكن لي كيميزها على اللولة ان هادي كتكتب غاع الخواص لي بغيتي فسطر واحد

let element = document.getElementById("my-div");
element.style.cssText = `
font-size: 20px; 
color: red;
text-decoration: underline;
text-underline-offset: 5px; 
text-decoration-color: yellowgreen`;





/* ***** removeProperty("name")  &  setProperty() ***** */
// external style او inline style هدي كتحيد الخاصية سواء من ال

// لي لفوق inline style غنطبقوها فالول على ال

element.onclick = function () {
    element.style.removeProperty("text-decoration")
    element.style.setProperty("border", "1px solid black", "important")
    // text-decoration from inlineStyle يعني فاش نكليكي حيد ليا
}





/* دبا غنطبقو نفس الحاجة ولكن فالملف الخارجي ديال الستايل */
// تاني div على ال

console.log(document.styleSheets[0].cssRules[0].style)
// stylesheets object كدير ال external css file دبا باش دخل لل
// styeSheets[0] : حيت عندي غا ملف واحد يعني غندخليه بالاندكس 0
// cssRules[0] : الخاصيات لي فالفايل كيتسماو قواعد ويمكن دخل لأي وحدة بالاندكس ديالها
// cssRules باش تعدل ف remove/set من بعد كيتخدم بدوك جوج خواص

// print on console this rules
console.log(document.styleSheets[0].cssRules[0].cssText)

document.styleSheets[0].cssRules[0].style.setProperty("text-decoration", "underline")