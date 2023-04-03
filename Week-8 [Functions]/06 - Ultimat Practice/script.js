function showDetails(userName, age, country, show, ...skills) {
    document.write(`<div>`);
    document.write(`<h2>Welcome, ${userName}</h4>`);
    document.write(`<p><b>your age is</b>: ${age}</p>`);
    document.write(`<p><b>your country is</b>: ${country}</p>`);
    if (show === true) {
        if (skills.length > 0) {
            document.write(`<p><b>your skills are:</b></p>`);
            document.write(`<ul>`);
            for (let i = 0; i < skills.length; i++) {
                document.write(`<li>${skills[i]}</li>`);
            }
            document.write(`</ul>`);
        } else {
            document.write(
                `<p><b>your skills are</b>: <i>There is no skills to show</i></p>`
            );
        }
    } else {
        document.write(`<p><b>The skills are hidden</b></p>`);
    }
    document.write(`</div>`);
}

showDetails(
    'Mohmed ID-ABDELLAH',
    20,
    'Morocco',
    true,
    'html',
    'css',
    'js',
    'bootstrap',
    'tailwindCss',
    'Node js',
    'c++'
);
