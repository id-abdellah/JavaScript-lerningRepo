/* =============================================================
    BOM [ Browser Object Model ]
================================================================ */

const lis = document.querySelectorAll('ul li');
const resultBx = document.querySelector('.result');

if (window.localStorage['color']) {
    // if there is color
    resultBx.style.backgroundColor = window.localStorage['color'];
    // reomve active class from other li
    lis.forEach((l) => {
        l.classList.remove('active');
    });
    // add active class to current color
    document
        .querySelector(`[data-color="${window.localStorage['color']}"]`)
        .classList.add('active');
}

lis.forEach((li) => {
    li.addEventListener('click', (e) => {
        // reomve active class from other li
        lis.forEach((l) => {
            l.classList.remove('active');
        });

        // add active class to current li
        e.currentTarget.classList.add('active');

        // add the current color to local storage
        window.localStorage.setItem('color', e.currentTarget.dataset.color);

        //
        resultBx.style.backgroundColor = window.localStorage['color'];
    });
});
