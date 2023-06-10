/* =============================================================
    BOM [ Browser Object Model ]

            - scrollX [ Alias => pageXOffset ]
            - scrollY [ Alias => pageYOffset ]
================================================================ */

// هادو كيعطيو غا القيمة ديال السكرول فالويندو

const sX = document.querySelector(".infos p:first-child")
const sY = document.querySelector(".infos p:last-child")

window.addEventListener("scroll", () => {
    sX.innerText = `scrollX: ${window.scrollX},`
    sY.innerText = `scrollY: ${window.scrollY},`
})




// دبا غنديرو مثال على داك الزر لي كيبان فاش كتسكرولي للتحت باش اردك للفوق

const btn = document.querySelector("button")

window.addEventListener("scroll", () => {
    if (window.scrollY >= 1500) {
        btn.style.display = "block"
    } else {
        btn.style.display = "none"
    }
})

btn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})