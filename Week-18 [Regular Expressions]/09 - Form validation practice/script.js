/* ============================================================
    Regular Expressions

            Form Validation practice

=============================================================== */

const inputField = document.querySelector("input");
const btn = document.querySelector("button");
const demo = document.querySelector(".demo");


// the pattern ̀(1234) 567-8910

btn.addEventListener("click", () => {
    let phoneValue = inputField.value;
    let phoneRegex = /\(\d{4}\)\s\d{3}-\d{4}/ig;
    // let phoneRegex = /\+\d{3}\s\d{3}\s\d{6}/ig;
    if (phoneRegex.test(phoneValue)) {
        demo.textContent = "Valid Phone Number"
    } else {
        demo.textContent = "Not Valid"
    }
})